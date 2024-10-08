"use client";

import { signInCredentials } from "@/server-action";
// import { signInCredentials } from “../server-action”; 커스텀으로 만든 signIn 페이지에서 사용
import RiotgamesIcon from "../../../public/assets/images/riotgamesIcon.svg";
import RightArrowIcon from "../../../public/assets/images/rightArrow.svg";
import { useState } from "react";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="pt-[90px] w-[500px] flex flex-col items-center">
      <RiotgamesIcon alt="라이엇게임즈 아이콘" width={120} height={120} />
      <h1 className="text-[1.5rem] font-bold mt-10">로그인</h1>
      <form action={signInCredentials} className="flex flex-col mt-8 gap-5 w-full items-center">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          type="text"
          placeholder="아이디"
          className="bg-[#EFEFEF] py-3 pl-2 rounded-md w-[70%] text-[0.875rem]"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
          placeholder="비밀번호"
          className="bg-[#EFEFEF] py-3 pl-2 rounded-md w-[70%] text-[0.875rem]"
        />
        <button
          className={`mt-24 p-2 rounded-2xl ${
            username && password ? "bg-[#D53235] hover:bg-[#B62C2E]" : "bg-[#F5F5F5]"
          }`}
        >
          <RightArrowIcon width={40} height={40} fill={username && password ? "white" : "#979797"} />
        </button>
      </form>
      <p className="mt-14 text-[0.875rem] font-bold">계정 생성하기</p>
    </div>
  );
}
