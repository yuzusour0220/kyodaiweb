import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Link,
  Image,
  Spacer,
} from "@chakra-ui/react";

const NAV_ITEMS = ["About", "Member", "Blog", "Result", "Schedule", "Others"];

const Header = () => {
  return (
    <Box>
      <Flex>
      <Link href="/" textDecoration="none">
        <Flex align="center">
          
          <Box>
            <Image src="/photos/logosample.png" alt="logo" boxSize="40px" />
          </Box>
          <Box fontSize="15px" fontWeight="bold">
            Kyoto Univ Windsurfing Club
          </Box>
          
        </Flex>
        </Link>
        <Flex
          justifyContent="space-around"
          
          flex={1}
          align = "center"
          
        >
          {NAV_ITEMS.map((item) => (
            <Box h="100%" alignContent="center" color="white">
              <Link href={item.toLowerCase()} alignItems="center" color="black" textDecoration="none">{item}</Link>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
