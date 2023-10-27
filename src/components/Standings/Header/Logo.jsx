import { Image, useColorMode } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Logo = ({ id, logo }) => {
  const { colorMode } = useColorMode();

  return <Image boxSize="100px" objectFit="cover" src={colorMode === "light" ? logo.light : id == "chn.1" ? logo.light : logo.dark} alt="Liga Logo" />;
};

Logo.propTypes = {
  id: PropTypes.string,
  logo: PropTypes.object,
};

export default Logo;
