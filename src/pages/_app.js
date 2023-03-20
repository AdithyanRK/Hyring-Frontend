import * as React from "react";
import Head from "next/head";
// Mui
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../config/theme";
import createEmotionCache from "../config/createEmotionCache";
import NavbarComponent from "@/common/landing-page/navbar/navbar-component";
//Global CSS
import "../styles/globals.css";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
// Font
import localFont from "next/font/local";

// Font declaration
const whyte = localFont({
  src: [
    {
      path: "../../public/fonts/whyte/WhyteInktrap-Light.ttf",
      variable: "--font-whyte-light",
    },
    {
      path: "../../public/fonts/whyte/WhyteInktrap-Regular.ttf",
      variable: "--font-whyte-regular",
    },
    {
      path: "../../public/fonts/whyte/WhyteInktrap-Medium.ttf",
      variable: "--font-whyte-medium",
    },
   
  ],
});

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <main className={`${whyte.className}`}>
        <ThemeProvider theme={theme}>
          <NavbarComponent />
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </CacheProvider>
  );
}
