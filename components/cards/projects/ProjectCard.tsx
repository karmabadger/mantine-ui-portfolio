import React from "react";

import {
  Badge,
  Box,
  Card,
  Center,
  Flex,
  Group,
  Image,
  List,
  Tabs,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { FC } from "react";
import { ProjectCardProps } from "./data";
import useColorScheme from "@/hooks/useColorScheme";
import { MdWorkOutline } from "react-icons/md";

const ProjectCard: FC<ProjectCardProps> = ({
  id,
  image,
  description,
  tools,
  languages,
  technologies,
  name,
  links,
}) => {
  const [colorScheme, setColorScheme] = useColorScheme();
  return (
    <Card padding="lg" radius="md" withBorder={colorScheme === "light"}>
      <Card.Section>{image}</Card.Section>

      <Tabs defaultValue="detail">
        <Tabs.List>
          <Tabs.Tab value="detail" icon={<MdWorkOutline size="0.8rem" />}>
            Detail
          </Tabs.Tab>
          <Tabs.Tab value="tools" icon={<MdWorkOutline size="0.8rem" />}>
            Tools
          </Tabs.Tab>
          {links != null && (
            <Tabs.Tab value="links" icon={<MdWorkOutline size="0.8rem" />}>
              More
            </Tabs.Tab>
          )}
        </Tabs.List>

        <Tabs.Panel value="detail" pt="xs">
          <Box key={name}>
            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>{name}</Text>

              <Box>
                {tools.map((technology, i) => {
                  return (
                    <Badge
                      key={technology.name}
                      color={technology.type === "language" ? "blue" : "green"}
                      variant="light"
                    >
                      {technology.name}
                    </Badge>
                  );
                })}
              </Box>
            </Group>
            <Text size="sm" color="dimmed">
              {description}
            </Text>
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value="tools" pt="xs">
          <Flex
            mt={16}
            style={{
              marginTop: "16",
            }}
            gap={10}
            direction="row"
          >
            <Box style={{ flexGrow: 1 }}>
              <Flex direction="column" gap={10}>
                <Text>Technologies Used:</Text>
                <List
                  style={{
                    alignItems: "center",
                  }}
                >
                  {technologies.map((technology) => {
                    return (
                      <List.Item
                        style={{
                          alignItems: "center",
                        }}
                        key={technology.name}
                        icon={
                          <ThemeIcon color="none" size={25} radius="xl">
                            {technology.icon}
                          </ThemeIcon>
                        }
                      >
                        <Center>
                          <Text>{technology.name}</Text>
                        </Center>
                      </List.Item>
                    );
                  })}
                </List>
              </Flex>
            </Box>
            <Box style={{ flexGrow: 1 }}>
              <Flex direction="column" gap={10}>
                <Text>Languages Used:</Text>
                <List>
                  {languages.map((language) => {
                    return (
                      <List.Item
                        key={language.name}
                        icon={
                          <ThemeIcon color="none" size={25} radius="sm">
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
            </Box>
          </Flex>
        </Tabs.Panel>

        {links != null && (
          <Tabs.Panel value="links" pt="xs">
            <Box mt={16}>{links}</Box>
          </Tabs.Panel>
        )}
      </Tabs>
    </Card>
  );
};

export default ProjectCard;
