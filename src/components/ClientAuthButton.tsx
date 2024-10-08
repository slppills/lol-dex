"use client";

import { signOut } from "@/server-action";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const ClientAuthButton = () => {
  const session = useSession();
  const router = useRouter();

  return session.data?.user ? (
    <button
      onClick={async () => {
        await signOut();
        window.location.reload();
      }}
      className="text-white font-semibold text-[1.2rem] hover:text-red-500 transition"
    >
      로그아웃
    </button>
  ) : (
    <button
      onClick={() => {
        router.replace("/signin");
      }}
      className="text-white font-semibold text-[1.2rem] hover:text-red-500 transition"
    >
      로그인
    </button>
  );
};
