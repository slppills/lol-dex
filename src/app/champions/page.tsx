import { fetchChampionImg, fetchChampionList } from "@/utils/serverApi";
import { ChampionType } from "@/types/Champion";
import ChampionCard from "@/components/ChampionCard";

const ChampionsPage = async () => {
  const baseUrl = await fetchChampionImg();
  const { data } = await fetchChampionList();
  let champions: ChampionType[] = Object.values(data);
  champions = champions.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <div className="h-screen">
        <div className="absolute inset-0 bg-[url('/assets/images/riftBackground.webp')] bg-no-repeat bg-center bg-cover brightness-50" />
        <div className="relative pt-[90px] pb-[60px] overflow-y-scroll h-full">
          <div className="mt-[80px] mx-auto max-w-[1300px]">
            <h1 className="text-red-600 font-bold text-[2rem] mb-[50px]">챔피언 목록</h1>
            <div className="grid grid-cols-4 gap-4">
              {champions.map((champion: ChampionType) => (
                <ChampionCard key={champion.key} champion={champion} baseUrl={baseUrl} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChampionsPage;
