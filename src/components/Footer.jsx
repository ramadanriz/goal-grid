import { Box, useColorModeValue, Center } from "@chakra-ui/react";

const Footer = (props) => {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} color={useColorModeValue("gray.700", "gray.200")} {...props}>
      <Center py={4}>© 2023 GoalGrid. All rights reserved</Center>
    </Box>
  );
};

export default Footer;
