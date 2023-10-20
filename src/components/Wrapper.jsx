import PropTypes from "prop-types";
import { Container } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Wrapper = (props) => {
  return (
    <>
      <Navbar />
      <Container>{props.children}</Container>
    </>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
