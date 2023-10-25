import { Center, Card, CardBody, CardFooter, Image, Heading, Divider, Button, useColorMode, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import PropTypes from "prop-types";

const Item = ({ id, name, logos }) => {
  const { colorMode } = useColorMode();
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={colorMode === "light" ? logos.light : id == "chn.1" ? logos.light : logos.dark} alt="Liga Logo" />
        <Heading size="md" mt={6}>
          {name}
        </Heading>
      </CardBody>
      <Divider />
      <Center>
        <CardFooter>
          <ChakraLink as={ReactRouterLink} to={`/league/${id.replace(".1", "")}`}>
            <Button>Cek Klasemen</Button>
          </ChakraLink>
        </CardFooter>
      </Center>
    </Card>
  );
};

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  logos: PropTypes.object.isRequired,
};

export default Item;
