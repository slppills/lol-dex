import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ChampionCardType } from "@/types/championCard";

const ChampionCard = ({ champion, baseUrl }: ChampionCardType) => {
  return (
    <Link href={`/champions/${champion.id}`} className="border-2 border-white rounded p-4">
      <Image
        src={`${baseUrl}${champion.image.full}`}
        alt="챔피언 이미지"
        width={100}
        height={100}
        className="mx-auto"
      />
      <h4 className="mt-4 font-bold text-[1.3rem] text-red-600">{champion.name}</h4>
      <p className="mt-4 text-white font-medium">{champion.title}</p>
    </Link>
  );
};

export default ChampionCard;
