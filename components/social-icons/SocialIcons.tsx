"use client";

import { SocialIcon } from "react-social-icons";
import React from "react";
import { Flex } from "@mantine/core";

const margin = 2;

const SocialIcons = () => {
  return (
    <>
      <Flex>
        <SocialIcon
          url="https://www.linkedin.com/in/wen-chen-1a1a1a1a1/"
          id="linkedin"
          style={{ height: 35, width: 35, margin }}
        />
        <SocialIcon
          id="github"
          url="https://github.com/karmabadger"
          bgColor="black"
          fgColor="white"
          style={{ height: 35, width: 35, margin }}
        />
        <SocialIcon
          id="email"
          url="mailto:wenxuan27@outlook.com"
          style={{ height: 35, width: 35, margin }}
        />
      </Flex>
    </>
  );
};

export default SocialIcons;
