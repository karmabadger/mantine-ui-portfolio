import Head from "next/head";
import Image from "next/image";

import Layout from "@/components/layout";
import { Box, Flex, Text } from "@mantine/core";

import EducationCards from "@/components/cards/education";

export default function skills() {
  return (
    <>
      <Layout>
        <Flex direction="column" gap="2em">
          <Box style={{ display: "inline-block" }}>
            <Text
              variant="gradient"
              gradient={{ from: "blue", to: "pink" }}
              size="3rem"
              weight={700}
              style={{ display: "inline" }}
            >
              Education
            </Text>
          </Box>

          <Box>
            <EducationCards />
          </Box>
        </Flex>
      </Layout>
    </>
  );
}
