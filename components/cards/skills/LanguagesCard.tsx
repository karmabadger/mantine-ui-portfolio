import React from "react";

import {
  Badge,
  Card,
  Center,
  Flex,
  Group,
  List,
  Text,
  ThemeIcon,
} from "@mantine/core";
import Image from "next/image";
import useColorScheme from "@/hooks/useColorScheme";

import { languagesData } from "./data";
const LanguagesCard = () => {
  const [colorScheme, setColorScheme] = useColorScheme();
  return (
    <Card padding="lg" radius="md" withBorder={colorScheme === "light"}>
      {/* <Card.Section component="a" href="https://mantine.dev/">
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section> */}

      {/* <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Languages</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text> */}

      <Flex direction="column" gap={10}>
        <Text mt="md" fz="lg">
          Languages:
        </Text>
        <List
          style={{
            alignItems: "center",
          }}
        >
          {languagesData.map((language) => {
            return (
              <List.Item
                style={{
                  alignItems: "center",
                }}
                key={language.name}
                icon={
                  <ThemeIcon color="none" size={25} radius="xl">
                    {language.icon}
                  </ThemeIcon>
                }
              >
                <Center>
                  <Text>{language.name}</Text>
                </Center>
              </List.Item>
            );
          })}
        </List>
      </Flex>
    </Card>
  );
};

export default LanguagesCard;
