import {
  Box,
  Flex,
  Image,
  HStack,
  Text,
  Link,
  Stack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  Button,
  Icon,
  MenuItem
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { Link as ReactSroll } from 'react-scroll'

const navLinks = [
  { name: "Home", path: "/", scroll: "home" },
  { name: "Services", path: "/", scroll: "services" },
  { name: "Pricing", path: "/", scroll: "pricing" },
  { name: "Testimonials", path: "/", scroll: "testimonial" },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const menuProps = {
    bg: useColorModeValue("gray.200", "gray.700"),
    color: useColorModeValue("orange.500", "orange.200"),
  };

  return (
    <Box boxShadow="lg" width="100%" px={{ base: "5" }}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW={{ base: "100%", md: "6xl" }}
        mx="auto"
      >
        <IconButton
          size="md"
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label="Open Menu"
          display={["inherit", "inherit", "none"]}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack alignItems="center">
          <Link href={"/"}>
            <HStack spacing={2} alignItems="center" mr={5}>
              <Image w="10" src={"/logo.png"} mr={1} />
              <Text
                fontWeight="bold"
                fontSize="lg"
                color={useColorModeValue("gray.900", "gray.100")}
              >
                Blackmond
              </Text>
            </HStack>
          </Link>
          <HStack
            spacing={1}
            display={{ base: "none", md: "flex" }}
            alignItems="center"
          >
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
          </HStack>
        </HStack>

        <IconButton aria-label="toggleColorMode" onClick={toggleColorMode}>
          {colorMode === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
        </IconButton>
      </Flex>

      {/* Mobile Screen Links */}
      {isOpen ? (
        <Box pb={4} display={["inherit", "inherit", "none"]}>
          <Stack spacing={2}>
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

const NavLink = ({ name, path, scroll, onClose }) => {
  const link = {
    bg: useColorModeValue("gray.200", "gray.700"),
    color: useColorModeValue("orange.500", "orange.200"),
  };

  return (
    <Link
			as={'span'}
      href={path}
      px={3}
      py={1}
      lineHeight="inherit"
      rounded="md"
      _hover={{
        textDecoration: "none",
        bg: link.bg,
        color: link.color,
      }}
      onClick={() => onClose()}
    >
      <ReactSroll to={scroll} smooth={true} duration={500}>
        {name}
      </ReactSroll>
    </Link>
  );
};