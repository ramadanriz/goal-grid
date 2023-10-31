import { Container, Heading, Stack, Text } from "@chakra-ui/react";

const Hero = () => {
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
      </Stack>
    </Container>
  );
};

export default Hero;
