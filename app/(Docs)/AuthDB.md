// I
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
    }),
  ],

  events: {
    async signIn({ user }) {
      try {
        const client = await clientPromise;

        // DB name
        const db = client.db("myDB");

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

// II
events: {
    async signIn({ user }) {
        try {
            const client = await clientPromise

            const db = client.db("myDB");

            const existingUser = await db
                .collection("authUser")
                .findOne(email: user.email );

            if (!existinfUser) {
                await db.collection("authUser").insertOne({
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    createdAt: new Date(),
                });
            }
        }
    }
}