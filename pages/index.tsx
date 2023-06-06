import Head from "next/head";
import Image from "next/image";

import Layout from "@/components/layout";
import { Box, Flex, Text } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Layout>
        <Flex justify="flex-start" direction="column" gap={130}>
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
              Based in Montreal, I&apos;m a software engineer with a Computer
              Science degree from McGill University and over 7 years of
              experience in coding. I specialize in designing and implementing
              innovative full-stack web applications and blockchain
              applications, and have a deep-seated passion for game development.
              My work is a blend of professional commitment and personal
              interest.
            </Text>
            <br />
            <Text>
              In addition to my love of technology, I have an interest in
              history, politics and finance. I also enjoy playing tennis,
              badminton and music.
            </Text>
          </Box>
        </Flex>
      </Layout>
    </>
  );
}
