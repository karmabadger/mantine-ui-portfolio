import Head from "next/head";
import Image from "next/image";

import Layout from "@/components/layout";
import { Box, Flex, Text } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Layout>
        <Box style={{ height: "4em" }}></Box>
        <Flex justify="flex-start" direction="column" gap={10}>
          <Text fz={"xl"}>Hi! my name is</Text>

          <Box
            style={{
              display: "inline-block",
            }}
          >
            <Text
              variant="gradient"
              gradient={{ from: "blue", to: "pink" }}
              size="7rem"
              weight={700}
              style={{ display: "inline" }}
            >
              Wen
            </Text>
          </Box>
          <Text fz={"xl"}>and I build </Text>

          <Box
            style={{
              display: "inline-block",
            }}
          >
            <Text
              variant="gradient"
              gradient={{ from: "blue", to: "pink" }}
              size="4em"
              // fz="3em"
              weight={700}
              style={{ display: "inline" }}
            >
              Software
            </Text>
          </Box>
        </Flex>
      </Layout>
    </>
  );
}
