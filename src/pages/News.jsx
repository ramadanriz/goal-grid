import { Container, Center, Heading, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getNews } from "../utils";
import List from "../components/News/List";

const News = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getNews().then(({ data }) => {
      setNews(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={14}>
      <Center mb={{ base: 8, md: 10 }}>
        <Heading size={"lg"}>Berita Sepakbola</Heading>
      </Center>
      {isLoading ? (
        <Center>
          <Spinner size="lg" />
        </Center>
      ) : (
        <List news={news.posts} />
      )}
    </Container>
  );
};

export default News;
