import Head from "next/head";
import { FC, PropsWithChildren, useState } from "react";

import LayoutHead from "./head";
""
import Header from "./header";
import Footer from "./footer";
import { Divider, useMantineColorScheme } from "@mantine/core";

export default function Layout({ children }: PropsWithChildren) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <div>
      <LayoutHead />
      <Header />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "88vh",
        }}
      >
        <div
          style={{
            flexGrow: 6,
            margin: "0 auto",
            padding: "3rem 3rem",
            height: "100%",
            width: "100%",
          }}
        >
          <main>{children}</main>
        </div>
        <Divider my="sm" color={colorScheme === "dark" ? "dark.5" : "gray.1"} />
        <div
          style={{
            flexGrow: 0,
            margin: "0 auto",
          }}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
}
