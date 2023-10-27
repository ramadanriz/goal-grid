import { Heading, Stack, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Title = ({ name, seasonDisplay }) => {
  return (
    <Stack>
      <Heading fontWeight={600} fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }} lineHeight={"110%"}>
        {name}
      </Heading>
      <Text>Season: {seasonDisplay}</Text>
    </Stack>
  );
};

Title.propTypes = {
  name: PropTypes.string,
  seasonDisplay: PropTypes.string,
};

export default Title;
