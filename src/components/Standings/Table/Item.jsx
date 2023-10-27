import { Flex, Image, Td, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Item = ({ team, rank, stats }) => {
  return (
    <>
      <Td>{rank + 1}</Td>
      <Td>
        <Flex alignItems={"center"}>
          {team.logos ? <Image src={team.logos[0].href} boxSize="50px" objectFit="cover" /> : ""}
          <Text ml={4}>{team.name}</Text>
        </Flex>
      </Td>
      <Td>{stats[0].value}</Td>
      <Td>{stats[7].value}</Td>
      <Td>{stats[6].value}</Td>
      <Td>{stats[1].value}</Td>
      <Td>
        {stats[5].value}-{stats[4].value}
      </Td>
      <Td>{stats[2].value}</Td>
      <Td>{stats[3].value}</Td>
    </>
  );
};

Item.propTypes = {
  team: PropTypes.object,
  stats: PropTypes.array,
  rank: PropTypes.number,
};

export default Item;
