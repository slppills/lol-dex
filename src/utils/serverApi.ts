"use server";

type ChampionId = {
  id: string;
};

export const fetchGetVersion = async () => {
  try {
    const res = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");
    const data: string[] = await res.json();
    return data[0];
  } catch (error) {
    throw error;
  }
};

export const fetchChampionImg = async () => {
  const version = await fetchGetVersion();
  const baseUrl = `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/`;
  return baseUrl;
};

export const fetchChampionList = async () => {
  const version = await fetchGetVersion();
  try {
    const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`, {
      next: { revalidate: 86400 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchItemImg = async () => {
  const version = await fetchGetVersion();
  const baseUrl = `http://ddragon.leagueoflegends.com/cdn/${version}/img/item/`;
  return baseUrl;
};

export const fetchChampionDetail = async ({ id }: ChampionId) => {
  const version = await fetchGetVersion();
  try {
    const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
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
