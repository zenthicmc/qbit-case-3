import {
  Container,
  Box,
  chakra,
  Text,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaTruck } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { FaRecycle } from "react-icons/fa";

const features = [
  {
    heading: "Free Delivery",
    content: "We offer free delivery on all locations within the Jakarta area.",
    icon: FaTruck,
  },
  {
    heading: "Money-back guarantee",
    content: "If your product is damaged or not as described, we offer a full refund.",
    icon: FaMoneyBillTransfer,
  },
  {
    heading: "Healty Ingredients",
    content: "Besides being delicious, our cookies are made from the healty ingredients.",
    icon: MdHealthAndSafety,
  },
  {
    heading: "90% Recyclable",
    content: "Our packaging is made from 90% recyclable materials for a better environment.",
    icon: FaRecycle,
  },
];

const Features = () => {
  return (
    <Container maxW="6xl" px={{ base: 5, md: 10 }} py={{ base: "24", md: "10", lg: "10" }}>
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={3} textAlign="center">
        Our services for our healty customers
      </chakra.h3>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        placeItems="center"
        spacing={16}
        mt={12}
        mb={4}
      >
        {features.map((feature, index) => (
          <Box key={index} textAlign="center">
            <Icon as={feature.icon} w={10} h={10} color="orange.500" />
            <chakra.h3 fontWeight="semibold" fontSize="2xl">
              {feature.heading}
            </chakra.h3>
            <Text fontSize="md">{feature.content}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Features;
