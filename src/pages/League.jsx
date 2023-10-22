import { Center, Text, Grid, Stack, Card, CardBody, CardFooter, Image, Heading, Divider, Button } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";

const baseURL = "https://api-football-standings.azharimm.dev/leagues";

const League = () => {
  const [leagues, setLeagues] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setLeagues(response.data.data);
    });
  }, []);

  if (!leagues) return null;

  return (
    <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 6, md: 10 }} px={{ base: 3, md: 10 }}>
      <Center>
        <Text as="b" fontSize="xl">
          League Standings
        </Text>
      </Center>
      <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", xl: "repeat(5, 1fr)" }} gap={6}>
        {leagues.map((league) => (
          <Card maxW="sm" key={league.id}>
            <CardBody>
              <Image src={league.logos.light} alt="Green double couch with wooden legs" borderRadius="lg" />
              <Heading size="md" mt={6}>
                {league.name}
              </Heading>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button variant="solid" colorScheme="blue">
                Detail
              </Button>
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </Stack>
  );
};

export default League;
