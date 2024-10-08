"use server";

import { NextResponse } from "next/server";

type ChampionId = {
  id: string;
};

export const fetchGetVersion = async () => {
  const res = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");
  if (!res.ok) {
    throw new Error("버전 확인 실패");
  }
  const data: string[] = await res.json();
  return data[0];
};

export const fetchChampionImg = async () => {
  const version = await fetchGetVersion();
  const baseUrl = `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/`;
  return baseUrl;
};

export const fetchChampionList = async () => {
  const version = await fetchGetVersion();
  const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`, {
    next: { revalidate: 86400 },
  });
  if (!res.ok) {
    throw new Error("챔피언 목록 불러오기 실패");
  }
  const data = await res.json();
  return data;
};

export const fetchItemImg = async () => {
  const version = await fetchGetVersion();
  const baseUrl = `http://ddragon.leagueoflegends.com/cdn/${version}/img/item/`;
  return baseUrl;
};

export const fetchChampionDetail = async ({ id }: ChampionId) => {
  const version = await fetchGetVersion();
  const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`);
  if (!res.ok) {
    throw new Error("챔피언 상세정보 불러오기 실패");
  }
  const data = await res.json();
  return data;
};

export const fetchItemList = async () => {
  const version = await fetchGetVersion();
  try {
    const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`, {
      cache: "force-cache",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export const fetchChampionRotation = async () => {
  const apiKey = process.env.RIOT_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "API key is not set" }, { status: 500 });
  }
  const res = await fetch("https://kr.api.riotgames.com/lol/platform/v3/champion-rotations", {
    headers: {
      "X-Riot-Token": apiKey,
    },
  });
  return res;
};
