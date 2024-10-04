"use client";

import ChampionCard from "@/components/ChampionCard";
import { ChampionType } from "@/types/Champion";
import { fetchChampionImg, fetchChampionList } from "@/utils/serverApi";
import React, { useEffect, useState } from "react";

const RotationPage = () => {
  const [rotationChampions, setRotationChampions] = useState<ChampionType[]>([]);
  const [baseUrl, setBaseUrl] = useState<string>("");
  useEffect(() => {
    const fetchRotation = async () => {
      const url = await fetchChampionImg();
      setBaseUrl(url);
      const rotationRes = await fetch("http://localhost:3000/api/rotation");
      const { data } = await fetchChampionList();
      const { freeChampionIds } = await rotationRes.json();
      const champions: ChampionType[] = Object.values(data);
      const filteredChampions = champions.filter((champion) => freeChampionIds.includes(Number(champion.key)));
      setRotationChampions(filteredChampions);
      console.log(url);
    };
    fetchRotation();
  }, []);

  return (
    <>
      <h1 className="text-red-600 font-bold text-[2rem] mb-[50px]">아이템 목록</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {rotationChampions.map((champion: ChampionType) => (
          <ChampionCard key={champion.key} champion={champion} baseUrl={baseUrl} />
        ))}
      </div>
    </>
  );
};

export default RotationPage;
