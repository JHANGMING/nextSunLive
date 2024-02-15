import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
