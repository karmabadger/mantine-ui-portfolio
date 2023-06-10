import { Badge, Box, Card, Flex, Group, Image, Text } from "@mantine/core";
import React from "react";

import SocialIcons from "@/components/social-icons/SocialIcons";
import useColorScheme from "@/hooks/useColorScheme";

const ContactCards = () => {
  const [colorScheme, setColorScheme] = useColorScheme();
  return (
    <Flex justify="flex-start" direction="column" gap={20}>
      <Box>
        <SocialIcons />
      </Box>
    </Flex>
  );
};

export default ContactCards;
