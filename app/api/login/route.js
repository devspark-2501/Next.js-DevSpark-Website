import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/db";

export const runtime = "nodejs";

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
          const client = await clientPromise;
          const db = client.db("products"); // match your URI

          const user = await db
            .collection("authUser")
            .findOne({ email: credentials.email });

          if (!user) return null;

          const isMatch = user.password === credentials.password;

          if (!isMatch) return null;

          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
          };
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };