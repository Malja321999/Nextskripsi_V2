import { login, loginWithGoogle } from "@/app/lib/firebase/service";
import { compare } from "bcryptjs";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentilasProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const autOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentilasProvider({
      type: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        nisn: { label: "NISN", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, nisn, password } = credentials as {
          email: string;
          nisn: string;
          password: string;
        };
        const user: any = await login({ email, nisn, password });
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
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }: any) {
      if (account?.provider === "credentials") {
        token.email = user.email;
        token.fullname = user.fullname;
        token.role = user.role;
        token.class = user.class;
        token.nisn = user.nisn;
      }
      if (account?.provider === "google") {
        const data = {
          fullname: user.name,
          email: user.email,
          type: "google",
        };
        await loginWithGoogle(
          data,
          (result: { status: boolean; data: any }) => {
            if (result.status) {
              token.email = result.data.email;
              token.fullname = result.data.fullname;
              token.role = result.data.role;
              token.class = result.data.class;
              token.nisn = result.data.nisn;
            }
          }
        );
      }
      return token;
    },
    async session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("fullname" in token) {
        session.user.fullname = token.fullname;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }
      if ("class" in token) {
        session.user.class = token.class;
      }
      if ("nisn" in token) {
        session.user.nisn = token.nisn;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(autOptions);

export { handler as GET, handler as POST };
