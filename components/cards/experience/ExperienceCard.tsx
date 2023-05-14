import React, { FC } from "react";
import Link from "next/link";
import {
  Badge,
  Box,
  Card,
  Flex,
  Group,
  Image,
  List,
  Tabs,
  Text,
} from "@mantine/core";
import { IconPhoto } from "@tabler/icons-react";
import { IconMessageCircle } from "@tabler/icons-react";
import { IconSettings } from "@tabler/icons-react";

import { MdTaskAlt, MdWorkOutline } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { TbTools } from "react-icons/tb";
import { ReactSVG } from "react-svg";

import { SiJavascript, SiSolidity, SiTypescript } from "react-icons/si";

import SharpjsIcon from "@/components/icons/SharpjsIcon";
import KPRIcon from "@/components/icons/KPRIcon";

import { BsFillPencilFill, BsTools } from "react-icons/bs";
import { ExperienceCardProps } from "./data";
import useColorScheme from "@/hooks/useColorScheme";

const ExperienceCard: FC<ExperienceCardProps> = ({
  imageData,
  jobData: companyData,
  projectsData,
  technologiesData,
}) => {
  const [colorScheme, setColorScheme] = useColorScheme();
  return (
    <Card padding="lg" radius="md" withBorder={colorScheme === "light"}>
      <Card.Section>
        <Image src={imageData.src} height={220} alt={imageData.alt} />
      </Card.Section>

      <Tabs defaultValue="detail">
        <Tabs.List>
          <Tabs.Tab value="detail" icon={<MdWorkOutline size="0.8rem" />}>
            Detail
          </Tabs.Tab>
          <Tabs.Tab value="projects" icon={<FaProjectDiagram size="0.8rem" />}>
            Projects
          </Tabs.Tab>
          <Tabs.Tab value="technologies" icon={<BsTools size="0.8rem" />}>
            Technologies
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="detail" pt="xs">
          <Flex direction="row" justify="flex-start" align="center" gap={10}>
            {companyData.icon ? (
              companyData.icon
            ) : (
              <MdWorkOutline size="1.5rem" />
            )}
            <Box
              style={{
                flexGrow: 1,
                width: "100%",
              }}
            >
              <Group position="apart" mt="md" mb="xs" style={{ width: "100%" }}>
                <Text weight={500}>
                  {companyData.link ? (
                    <Link
                      href={companyData.link}
                      style={{ textDecoration: "None", color: "inherit" }}
                    >
                      {companyData.companyName}
                    </Link>
                  ) : (
                    companyData.companyName
                  )}
                </Text>
                <Badge color="blue" variant="light">
                  {companyData.time}
                </Badge>
              </Group>
              <Text size="sm" color="dimmed">
                {companyData.title}
              </Text>
            </Box>
          </Flex>
        </Tabs.Panel>

        <Tabs.Panel value="projects" pt="xs">
          <Flex direction="column" gap={10}>
            {projectsData.map((project) => {
              return (
                <Box key={project.name}>
                  {" "}
                  <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>{project.name}</Text>

                    <Box>
                      {project.technologies.map((technology, i) => {
                        return (
                          <Badge
                            key={technology.name}
                            color={
                              technology.type === "language" ? "blue" : "green"
                            }
                            variant="light"
                          >
                            {technology.name}
                          </Badge>
                        );
                      })}
                    </Box>
                  </Group>
                  <Text size="sm" color="dimmed">
                    {project.description}
                  </Text>
                </Box>
              );
            })}
          </Flex>
        </Tabs.Panel>

        <Tabs.Panel value="technologies" pt="xs">
          <Flex gap={10} direction="row">
            <Box style={{ flexGrow: 1 }}>
              <Flex direction="column" gap={5}>
                <Text>Technologies Used:</Text>
                <List>
                  {technologiesData.technologies.map((technology) => {
                    return (
                      <List.Item key={technology.name} icon={technology.icon}>
                        {technology.name}
                      </List.Item>
                    );
                  })}
                </List>
              </Flex>
            </Box>
            <Box style={{ flexGrow: 1 }}>
              <Flex direction="column" gap={5}>
                <Text>Languages Used:</Text>
                <List>
                  {technologiesData.languages.map((language) => {
                    return (
                      <List.Item key={language.name} icon={language.icon}>
                        {language.name}
                      </List.Item>
                    );
                  })}
                </List>
              </Flex>
            </Box>
          </Flex>
        </Tabs.Panel>
      </Tabs>
    </Card>
  );
};

export default ExperienceCard;
