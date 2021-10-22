import type { AppProps } from 'next/app';
import { Session } from 'next-auth';
import { Provider as SessionProvider } from 'next-auth/client';

import { Layout } from '@templates/Layout';

export const MyApp: (props: AppProps<{ session: Session }>) => JSX.Element = ({
  Component,
  pageProps: { session, ...pageProps },
}): JSX.Element => {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default MyApp;
