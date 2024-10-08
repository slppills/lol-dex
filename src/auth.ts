import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        const users = [
          {
            id: "test-user-1",
            userName: "test1",
            name: "Test 1",
            password: "pass",
            email: "test1@donotreply.com",
          },
        ];
        const user = users.find(
          (user) => user.userName === credentials.username && user.password === credentials.password
        );
        return user ? { id: user.id, name: user.name, email: user.email } : null;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  secret: process.env.AUTH_SECRET,
});
