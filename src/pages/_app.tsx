import { AppProps } from 'next/app';
import React from 'react';
import '../../styles/globals.css';
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
  );
}

export default MyApp;
