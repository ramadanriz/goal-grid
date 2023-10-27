import PropTypes from "prop-types";
import Item from "./Item";
import { Tbody, Tr } from "@chakra-ui/react";

const List = ({ standings }) => {
  return (
    <Tbody>
      {standings.map((standing, index) => (
        <Tr key={index}>
          <Item rank={index} {...standing} />
        </Tr>
      ))}
    </Tbody>
  );
};

List.propTypes = {
  standings: PropTypes.arrayOf(PropTypes.object),
};

export default List;
