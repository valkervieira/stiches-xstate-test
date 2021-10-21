import NextAuth from 'next-auth';
import P from 'next-auth/providers';

export default NextAuth({
  providers: [
    P.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});
