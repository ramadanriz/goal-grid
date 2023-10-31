import { Container, Center, Heading, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getNews } from "../utils";
import List from "../components/News/List";

const News = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    getNews().then(({ data }) => {
      setNews(data);
      setIsLoading(false);
      setTotalPages(Math.ceil(data.posts.length / itemsPerPage));
    });
  }, []);

  return (
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={14}>
      <Center mb={{ base: 8, md: 10 }}>
        <Heading size={"lg"}>Football News</Heading>
      </Center>
      {isLoading ? (
        <Center>
          <Spinner size="lg" />
        </Center>
      ) : (
        <List news={news.posts} totalPages={totalPages} itemsPerPage={itemsPerPage} />
      )}
    </Container>
  );
};

export default News;
