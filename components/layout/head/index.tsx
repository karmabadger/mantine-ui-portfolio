import Head from "next/head";
import { FC } from "react";

const LayoutHead: FC = () => {
  return (
    <Head>
      <title>Wen&apos;s Portfolio</title>
      <meta name="description" content="Wen's Portfolio" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default LayoutHead;
