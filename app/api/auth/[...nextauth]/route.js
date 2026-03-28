export const runtime = "nodejs";

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import clientPromise from "@/lib/db";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
          scope: "read:user user:email", // ✅ get email from GitHub
        },
      },
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      try {
        const client = await clientPromise;
        console.log("✅ Connected to MongoDB");

        const db = client.db("myDB");

        const email =
          user.email ||
          `${user.name?.replace(/\s+/g, "").toLowerCase()}@github.com`;

        console.log("USER:", user);

        const existingUser = await db
          .collection("authUser")
          .findOne({ email });

        if (!existingUser) {
          await db.collection("authUser").insertOne({
            name: user.name,
            email,
            image: user.image,
            createdAt: new Date(),
          });

          console.log("✅ User saved to DB");
        } else {
          console.log("⚠️ User already exists");
        }

        return true;
      } catch (error) {
        console.error("DB Error:", error);
        return true;
      }
    },
  }
});

export { handler as GET, handler as POST };