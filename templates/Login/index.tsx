import { FC } from 'react';
import { authService } from '@services/auth';
import { useActor } from '@xstate/react';
// import { signIn } from 'next-auth/client';
import { P } from '@components/Text';
import { signIn, signOut } from 'next-auth/client';

export const LoginTemplate: FC = () => {
  const [state] = useActor(authService);

  return (
    <main>
      {state.matches('loggedIn') && (
        <div>
          <P>Logged in</P>
          <button onClick={() => signOut()}>sign out</button>
        </div>
      )}
      {state.matches('loggedOut') && (
        <div>
          <P>Logged out</P>
          <button onClick={() => signIn()}>sign in</button>
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
