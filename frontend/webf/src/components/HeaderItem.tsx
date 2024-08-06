"use client";
import {
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  VStack,
  Box,
  LinkProps,
} from "@chakra-ui/react";
import React from "react";

type MenuItems = {
  Schedule: string[];
  Result: string[];
  Others: string[];
  Blog: string[];
  Member: string[];
};

const item_menu: MenuItems = {
  Schedule: ["2024", "2023"],
  Result: ["2024", "2023"],
  Others: ["OB", "Sponsor", "Contact"],
  Blog: ["掲示板", "ブログ"],
  Member: ["4回生", "3回生", "2回生", "1回生", "OB"],
};

type SubitemDomain = {
  [key: string]: string;
};

const subitem_domain: SubitemDomain = {
  "4回生": "4th",
  "3回生": "3rd",
  "2回生": "2nd",
  "1回生": "1st",
  "OB": "ob",
  "Sponsor": "sponsor",
  "Contact": "contact",
  "掲示板": "forum",
  "ブログ": "blog",
  "2024": "2024",
  "2023": "2023",
};

type HeaderItemProps = {
  item: keyof MenuItems | "About";
};

const HeaderItem: React.FC<HeaderItemProps> = ({ item }) => {
  if (item === "About") {
    return (
      <Link
        href={`/${item.toLowerCase()}`}
        alignItems="center"
        color="black"
        textDecoration="none"
        fontWeight="bold"
      >
        {item}
      </Link>
    );
  } else {
    const [isHover, setIsHover] = React.useState<boolean>(false);
    return (
      <>
        <Popover
          trigger="hover"
          placement="bottom-start"
          onOpen={() => setIsHover(true)}
          onClose={() => setIsHover(false)}
        >
          <PopoverTrigger>
            <Box
              position="relative"
              overflow="hidden"
            >
              <Box
                
                alignItems="center"
                color="black"
                textDecoration="none"
                fontWeight="bold"
              >
                {item}
              </Box>
            </Box>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverBody>
              <VStack align="stretch">
                {item_menu[item].map((subitem: string) => (
                  <Link
                    key={subitem}
                    href={`/${item.toLowerCase()}/${subitem_domain[subitem]}`}
                    alignItems="center"
                    color="black"
                    textDecoration="none"
                    position="relative"
                  >
                    <Box w="100%" h="100%" backgroundColor="white" zIndex={2}>{subitem}</Box>
                  </Link>
                ))}
              </VStack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </>
    );
  }
};

export default HeaderItem;