import Head from "next/head";
import Image from "next/image";

import Layout from "@/components/layout";
import { Box, Flex, Text } from "@mantine/core";

import ProjectCards from "@/components/cards/projects";

export default function Experience() {
  return (
    <>
      <Layout>
        <Box>
          <Flex direction="column" gap="2em">
            <Box style={{ display: "inline-block" }}>
              <Text
                variant="gradient"
                gradient={{ from: "blue", to: "pink" }}
                size="3rem"
                weight={700}
                style={{ display: "inline" }}
              >
                Projects
              </Text>
            </Box>
            <Box>
              <ProjectCards />
            </Box>
          </Flex>
        </Box>
      </Layout>
    </>
  );
}
