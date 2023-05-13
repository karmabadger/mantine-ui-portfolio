import React from "react";

import { Box, Flex, Text } from "@mantine/core";

import LanguagesCard from "./LanguagesCard";
import TechnologiesCard from "./TechnologiesCard";

const cardWidth = "10";
const SkillsCards = () => {
  return (
    <>
      <Flex direction="row" gap={3} wrap="wrap">
        <Box
          style={{
            minWidth: "300px",
            flex: 1,
          }}
        >
          <LanguagesCard />
        </Box>
        <Box
          style={{
            flex: 1,
            minWidth: "300px",
          }}
        >
          <TechnologiesCard />
        </Box>
      </Flex>
    </>
  );
};

export default SkillsCards;
