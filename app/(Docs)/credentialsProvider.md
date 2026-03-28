import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

import { getUserByEmail } from "@/app/data/user";
import clientPromise from "@/lib/db";
import { redirect } from "next/dist/server/api-utils";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials) return null;

        try {
          const user = await getUserByEmail(credentials.email);

          if (!user) {
            throw new Error("User not found");
            // redirect: <signUp />
          }

          const isMatch = user.password === credentials.password;

          if (!isMatch) {
            throw new Error("Check your password");
          }

          return user; // ✅ REQUIRED
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  events: {
    async signIn({ user }) {
      try {
        const client = await clientPromise;
        const db = client.db("myDB");

        if (!user.email) return; // ⚠️ important for GitHub

        const existingUser = await db
          .collection("authUser")
          .findOne({ email: user.email });

        if (!existingUser) {
          await db.collection("authUser").insertOne({
            name: user.name,
            email: user.email,
            image: user.image,
            createdAt: new Date(),
          });

          console.log("✅ User saved to authUser");
        } else {
          console.log("⚠️ User already exists");
        }
      } catch (error) {
        console.error("❌ Error saving user:", error);
      }
    },
  },

  callbacks: {
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };