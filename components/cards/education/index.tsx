import React from "react";

import { Box, Flex, Text } from "@mantine/core";
import EducationCard from "./EducationCard";

import { data } from "./data";

const EducationCards = () => {
  return (
    <Flex justify="flex-start" direction="column" gap={20}>
      {data.map((education) => {
        return (
          <Box id={education.id} key={education.id}>
            <EducationCard
              id={education.id}
              degreeData={education.degreeData}
              courses={education.courses}
            />
          </Box>
        );
      })}
    </Flex>
  );
};

export default EducationCards;
