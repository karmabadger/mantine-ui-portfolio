import Head from "next/head";
// import Image from "next/image";

import Layout from "@/components/layout";
import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Group,
  Image,
  Tabs,
  Text,
} from "@mantine/core";

import ExperienceCard from "@/components/cards/experience/ExperienceCard";
import Experiences from "@/components/cards/experience";

export default function Experience() {
  return (
    <>
      <Layout>
        <Flex justify="flex-start" direction="column" gap="2em">
          <Box style={{ display: "inline-block" }}>
            <Text
              variant="gradient"
              gradient={{ from: "blue", to: "pink" }}
              size="3rem"
              weight={700}
              style={{ display: "inline" }}
            >
              Work Experience
            </Text>
          </Box>

          <Box>
            <Experiences />
          </Box>
        </Flex>
      </Layout>
    </>
  );
}
