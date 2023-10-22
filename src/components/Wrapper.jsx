import PropTypes from "prop-types";
import Navbar from "./Navbar";

const Wrapper = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
