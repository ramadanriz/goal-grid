import { Container, Heading, Stack, Text, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW={"5xl"}>
      <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
        <Heading fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
          Exploring the{" "}
          <Text as={"span"} color={"orange.400"}>
            Beautiful Game
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Never miss a game. Never be out of touch with your team. Stay on top of every match and receive live updates in real-time. Get your Matchday Masterplan ready for every kickoff.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button rounded={"full"} px={6} colorScheme={"orange"} bg={"orange.400"} _hover={{ bg: "orange.500" }}>
            Get started
          </Button>
          <Button rounded={"full"} px={6}>
            Learn more
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Index;
