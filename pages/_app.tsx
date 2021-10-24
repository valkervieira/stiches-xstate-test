import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';
// lib responsible for adding progress indicator on all pages
import NProgress from 'nprogress';
// document head component
import Head from 'next/head';
// next router events utility
import Router from 'next/router';
// session provider
import { Provider as SessionProvider } from 'next-auth/client';
// stiches based css reset
import { reset } from 'stitches-reset';
// globalCss stiches theme/configuration
import { globalCss } from 'stiches.config';
// layout component on all pages
import { Layout } from '@templates/Layout';

const globalStyles = globalCss(reset, { body: { background: '$white' } });

Router.events.on('routeChangeStart', (url) => {
  console.info(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export const MyApp: (props: AppProps<{ session: Session }>) => JSX.Element = ({
  Component,
  pageProps: { session, ...pageProps },
}): JSX.Element => {
  globalStyles();

  return (
    <SessionProvider session={session}>
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          /* Make clicks pass-through */
          #nprogress {
            pointer-events: none;
          }
          
          #nprogress .bar {
            background: hsl(207, 26%, 7%);
          
            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;
          
            width: 100%;
            height: 2px;
          }
          
          /* Fancy blur effect */
          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px hsl(207, 26%, 7%), 0 0 5px hsl(207, 26%, 7%);
            opacity: 1.0;
          
            -webkit-transform: rotate(3deg) translate(0px, -4px);
                -ms-transform: rotate(3deg) translate(0px, -4px);
                    transform: rotate(3deg) translate(0px, -4px);
          }
          
          /* Remove these to get rid of the spinner */
          #nprogress .spinner {
            display: block;
            position: fixed;
            z-index: 1031;
            top: 15px;
            right: 15px;
          }
          
          #nprogress .spinner-icon {
            width: 18px;
            height: 18px;
            box-sizing: border-box;
          
            border: solid 2px transparent;
            border-top-color: hsl(207, 26%, 7%);
            border-left-color: hsl(207, 26%, 7%);
            border-radius: 50%;
          
            -webkit-animation: nprogress-spinner 400ms linear infinite;
                    animation: nprogress-spinner 400ms linear infinite;
          }
          
          .nprogress-custom-parent {
            overflow: hidden;
            position: relative;
          }
          
          .nprogress-custom-parent #nprogress .spinner,
          .nprogress-custom-parent #nprogress .bar {
            position: absolute;
          }
          
          @-webkit-keyframes nprogress-spinner {
            0%   { -webkit-transform: rotate(0deg); }
            100% { -webkit-transform: rotate(360deg); }
          }
          @keyframes nprogress-spinner {
            0%   { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
        `,
          }}
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default MyApp;
