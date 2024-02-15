import { App } from 'next/app';
import { RouterProvider } from 'next/router';

function MyApp({ Component, pageProps }) {
  return (
    <RouterProvider>
      <Component {...pageProps} />
    </RouterProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;