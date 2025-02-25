// import NextAuth, { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { connectDB } from "@/lib/dbConfig";
// import { comparePassword } from "@/lib/hashPassword";
// import sql from "mssql";

// const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Missing email or password");
//         }

//         const pool = await connectDB();
//         const result = await pool
//           .request()
//           .input("Email", sql.NVarChar, credentials.email)
//           .query("SELECT * FROM Users WHERE Email = @Email");

//         const user = result.recordset[0];

//         if (!user) {
//           throw new Error("User not found");
//         }

//         const isPasswordValid = await comparePassword(credentials.password, user.Password);
//         if (!isPasswordValid) {
//           throw new Error("Invalid password");
//         }

//         return {
//           id: user.UserId.toString(),
//           name: user.UserName,
//           email: user.Email,
//           role: user.Role,
//         };
//       },
//     }),
//   ],
//   session: {
//     strategy: "jwt" as const,
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.role = user.role;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (session.user) {
//         session.user.id = token.id as string;
//         session.user.role = token.role as string;
//       }
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/signin",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };

import NextAuth from "next-auth";
import  { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
