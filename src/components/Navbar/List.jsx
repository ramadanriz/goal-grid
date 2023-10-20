import PropTypes from "prop-types";
import { MenuList } from "@chakra-ui/react";
import Item from "./Item";

const List = ({ menuList, colorMode }) => {
  return (
    <MenuList>
      {menuList.map((menu, index) => (
        <Item key={index} colorMode={colorMode} {...menu} />
      ))}
    </MenuList>
  );
};

List.propTypes = {
  menuList: PropTypes.arrayOf(PropTypes.object),
  colorMode: PropTypes.string,
};

export default List;
