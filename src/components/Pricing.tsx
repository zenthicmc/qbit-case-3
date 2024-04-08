"use client";

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
	Image,
  Button,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

interface Props {
  children: React.ReactNode;
}

function PriceWrapper(props: Props) {
  const { children } = props;

  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function Pricing() {
  return (
    <Box py={{ base: "10", lg: "24" }}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Our Packages and Prices
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          Choose the best package that suits your needs.
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box py={4} px={12}>
            <Image src="/blackmond1.png" alt="package1" w={250} m={"auto"} />
            <Text fontWeight="500" fontSize="2xl">
              Package 1
            </Text>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                Rp
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                15.000
              </Text>
            </HStack>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" mb={1} />
                4 cookies per package
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" mb={1} />
								1 flavor only
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" bg={'orange.400'} color={'white'} _hover={{ bgColor: 'orange.500' }} _active={{ bgColor: 'orange.600' }}>
                  Order Now
                </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg={'orange.400'}
                px={3}
                py={1}
                color={'white'}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                Best Seller
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Image src="/blackmond2.png" alt="package1" w={250} m={"auto"} />
              <Text fontWeight="500" fontSize="2xl">
                Package 2
              </Text>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  Rp
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  35.000
                </Text>
              </HStack>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" mb={1} />
                  10 cookies per package
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" mb={1} />
									3 different flavors
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" bg={'orange.400'} color={'white'} _hover={{ bgColor: 'orange.500' }} _active={{ bgColor: 'orange.600' }}>
                  Order Now
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>

        <PriceWrapper>
          <Box py={4} px={12}>
            <Image src="/blackmond3.png" alt="package1" w={250} m={"auto"} />
            <Text fontWeight="500" fontSize="2xl">
              Package 3
            </Text>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                Rp
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                70.000
              </Text>
            </HStack>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" mb={1} />
                16 cookies per package
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" mb={1} />
								5 different flavors
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" bg={'orange.400'} color={'white'} _hover={{ bgColor: 'orange.500' }} _active={{ bgColor: 'orange.600' }}>
                  Order Now
                </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}
