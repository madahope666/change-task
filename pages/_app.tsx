'use client'
import "@/styles/screen.css";
import type { AppProps } from "next/app";
import RootLayout from "@/pages/RootLayout";
import { ChakraProvider } from '@chakra-ui/react';
import extendedTheme from "@/styles/extendedTheme";
import { AppProvider } from "@/contexts/AppContext";
import NextNProgress from 'nextjs-progressbar';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={extendedTheme}>
      <NextNProgress color="#000" />
      <AppProvider>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </AppProvider>
    </ChakraProvider>
  );
}
