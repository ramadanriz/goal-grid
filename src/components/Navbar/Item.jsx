import PropTypes from "prop-types";
import { NavLink as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, MenuItem } from "@chakra-ui/react";

const Item = ({ link, name, colorMode }) => {
  return (
    <ChakraLink as={ReactRouterLink} to={link}>
      {({ isActive }) => <MenuItem bgColor={isActive ? (colorMode === "light" ? "gray.100" : "gray.900") : ""}>{name}</MenuItem>}
    </ChakraLink>
  );
};

Item.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string,
  colorMode: PropTypes.string,
};

export default Item;
