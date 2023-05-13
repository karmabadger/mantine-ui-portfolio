import React, { FC } from "react";
import { Box, Flex } from "@mantine/core";

import ExperienceCard from "./ExperienceCard";
import { data } from "./data";

const Experiences: FC<any> = () => {
  return (
    <Flex justify="flex-start" direction="column" gap={20}>
      {data.map((experience) => {
        return (
          <Box id={experience.id} key={experience.jobData.companyName}>
            <ExperienceCard
              id={experience.id}
              imageData={experience.imageData}
              jobData={experience.jobData}
              projectsData={experience.projectsData}
              technologiesData={experience.technologiesData}
            />
          </Box>
        );
      })}
    </Flex>
  );
};

export default Experiences;
