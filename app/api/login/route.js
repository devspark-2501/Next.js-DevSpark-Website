import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/db";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials) return null;

        try {
          const client = await clientPromise;
          const db = client.db("myDB");

          const user = await db
            .collection("authUser")
            .findOne({ email: credentials.email });

          if (!user) {
            throw new Error("user not found");
          }

          const isMatch = user.password === credentials.password;

          if (!isMatch) {
            throw new Error("check your password");
          }

          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
          };
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };