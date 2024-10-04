import { fetchItemImg, fetchItemList } from "@/utils/serverApi";
import React from "react";
import { ItemType } from "@/types/Item";
import Image from "next/image";

const ItemPage = async () => {
  const baseUrl = await fetchItemImg();
  const { data } = await fetchItemList();
  const items: ItemType[] = Object.values(data);
  console.log(items);

  return (
    <>
      <h1 className="text-red-600 font-bold text-[2rem] mb-[50px]">아이템 목록</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {items.map((item, idx) => (
          <div key={idx} className="border-2 border-white rounded p-4">
            <Image
              src={`${baseUrl}${item.image.full}`}
              alt="아이템 이미지"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h4 className="mt-4 font-bold text-[1.3rem] text-red-600">{item.name}</h4>
            <p className="mt-4 text-white font-medium leading-5">{item.plaintext}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemPage;
