import { fetchChampionImg, fetchChampionList } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

export type ChampionType = {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  tags: string[];
  partype: string;
  stats: object;
};

const ChampionsPage = async () => {
  const baseUrl = await fetchChampionImg();
  const championList = await fetchChampionList();
  let champions: ChampionType[] = Object.values(championList.data);
  champions = champions.sort((a, b) => a.name.localeCompare(b.name));
  console.log(champions);

  return (
    <>
      <div className="relative h-screen overflow-hidden">
        {/* 배경 이미지와 밝기 조절을 위한 요소 */}
        <div className="absolute inset-0 bg-[url('/assets/images/riftBackground.webp')] bg-no-repeat bg-center bg-cover brightness-50"></div>

        {/* 실제 내용을 담은 요소 */}
        <div className="relative pt-[90px] pb-[60px] overflow-y-scroll h-full">
          <div className="mt-[80px] mx-auto max-w-[1300px]">
            <h1 className="text-red-600 font-bold text-[2rem] mb-[50px]">챔피언 목록</h1>
            <div className="grid grid-cols-4 gap-4">
              {champions.map((champion: ChampionType) => (
                <Link
                  href={`/champions/${champion.id}`}
                  key={champion.key}
                  className="border-2 border-white rounded p-4"
                >
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChampionsPage;
