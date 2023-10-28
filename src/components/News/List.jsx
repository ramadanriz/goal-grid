import PropTypes from "prop-types";
import Item from "./Item";
import { Text } from "@chakra-ui/react";

const List = ({ news }) => {
  return news.length > 0 ? news.map((post, index) => <Item key={index} {...post} />) : <Text>Tidak ada data</Text>;
};

List.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
};

export default List;
