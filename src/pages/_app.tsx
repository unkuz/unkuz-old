import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '@/store';
import { Provider } from 'react-redux';
import { HeaderAsTabBar } from '@/components/HeaderAsTabBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      
      <Component {...pageProps} />
       <div className="z-50">   <HeaderAsTabBar/></div>
    </Provider>
  );
}

export default MyApp;
