// import { client } from 'graphql/client';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';
// import { AppProps } from 'next/app';
// import CookieConsent from 'react-cookie-consent';
import 'nprogress/nprogress.css';
import 'styles/globals.scss';

import { NextComponentType, NextPageContext } from 'next';
import Layout from '@components/Layout';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <div>
      <Head>
        <title>Stessa</title>
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='IMG/Icon/StessaIcon.png'
        />
        <meta name='title' content='' />
        <meta name='description' content='' />

        <meta property='og:type' content='' />
        <meta property='og:url' content='' />
        <meta property='og:title' content='' />
        <meta property='og:description' content='' />
        <meta property='og:image' content='' />

        <meta property='twitter:card' content='' />
        <meta property='twitter:url' content='' />
        <meta property='twitter:title' content='' />
        <meta property='twitter:description' content='' />
        <meta property='twitter:image' content='' />
      </Head>
      <Layout>
        {/* <App Component={Component} pageProps={pageProps} /> */}
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

// function App({
//   Component,
//   pageProps,
// }: {
//   Component: NextComponentType<NextPageContext, any, {}>;
//   pageProps: any;
// }) {
//   return <Component {...pageProps} />;
// }

export default MyApp;
