import type { AppProps } from 'next/app';
import { Session } from 'next-auth';
import { Provider as SessionProvider } from 'next-auth/client';
import { reset } from 'stitches-reset';
import { globalCss } from 'stiches.config';
import { Layout } from '@templates/Layout';

const globalStyles = globalCss(reset, { body: { background: '$white' } });

export const MyApp: (props: AppProps<{ session: Session }>) => JSX.Element = ({
  Component,
  pageProps: { session, ...pageProps },
}): JSX.Element => {
  globalStyles();

  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default MyApp;
