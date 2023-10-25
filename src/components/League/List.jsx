import PropTypes from "prop-types";
import Item from "./Item";
import { Text, Grid } from "@chakra-ui/react";

const List = ({ leagues }) => {
  return (
    <>
      {leagues.length > 0 ? (
        <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", xl: "repeat(5, 1fr)" }} gap={6}>
          {leagues.map((league) => (
            <Item key={league.id} id={league.id} {...league} />
          ))}
        </Grid>
      ) : (
        <Text>Tidak ada data</Text>
      )}
    </>
  );
};

List.propTypes = {
  leagues: PropTypes.arrayOf(PropTypes.object),
};

export default List;
