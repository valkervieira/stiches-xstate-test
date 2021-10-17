import { FC } from 'react';
import { useSession, signIn, signOut } from 'next-auth/client';

export const WelcomeTemplate: FC = () => {
  const [session, loading] = useSession();

  if (typeof window !== 'undefined' && loading) return null;

  if (!session) {
    return (
      <>
        <p>not logged in</p>
        <button onClick={() => signIn()}>log in</button>
      </>
    );
  }

  return (
    <>
      <p>hello there! welcome to the system</p>
      <p>looks like youre logged in</p>
      <button onClick={() => signOut()}>log out</button>
    </>
  );
};
