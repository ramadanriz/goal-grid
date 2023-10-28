import { Center, Stack, Spinner, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getAllLeague } from "../utils";
import Footer from "../components/Footer";
import List from "../components/League/List";

const League = () => {
  const [leagues, setLeagues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllLeague().then(({ data }) => {
      setLeagues(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 6, md: 10 }} px={{ base: 3, md: 10 }}>
        <Center>
          <Heading size="lg">Top Liga</Heading>
        </Center>
        {isLoading ? (
          <Center>
            <Spinner size="lg" />
          </Center>
        ) : (
          <List leagues={leagues} />
        )}
      </Stack>
      <Footer position={isLoading ? "fixed" : ""} bottom={isLoading ? 0 : ""} />
    </>
  );
};

export default League;
