import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import brcypt from "bcrypt";
import { prisma } from "./prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  // Temporarily remove adapter to fix the issue
  // adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (!user) throw new Error("No user found with this email");

        const isValid = await brcypt.compare(
          credentials.password as string,
          user.password
        );

        if (!isValid) throw new Error("Incorrect password");

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session: async ({ session, token }) => {
      if (token && session.user) {
        session.user.id = token.sub as string;
      }
      return session;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: "/signup",
  },
  debug: process.env.NODE_ENV === "development",
});
