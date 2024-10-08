import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { ClientAuthButton } from "./ClientAuthButton";

export const AuthButton = async () => {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <ClientAuthButton />
    </SessionProvider>
  );
};
