import { Card, CardBody, CardFooter, Stack, Heading, Button, Image, Text, Spinner, Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getLeagueDetail } from "../utils";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await getLeagueDetail(id);
      setData(apiData);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  return isLoading ? (
    <Center>
      <Spinner size="lg" />
    </Center>
  ) : (
    <Card direction={{ base: "column", sm: "row" }} overflow="hidden" variant="outline">
      <Image objectFit="cover" maxW={{ base: "100%", sm: "200px" }} src={data.logos.light} alt="Caffe Latte" />

      <Stack>
        <CardBody>
          <Heading size="md">The perfect latte</Heading>

          <Text py="2">Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.</Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Buy Latte
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default Detail;
