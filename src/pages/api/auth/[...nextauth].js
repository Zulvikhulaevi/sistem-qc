import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { signIn } from "@/lib/firestore/authService/authService";

const authOption = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        nik: { label: "nik", type: "nik" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const { nik, password } = credentials;
        const user = await signIn(nik);
        if (user) {
          const passwordConfirm = await compare(password, user.password);
          if (passwordConfirm) {
            return user;
          }
          return null;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account?.provider === "credentials") {
        (token.id = user.id),
          (token.nik = user.nik),
          (token.nama = user.nama),
          (token.role = user.role);
      }
      return token;
    },
    async session({ session, token }) {
      if ("id" in token) {
        session.user.id = token.id;
      }
      if ("nik" in token) {
        session.user.nik = token.nik;
      }
      if ("nama" in token) {
        session.user.nama = token.nama;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOption);
