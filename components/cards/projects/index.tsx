import React from "react";

import { Box, Flex, Text } from "@mantine/core";

import ProjectCard from "./ProjectCard";
import { data } from "./data";

const ProjectCards = () => {
  return (
    <Flex justify="flex-start" direction="column" gap={20}>
      {data.map((project) => {
        return (
          <Box id={project.id} key={project.id}>
            <ProjectCard
              id={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              languages={project.languages}
            />
          </Box>
        );
      })}
    </Flex>
  );
};

export default ProjectCards;
