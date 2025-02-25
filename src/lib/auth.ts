import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/lib/dbConfig";
import { comparePassword } from "@/lib/hashPassword";
import sql from "mssql";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        const pool = await connectDB();
        const result = await pool
          .request()
          .input("Email", sql.NVarChar, credentials.email)
          .query("SELECT * FROM Users WHERE Email = @Email");

        const user = result.recordset[0];

        if (!user) {
          throw new Error("User not found");
        }

        const isPasswordValid = await comparePassword(credentials.password, user.Password);
        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }

        return {
          id: user.UserId.toString(),
          name: user.UserName,
          email: user.Email,
          role: user.Role,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 30, // 30 minutes
  },
  jwt: {
    maxAge: 60 * 30, // 30 minutes
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      
      // ✅ Explicitly cast `token` to include `exp`
      (token as { exp: number }).exp = Math.floor(Date.now() / 1000) + 60 * 30;

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }

      // ✅ Explicitly cast `token` to include `exp`
      session.expires = new Date((token as { exp: number }).exp * 1000).toISOString();

      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
