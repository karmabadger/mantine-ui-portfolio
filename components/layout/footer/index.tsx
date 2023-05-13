import { MediaQuery, Text } from "@mantine/core";
import React, { useId, useState } from "react";

const Footer = () => {
  return (
    <div style={{ textAlign: "center", margin: "5" }}>
      <MediaQuery query="min-width: 10em" styles={{}}>
        <Text size={13} style={{ margin: 10 }}>
          Made with ❤️ using <a href="https://nextjs.org/">Next.js</a>,{" "}
          <a href="https://mantine.dev/">Mantine.js</a>, and{" "}
          <a href="https://www.typescriptlang.org/">Typescript</a>. Check out
          the source code on{" "}
          <a href="https://github.com/karmabadger/next-ui-portfolio-v1">
            Github
          </a>
          . © 2023 Wen Wu
        </Text>
      </MediaQuery>
      {/* <MediaQuery query="(max-width: 75em) and (min-width: 50em)" styles={{}}>
        <div>
          <Text size={13}>
            Made with ❤️ using <a href="https://nextjs.org/">Next.js</a>,{" "}
            <a href="https://nextui.org/">NextUI</a>, and{" "}
            <a href="https://www.typescriptlang.org/">Typescript</a>.{" "}
          </Text>{" "}
          <Text size={13}>
            Check out the source code on{" "}
            <a href="https://github.com/karmabadger/next-ui-portfolio-v1">
              Github
            </a>
            . © 2023 Wen Wu
          </Text>
        </div>
      </MediaQuery> */}
    </div>
  );
};

export default Footer;
