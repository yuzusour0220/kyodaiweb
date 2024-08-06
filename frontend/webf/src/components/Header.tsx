import { Box, Flex, Link, Image } from "@chakra-ui/react";
import HeaderItem from "./HeaderItem";

const NAV_ITEMS = ["About", "Member", "Blog", "Result", "Schedule", "Others"];

const Header = () => {
  return (
    <Box position="sticky" top={0} left={0} right={0} bg="white" zIndex={1000} >
      <Box as="header" maxWidth="container.xl" margin="0 auto" h="50px">
        <Flex>
          <Link href="/" textDecoration="none">
            <Flex align="center">
              <Box>
                <Image src="/photos/logosample.png" alt="logo" boxSize="40px" />
              </Box>
              <Box fontSize="15px" fontWeight="bold" color="black">
                Kyoto Univ Windsurfing Club
              </Box>
            </Flex>
          </Link>
          <Flex justifyContent="space-around" flex={1} align="center">
            {NAV_ITEMS.map((item) => (
              <Box key={item} h="100%" alignContent="center" color="white">
                <HeaderItem item={item} />
              </Box>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;