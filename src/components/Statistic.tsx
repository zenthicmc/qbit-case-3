import * as React from "react";
import { Container, Text, SimpleGrid, Box, Flex, HStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { RiBillFill } from "react-icons/ri";
import { FaUserCheck } from "react-icons/fa6";

interface StatData {
  id: number;
  label: string;
  score: string;
	icon?: React.ReactNode;
}

const statData: StatData[] = [
  {
    id: 1,
    label: "Total customers",
    score: "1,730",
    icon: <FaUserCheck />,
  },
  {
    id: 2,
    label: "Total transactions",
    score: "4,573",
    icon: <RiBillFill />,
  },
  {
    id: 3,
    label: "Our rating",
    score: "4.8",
    icon: <FaStar />,
  },
];

const Statistic = () => {
  return (
    <Container maxW="7xl" px={{ base: 5, md: 10 }} py={{ base: "24", lg: "24" }}>
      <Text fontSize="4xl" fontWeight="bold" textAlign="center">
        Our Statistics
      </Text>
      <Text fontSize="lg" color={"gray.500"} mb={16} textAlign="center">
        Here are some statistics about our products that may interest you.
      </Text>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5} mb={4}>
        {statData.map((data) => (
          <Box key={data.id} p={5} boxShadow="md" rounded="md" borderWidth={1}>
						<HStack>
							<Text fontSize="xl">{data.icon}</Text>
							<Text fontWeight="extrabold" fontSize="x-large">
								{data.score}
							</Text>
						</HStack>
            <Text>{data.label}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Statistic;
