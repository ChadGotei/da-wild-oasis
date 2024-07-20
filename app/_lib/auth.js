import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { createGuest, getGuest } from "./data-service";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },

    async signIn({ user }) {
      try {
        const existingUser = await getGuest(user.email);

        if (!existingUser)
          await createGuest({ email: user.email, fullName: user.name });

        return true;
      } catch {
        return false;
      }
    },

    async session({ session }) {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;

      return session;
    }
  },

  pages: {
    signIn: '/login',
  }
}

export const { auth, signIn, signOut, handlers: { GET, POST } } = NextAuth(authOptions);


// this was perhaps quite fked up.