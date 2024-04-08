import * as React from 'react';
import {
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Button,
  Skeleton,
  Box,
  Link,
  Icon
} from '@chakra-ui/react';
import { GoChevronRight } from 'react-icons/go';
import { FaCartShopping } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";
import Image from 'next/image';

const HeroSection = () => {
  return (
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={16}>
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
        <Stack direction="column" spacing={6} justifyContent="center" maxW="480px">
          <HStack
            as={Link}
            p={1}
            rounded="full"
            fontSize="sm"
            w="max-content"
            bg={useColorModeValue('gray.100', 'gray.700')}
          >
            <Box
              py={1}
              px={2}
              lineHeight={1}
              rounded="full"
              color="white"
              bgGradient="linear(to-l, #ED8936, #DD6B20)"
            >
              What's new
            </Box>
            <HStack spacing={1} alignItems="center" justifyContent="center">
              <Text lineHeight={1}>Now with new packaging</Text>
              <Icon as={GoChevronRight} w={4} h={4} />
            </HStack>
          </HStack>
          <chakra.h1 fontSize="5xl" lineHeight={1} fontWeight="bold" textAlign="left" color={useColorModeValue('gray.800', 'gray.100')}>
            Healty Cookies for Happy Life
            <chakra.span color="orange.400"> with Blackmond</chakra.span>
          </chakra.h1>
          <Text
            fontSize="1.1rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="400"
            color={useColorModeValue('gray.500', 'gray.400')}
          >
            Blackmond is a healthy cookie that is made from the best ingredients and is perfect for your healthy lifestyle.
          </Text>
          <HStack
            spacing={{ base: 0, sm: 2 }}
            mb={{ base: '3rem !important', sm: 0 }}
            flexWrap="wrap"
          >
            <Button
              w={{ base: '100%', sm: 'auto' }}
              h={12}
              px={7}
              size="lg"
              rounded="md"
              mb={{ base: 2, sm: 0 }}
              zIndex={5}
              lineHeight={1}
              color={'white'}
              bgColor={'orange.400'}
              _hover={{ bgColor: 'orange.500' }}
              _active={{ bgColor: 'orange.600' }}
            >
              <FaCartShopping />
              <chakra.span ms={1}>Buy Now</chakra.span>
            </Button>
            <Button
              variant={'outline'}
              w={{ base: '100%', sm: 'auto' }}
              h={12}
              px={7}
              size="lg"
              rounded="md"
              mb={{ base: 2, sm: 0 }}
              zIndex={5}
              lineHeight={1}
              colorScheme='gray'
            >
              <IoInformationCircleOutline />
              <chakra.span ms={1}>Learn More</chakra.span>
            </Button>
          </HStack>
        </Stack>
        <Box ml={{ base: 0, md: 5 }} pos="relative">
          <DottedBox />
          <Image
            alt='Blackmond Cookies'
            width={600}
            height={600}
            objectFit="cover"
            src={'/blackmond.png'}
          />
        </Box>
      </Stack>
    </Container>
  );
};

function DottedBox() {
  return (
    <Box position="absolute" right="80px" top="40px" height="full" maxW="400px" zIndex={-1}>
      <svg
        color={useColorModeValue('rgba(55,65,81, 0.1)', 'rgba(55,65,81, 0.7)')}
        width="350"
        height="420"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
      </svg>
    </Box>
  );
}

export default HeroSection;
