import { MenuButton } from "@chakra-ui/react";
import { Spin as Hamburger } from "hamburger-react";
import PropTypes from "prop-types";

const DarkMode = ({ button, open }) => {
  return (
    <MenuButton as={button} _hover={false} px="1px">
      <Hamburger toggled={open} size={20} rounded />
    </MenuButton>
  );
};

DarkMode.propTypes = {
  button: PropTypes.object,
  open: PropTypes.bool,
};

export default DarkMode;
