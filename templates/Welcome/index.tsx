import { FC } from 'react';
import { authService } from '@services/auth';
import { useActor } from '@xstate/react';
import { P } from '@components/Text';

export const WelcomeTemplate: FC = () => {
  const [state] = useActor(authService);

  if (state.matches('loggedIn')) {
    return <P>Welcome! Thank you for joining!</P>;
  }
  if (state.matches('loggedOut')) {
    return <P>You don&apos;t have permission!</P>;
  }

  return <P>Fetching user status</P>;
};
