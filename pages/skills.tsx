import Head from "next/head";
import Image from "next/image";

import Layout from "@/components/layout";
import { Box, Flex, Text } from "@mantine/core";

import SkillsCards from "@/components/cards/skills";

export default function skills() {
  return (
    <>
      <Layout>
        <Flex direction="column" gap="2em">
          <Box styles={{ dipslay: "inline-block" }}>
            <Text
              variant="gradient"
              gradient={{ from: "blue", to: "pink" }}  
              size="3rem"
              weight={700}
              styles={{ dipslay: "inline" }}
            >
              Skills
            </Text>
          </Box>
          <SkillsCards />
        </Flex>
      </Layout>
    </>
  );
}
