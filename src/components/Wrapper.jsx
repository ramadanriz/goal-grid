import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Wrapper = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
