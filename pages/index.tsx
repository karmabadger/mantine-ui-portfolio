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
              I'm Wen, a passionate Software Engineer with over 7 years of experience in crafting exceptional digital experiences. Armed with a Computer Science degree from McGill University, I specialize in designing and implementing innovative full-stack web applications and blockchain solutions.
But what truly sets my heart on fire is game development; it's where I transform my personal passion into captivating virtual worlds.
Beyond the world of technology, I'm a curious explorer. I delve into history, immerse myself in the intricacies of politics, and navigate the complexities of finance. When I'm not busy coding, you'll find me on the tennis court or badminton court, or perhaps creating harmonious melodies through music.
Join me on this exciting journey of innovation, creativity, and endless possibilities.
            </Text>
            <br />
            <a href="/experience">Explore my work and projects!</a>
          </Box>
        </Flex>
      </Layout>
    </>
  );
}
