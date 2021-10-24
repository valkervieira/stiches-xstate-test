import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';
import NProgress from 'nprogress';
import Head from 'next/head';
import Router from 'next/router';
import { Provider as SessionProvider } from 'next-auth/client';
import { reset } from 'stitches-reset';
import { globalCss } from 'stiches.config';

const globalStyles = globalCss(reset, { body: { background: '$white' } });

NProgress.configure({ speed: '350' });
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
            background: hsl(48, 70%, 48%);
          
            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;
          
            width: 100%;
            height: 4px;
          }
          
          /* Fancy blur effect */
          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px hsl(48, 70%, 48%), 0 0 5px hsl(48, 70%, 48%);
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
            border-top-color: hsl(48, 70%, 48%);
            border-left-color: hsl(48, 70%, 48%);
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
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default MyApp;
