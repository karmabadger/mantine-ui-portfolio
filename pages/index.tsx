import Head from "next/head";
import Image from "next/image";

import Layout from "@/components/layout";
import { Box, Flex, Text } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Layout>
        <Flex justify="flex-start" direction="column" gap={200}>
          <Box>
            <Box style={{ height: "4em" }}></Box>
            <Flex justify="flex-start" direction="column" gap={10}>
              {/* <Box>
            <Text
              variant="gradient"
              gradient={{ from: "blue", to: "pink" }}
              size="5rem"
              weight={700}
              style={{ display: "inline" }}
            >
              Hello World!
            </Text>
          </Box>
          <Box>
            <Text fz={"xl"}>my name is</Text>
          </Box> */}
              <Text fz={"xl"}>Hello World! My name is</Text>

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
          </Box>
          <Box>
            <Text>
              I&apos;m a software engineer currently based in Montreal.
              Graduated from McGill University with a Bachelor of Science in
              Computer Science, I&apos;ve been working in the industry for 2
              years and building software for over 7 years. I have a passion
              game development and have been working on a few projects on the side. 
            </Text>
            <br />
            <Text>
              In addition to my love of technology, I have an interest in
              history, politics and finance. I also enjoy playing tennis,
              badminton
            </Text>
          </Box>
        </Flex>
      </Layout>
    </>
  );
}
