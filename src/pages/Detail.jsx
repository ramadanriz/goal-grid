import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getLeagueDetail } from "../utils";
import { Center, Spinner } from "@chakra-ui/react";

const Detail = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await getLeagueDetail(id);
        setData(apiData);
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
    <div>Detail {data.name}</div>
  );
};

export default Detail;
