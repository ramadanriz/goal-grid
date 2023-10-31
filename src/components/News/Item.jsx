import { Box, Image, Skeleton, Stack, Text, Link, Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Item = ({ link, title, description, thumbnail }) => {
  return (
    <Stack direction={{ base: "column", md: "row" }} justifyContent="left" my={5}>
      <Box mr={{ base: 0, md: 5 }} pos="relative">
        <Image boxShadow="lg" w="100%" h="100%" minW={{ base: "auto", md: "30rem" }} maxH="20rem" objectFit="cover" src={thumbnail} rounded="md" fallback={<Skeleton />} />
      </Box>
      <Stack direction="column" spacing={6} justifyContent="center">
        <Heading as="h4" size="md">
          {title}
        </Heading>
        <Box>
          <Text fontSize="md" textAlign="left" lineHeight="1.375" fontWeight="400" color="gray.500">
            {description}
          </Text>
        </Box>
        <Link href={link} target="_blank" fontSize="sm" color="blue.400">
          Cek selengkapnya →
        </Link>
      </Stack>
    </Stack>
  );
};

Item.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  thumbnail: PropTypes.string,
};

export default Item;
