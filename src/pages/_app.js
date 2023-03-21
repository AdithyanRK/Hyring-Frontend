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
import Footer from "@/common/landing-page/footer/footer";

// Font declaration
const whyte = localFont({
  src: [
    {
      path: "../../public/fonts/whyte/WhyteInktrap-Regular.woff",
      variable: "--font-whyte-regular",
      declarations: [{ prop: "ascent-override", value: "100%" }],
    },
    {
      path: "../../public/fonts/whyte/WhyteInktrap-Light.woff",
      variable: "--font-whyte-light",
      declarations: [{ prop: "ascent-override", value: "100%" }],
    },
    {
      path: "../../public/fonts/whyte/WhyteInktrap-Medium.woff",
      variable: "--font-whyte-medium",
      declarations: [{ prop: "ascent-override", value: "100%" }],
    },
  ],
});

// const whyteRegular = localFont({
//   src: "../../public/fonts/whyte/WhyteInktrap-Regular.woff",
//   variable: "--font-whyte-regular",
//   declarations: [{ prop: "ascent-override", value: "100%" }],
// });
// const whyteLight = localFont({
//   src: "../../public/fonts/whyte/WhyteInktrap-Light.woff",
//   variable: "--font-whyte-light",
//   declarations: [{ prop: "ascent-override", value: "100%" }],
// });
// console.log("🚀 ~ file: _app.js:48 ~ whyteLight:", whyteLight);
// const whyteMedium = localFont({
//   src: "../../public/fonts/whyte/WhyteInktrap-Medium.woff",
//   variable: "--font-whyte-medium",
//   declarations: [{ prop: "ascent-override", value: "100%" }],
// });

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <main
        className={`${whyte.className}`}
      >
        <ThemeProvider theme={theme}>
          <NavbarComponent />
          <CssBaseline />
          <Component {...pageProps} />
          <Footer/>
        </ThemeProvider>
      </main>
    </CacheProvider>
  );
}
