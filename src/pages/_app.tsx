import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '@/store';
import { Provider } from 'react-redux';
import { HeaderAsTabBar } from '@/components/HeaderAsTabBar';
import { Canvas } from '@react-three/fiber';
import { Layout } from '@/layout/Layout';
import { useLayoutEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  // useLayoutEffect(() => {
  //   // @ts-ignore
  //   let mouse = new Mouse({
  //     mouse: 'cirle',
  //     color: '#000000',
  //     mouseHover: false,
  //     mousePointer: false,
  //     el: 'a',
  //     el_hover: true,
  //     mouse_clicked: true,
  //     clrChanged: false,
  //   });
  //   mouse.mouse();
  // }, []);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
