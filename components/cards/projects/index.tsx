import React, { FC } from "react";

import { Box, Flex, Text } from "@mantine/core";

import ProjectCard from "./ProjectCard";
import { data } from "./data";

import { ProjectCardProps } from "./data";

const ProjectCards = () => {
  return (
    <Flex justify="flex-start" direction="column" gap={20}>
      {data.map((project) => {
        return (
          <Box id={project.id} key={project.id}>
            <ProjectCard
              id={project.id}
              name={project.name}
              image={project.image}
              description={project.description}
              tools={project.tools}
              technologies={project.technologies}
              languages={project.languages}
              links={project.links}
            />
          </Box>
        );
      })}
    </Flex>
  );
};

export default ProjectCards;
