import {
  chakra,
  Stack,
  Flex,
  useColorModeValue,
  Container,
  Link,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { BsCheck } from "react-icons/bs";

const data = {
  heading: "There is a special discount for new customers",
  subHeading: "Get 30% off on your first purchase on one of our products",
  features: [
    "Free delivery on all locations",
    "Money-back guarantee",
    "Healthy ingredients",
  ],
};

const CTA = () => {
  return (
    <Container maxW="6xl" px={{ base: 5, md: 10 }} pb={24}>
      <Flex
        boxShadow={useColorModeValue(
          "0 4px 6px rgba(160, 174, 192, 0.6)",
          "0 4px 6px rgba(9, 17, 28, 0.9)"
        )}
        bgGradient="linear(to-l, #ED8936, #DD6B20)"
        p={{ base: 4, sm: 8 }}
        color={"white"}
        rounded="lg"
      >
        <Stack direction="column" spacing={2} textAlign="left" flexGrow={3}>
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold">
            {data.heading}
          </chakra.h1>
          <chakra.h1 fontSize="sm" lineHeight={1.2} fontWeight="bold">
            {data.subHeading}
          </chakra.h1>
          <List spacing={3} my={3}>
            {data.features.map((feature, index) => (
              <ListItem key={index} fontSize={"sm"}>
                <ListIcon as={BsCheck} color="green.700" />
                {feature}
              </ListItem>
            ))}
          </List>
          <Link
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            fontSize="md"
            fontWeight="500"
            p={3}
            w="max-content"
            rounded="md"
            textDecoration="none"
            color="white"
            bg="blackAlpha.400"
            shadow="lg"
            size={"md"}
          >
            Click here to proceed
          </Link>
        </Stack>
      </Flex>
    </Container>
  );
};

export default CTA;
