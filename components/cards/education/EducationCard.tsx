import React, { FC } from "react";

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
import useColorScheme from "@/hooks/useColorScheme";
import { EducationDataProps } from "./data";
import { MdWorkOutline } from "react-icons/md";

const EducationCard: FC<EducationDataProps> = ({ id, degreeData, courses }) => {
  const [colorScheme, setColorScheme] = useColorScheme();
  return (
    <Card padding="lg" radius="md" withBorder={colorScheme === "light"}>
      <Card.Section component="a">{degreeData.image}</Card.Section>

      <Tabs defaultValue="degree">
        <Tabs.List>
          <Tabs.Tab value="degree" icon={<MdWorkOutline size="0.8rem" />}>
            Degree
          </Tabs.Tab>
          {courses != null && courses.length > 0 && (
            <Tabs.Tab value="courses" icon={<MdWorkOutline size="0.8rem" />}>
              Courses
            </Tabs.Tab>
          )}
        </Tabs.List>

        <Tabs.Panel value="degree" pt="xs">
          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>{degreeData.school}</Text>
            <Badge color="blue" variant="light">
              {degreeData.time}
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
            {degreeData.degree} in {degreeData.major}
          </Text>
        </Tabs.Panel>

        {courses != null && courses.length > 0 && (
          <Tabs.Panel value="courses" pt="xs">
            <Flex direction="column" justify="flex-start" align="flex-start">
              <Box mt="md" mb="xs">
                <Text>Courses Taken</Text>
              </Box>
              <List>
                {courses.map((course) => {
                  return (
                    <List.Item key={course.id} id={course.id}>
                      <Text>{course.title}</Text>
                    </List.Item>
                  );
                })}
              </List>
            </Flex>
          </Tabs.Panel>
        )}
      </Tabs>
    </Card>
  );
};

export default EducationCard;
