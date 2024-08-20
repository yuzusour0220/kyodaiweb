// import { Box, Flex, Link, Image } from "@chakra-ui/react";
// import HeaderItem, { MenuItems } from './HeaderItem';
// const NAV_ITEMS: Array<keyof MenuItems> = ["About", "Member", "Blog", "Race", "Others"];

// const Header = () => {
//   return (
//     <Box position="sticky" top={0} left={0} right={0} bg="white" zIndex={1000} paddingTop={2}>
//       <Box as="header" width="90%" margin="0 auto" h="50px">
//         <Flex>
//           <Link href="/" textDecoration="none">
//             <Flex align="center">
//               <Box>
//                 <Image src="/photos/logosample.png" alt="logo" boxSize="40px" />
//               </Box>
//               <Box fontSize="15px" fontWeight="bold" color="black">
//                 Kyoto Univ Windsurfing Club
//               </Box>
//             </Flex>
//           </Link>
//           <Flex justifyContent="space-around" flex={1} align="center"w = "100%">
//             {NAV_ITEMS.map((item) => (
//               <Box key={item} alignContent="center" color="black" fontWeight="bold"> 
//                 <HeaderItem item={item} />
//               </Box>
//             ))}
//           </Flex>
//         </Flex>
//       </Box>
//     </Box>
//   );
// };

// export default Header;
"use client";
import React, { useState } from "react";
import { Box, Flex, Link, Image, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, VStack, useDisclosure, useBreakpointValue } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';
import HeaderItem, { MenuItems } from './HeaderItem';

const NAV_ITEMS: Array<keyof MenuItems> = ["About", "Member", "Blog", "Race", "Others"];

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box position="sticky" top={0} left={0} right={0} bg="white" zIndex={1000} paddingTop={2}>
      <Box as="header" width="90%" margin="0 auto" h="50px">
        <Flex justify="space-between" align="center">
          <Link href="/" textDecoration="none">
            <Flex align="center">
              <Box>
                <Image src="/photos/logosample.png" alt="logo" boxSize="40px" />
              </Box>
              <Box fontSize="15px" fontWeight="bold" color="black" ml={2}>
                Kyoto Univ Windsurfing Club
              </Box>
            </Flex>
          </Link>
          {isMobile ? (
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              onClick={onOpen}
            />
          ) : (
            <Flex justifyContent="space-around" flex={1} align="center">
              {NAV_ITEMS.map((item) => (
                <Box key={item} alignContent="center" color="black" fontWeight="bold">
                  <HeaderItem item={item} />
                </Box>
              ))}
            </Flex>
          )}
        </Flex>
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack spacing={4} align="stretch" mt={8}>
              {NAV_ITEMS.map((item) => (
                <HeaderItem key={item} item={item} isMobile={true} onClose={onClose} />
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;