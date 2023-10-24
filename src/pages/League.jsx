import { Center, Text, Grid, Stack, Card, CardBody, CardFooter, Image, Heading, Divider, Button, Spinner, useColorMode, Link as ChakraLink } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getAllLeague } from "../utils";
import Footer from "../components/Footer";
import { Link as ReactRouterLink } from "react-router-dom";

const League = () => {
  const [datas, setDatas] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await getAllLeague();
        setDatas(apiData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 6, md: 10 }} px={{ base: 3, md: 10 }}>
        <Center>
          <Text as="b" fontSize="xl">
            Top Liga
          </Text>
        </Center>
        {isLoading ? (
          <Center>
            <Spinner size="lg" />
          </Center>
        ) : (
          <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", xl: "repeat(5, 1fr)" }} gap={6}>
            {datas.map((data) => (
              <Card maxW="sm" key={data.id}>
                <CardBody>
                  <Image src={colorMode === "light" ? data.logos.light : data.id == "chn.1" ? data.logos.light : data.logos.dark} alt="Liga Logo" />
                  <Heading size="md" mt={6}>
                    {data.name}
                  </Heading>
                </CardBody>
                <Divider />
                <Center>
                  <CardFooter>
                    <ChakraLink as={ReactRouterLink} to={`/leagues/${data.id}`}>
                      <Button>Cek Klasemen</Button>
                    </ChakraLink>
                  </CardFooter>
                </Center>
              </Card>
            ))}
          </Grid>
        )}
      </Stack>
      <Footer />
    </>
  );
};

export default League;
