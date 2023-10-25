import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getLeagueDetail, getLeagueStandings } from "../utils";
import { Center, Flex, Heading, Image, Spinner, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useColorMode } from "@chakra-ui/react";

const Detail = () => {
  const [data, setData] = useState();
  const [standing, setStanding] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const { colorMode } = useColorMode();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await getLeagueDetail(id);
        setData(apiData);
        const apiDataStanding = await getLeagueStandings(id);
        setStanding(apiDataStanding);
        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [id]);

  return isLoading ? (
    <Center>
      <Spinner size="lg" />
    </Center>
  ) : (
    <Stack gap={3}>
      <Center py={3}>
        <Image boxSize="100px" objectFit="cover" src={colorMode === "light" ? data.logos.light : id == "chn.1" ? data.logos.light : data.logos.dark} alt="Liga Logo" />
        <Stack>
          <Heading fontWeight={600} fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }} lineHeight={"110%"}>
            {data.name}
          </Heading>
          <Text>Season: {standing.seasonDisplay}</Text>
        </Stack>
      </Center>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Team</Th>
              <Th>GP</Th>
              <Th>W</Th>
              <Th>D</Th>
              <Th>L</Th>
              <Th>+/-</Th>
              <Th>GD</Th>
              <Th>PTS</Th>
            </Tr>
          </Thead>
          <Tbody>
            {standing.standings.map((data, index) => (
              <Tr key={data.team.id}>
                <Td>{index + 1}</Td>
                <Td>
                  <Flex alignItems={"center"}>
                    <Image src={data.team.logos[0].href} boxSize="50px" objectFit="cover" />
                    <Text ml={4}>{data.team.name}</Text>
                  </Flex>
                </Td>
                <Td>{data.stats[0].value}</Td>
                <Td>{data.stats[7].value}</Td>
                <Td>{data.stats[6].value}</Td>
                <Td>{data.stats[1].value}</Td>
                <Td>
                  {data.stats[5].value}-{data.stats[4].value}
                </Td>
                <Td>{data.stats[2].value}</Td>
                <Td>{data.stats[3].value}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default Detail;
