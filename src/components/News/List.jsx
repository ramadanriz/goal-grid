import PropTypes from "prop-types";
import Item from "./Item";
import { Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import "../../styles/pagination.css";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

const List = ({ news, totalPages, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = news.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <Stack spacing={6}>
      {news.length > 0 ? subset.map((post, index) => <Item key={index} {...post} />) : <Text>Tidak ada data</Text>}
      <ReactPaginate
        onPageChange={handlePageChange}
        pageCount={totalPages}
        forcePage={currentPage}
        nextLabel=<ChevronRightIcon boxSize={7} />
        previousLabel=<ChevronLeftIcon boxSize={7} />
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeClassName="active"
      />
    </Stack>
  );
};

List.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
  totalPages: PropTypes.number,
  itemsPerPage: PropTypes.number,
};

export default List;
