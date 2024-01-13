import { login } from "@/app/lib/firebase/service";
import { compare } from "bcryptjs";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentilasProvider from "next-auth/providers/credentials";

const autOptions:NextAuthOptions = {
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
                 password: {  label: "Password", type: "password" },
             },
             async authorize(credentials) {
                 const { email, password } = credentials as { 
                    email: string, 
                    password: string 
             };
             const user:any = await login({ email, password });
           if (user) {
              const passwordConfirm= await compare(password, user.password);
              if (passwordConfirm) {
                return user;
            }
            return null;
            }else {
                return null;
            }
        },
        })     
    ],
    callbacks: {
        async jwt({ token, account, profile, user }:any) {
           if (account?.provider === "credentials") {
               token.email = user.email;
               token.fullname = user.fullname;
               token.role = user.role;
           }
           return token;
        },
        async session({ session, token, user }:any) {
            if("email" in token) {
                session.user.email = token.email;
            }
            if ("fullname" in token) {
                session.user.fullname = token.fullname;
            }
            if ("role" in token) {
                session.user.role = token.role;
            }
            return session;
        }
    },
    pages: {
        signIn: "/signin",
    }
}

const handler = NextAuth(autOptions);

export { handler as GET, handler as POST }