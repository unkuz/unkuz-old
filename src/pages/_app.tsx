import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '@/store';
import { Provider } from 'react-redux';
import { HeaderAsTabBar } from '@/components/HeaderAsTabBar';
import { Canvas } from '@react-three/fiber';
import { Layout } from '@/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
