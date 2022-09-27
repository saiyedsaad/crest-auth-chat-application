import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "../../../database/conn";
import Users from "../../../model/Schema";
import { compare } from "bcryptjs";

export default NextAuth({
  providers: [
    // Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // GitHub Provider
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // Facebook Provider
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        connectMongo().catch((error) => {
          error: "Connection Failed!";
        });

        // Check User Existance
        const resultUser = await Users.findOne({
          email: credentials.email,
        });

        if (!resultUser) {
          throw new Error("No User Found with this Email! Please Sign-Up!!");
        }

        // Check Password
        const checkPassword = await compare(
          credentials.password,
          resultUser.password
        );

        if (!checkPassword || resultUser.email !== credentials.email) {
          throw new Error("Username or Password doesn't match");
        }

        return resultUser;
      },
    }),
  ],
});
