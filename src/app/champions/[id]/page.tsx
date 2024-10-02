import { fetchChampionDetail, fetchChampionImg } from "@/utils/serverApi";
import React from "react";
import { ChampionType } from "../page";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

const ChampionDetailPage = async ({ params }: Props) => {
  console.log(params);
  const baseUrl = await fetchChampionImg();
  const { data } = await fetchChampionDetail(params);
  const championInfo: ChampionType[] = Object.values(data);
  const champion = championInfo[0];

  return (
    <div className="bg-[#092C3B] w-screen h-screen pt-[90px]">
      <div className="mt-12 mx-auto">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-red-600 font-bold text-[2rem]">{champion.name}</h1>
          <p className="mt-7 text-gray-400 font-bold text-[1.2rem]">{champion.title}</p>
          <Image
            src={`${baseUrl}${champion.image.full}`}
            alt={`${params.id} 이미지`}
            width={200}
            height={200}
            className="mx-auto mt-7"
          />
          <p className="text-red-600 font-bold mt-7 leading-6">{champion.blurb}</p>
          <h4 className="mt-7 text-red-600 font-bold text-[1.3rem]">스탯</h4>
          <ul className="mt-3">
            <li className="text-red-600 font-bold leading-6">공격력 : {champion.info.attack}</li>
            <li className="text-red-600 font-bold leading-6">방어력 : {champion.info.defense}</li>
            <li className="text-red-600 font-bold leading-6">마법력 : {champion.info.magic}</li>
            <li className="text-red-600 font-bold leading-6">난이도 : {champion.info.difficulty}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChampionDetailPage;
