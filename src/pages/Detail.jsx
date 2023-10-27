import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getLeagueDetail, getLeagueStandings } from "../utils";
import { Center, Spinner, Stack, Table, TableContainer, Th, Thead, Tr } from "@chakra-ui/react";
import Logo from "../components/Standings/Header/Logo";
import Title from "../components/Standings/Header/Title";
import List from "../components/Standings/Table/List";

const Detail = () => {
  const [data, setData] = useState();
  const [standing, setStanding] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const leagueStandings = await getLeagueStandings(id);
        const leagueDetail = await getLeagueDetail(id);
        setStanding(leagueStandings);
        setData(leagueDetail);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
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
        <Logo id={data.id} logo={data.logos} />
        <Title name={standing.name} seasonDisplay={standing.seasonDisplay} />
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
          <List standings={standing.standings} />
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default Detail;
