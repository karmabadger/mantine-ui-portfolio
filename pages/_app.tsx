import { useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import {
  MantineProvider,
  useMantineTheme,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";

import useColorScheme from "@/hooks/useColorScheme";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const [colorScheme, toggleColorScheme] = useColorScheme();

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
