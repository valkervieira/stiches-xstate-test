import { FC } from 'react';
import { authService } from '@services/auth';
import { useActor } from '@xstate/react';
import { P } from '@components/Text';
import { signIn, signOut } from 'next-auth/client';

export const LoginTemplate: FC = () => {
  const [state] = useActor(authService);

  return (
    <main>
      {state.matches('loggedIn') && (
        <div>
          <P>Logged in</P>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      )}
      {state.matches('loggedOut') && (
        <div>
          <P>Logged out</P>
          <button onClick={() => signIn('google')}>Sign in with Google</button>
        </div>
      )}
      {state.matches('checkIfLoggedIn') && (
        <div>
          <P>Loading</P>
        </div>
      )}
    </main>
  );
};
