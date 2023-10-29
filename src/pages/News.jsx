import { Container, Center, Heading, Spinner, Tabs, TabList, Tab, TabIndicator, TabPanels, TabPanel } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getNews } from "../utils";
import List from "../components/News/List";

const News = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newsSource, setNewsSource] = useState();

  useEffect(() => {
    getNews(newsSource).then(({ data }) => {
      setNews(data);
      setIsLoading(false);
    });
  }, [newsSource]);

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
        // <List news={news.posts} />
        <Tabs position="relative" variant="unstyled">
          <Center>
            <TabList>
              <Tab onClick={() => setNewsSource("tempo")}>Tempo</Tab>
              <Tab onClick={() => setNewsSource("suara")}>Suara</Tab>
              <Tab onClick={() => setNewsSource("antara")}>Antara</Tab>
            </TabList>
          </Center>
          <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
          <TabPanels>
            <TabPanel>
              <List news={news.posts} />
            </TabPanel>
            <TabPanel>
              <List news={news.posts} />
            </TabPanel>
            <TabPanel>
              <List news={news.posts} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
    </Container>
  );
};

export default News;
