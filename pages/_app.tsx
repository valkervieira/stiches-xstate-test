import type { AppProps } from 'next/app';
import { Session } from 'next-auth';
import { Provider as SessionProvider } from 'next-auth/client';

export const MyApp: (props: AppProps<{ session: Session }>) => JSX.Element = ({
  Component,
  pageProps: { session, ...pageProps },
}): JSX.Element => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default MyApp;
