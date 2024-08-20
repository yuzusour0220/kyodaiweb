"use client";


export type MenuItems = {
  Race: string[];
  Others: string[];
  Blog: string[];
  Member: string[];
  About: string[];
};

type SubitemDomain = {
  [key: string]: string;
};

interface Schedule {
  id: number;
  event_name: string;
  start: string;
  end: string;
  result: string;
  photo: string | null;
  files: any[];
}

const item_menu: MenuItems = {
  Race: [],  // これを動的に設定します
  Others: ["OBさんへ", "Weather", "旧ウェブサイト","SNS", "部員用"],
  Blog: ["掲示板"],
  Member: ["4回生", "3回生", "2回生", "1回生", "OB"],
  About: ["About us", "ギャラリー"],
};

const subitem_domain: SubitemDomain = {
  "4回生": "4th",
  "3回生": "3rd",
  "2回生": "2nd",
  "1回生": "1st",
  "OBさんへ": "ob",
  Sponsor: "sponsor",
  Contact: "contact",
  掲示板: "forum",
  ブログ: "blog",
  "About us": "about",
  ギャラリー: "gallery",
  "Weather": "weather",
  "OB": "ob",
  "旧ウェブサイト": "oldweb",
  "SNS": "sns",
  "部員用": "login",
};

interface HeaderItemProps {
  item: keyof MenuItems;
}

const extractYears = (schedules: Schedule[]): string[] => {
  if (!schedules || schedules.length === 0) return [new Date().getFullYear().toString()];
  
  const years = schedules.map(schedule => new Date(schedule.start).getFullYear().toString());
  return [...new Set(years)].sort((a, b) => b.localeCompare(a));
};

// const HeaderItem: React.FC<HeaderItemProps> = ({ item }) => {
//   const [years, setYears] = useState<string[]>([]);

//   useEffect(() => {
//     if (item === 'Race') {
//       const fetchSchedules = async () => {
//         try {
//           const response = await axios.get<Schedule[]>('http://127.0.0.1:8000/api/schedule/');
//           const extractedYears = extractYears(response.data);
//           setYears(extractedYears);
//           item_menu.Race = extractedYears;
//         } catch (error) {
//           console.error('Error fetching schedules:', error);
//         }
//       };

//       fetchSchedules();
//     }
//   }, [item]);

//   const getSubItems = (): string[] => {
//     return item === 'Race' ? years : item_menu[item];
//   };

//   return (
//     <Box width="100%">
//       <Popover trigger="hover" placement="bottom-start">
//         <PopoverTrigger>
//           <Box width="100%" cursor="pointer" p={2}>
//             {item}
//           </Box>
//         </PopoverTrigger>
//         <PopoverContent width="100%" backgroundColor="white">
//           <PopoverBody width="100%" padding={0}>
//             <VStack width="100%" align="stretch">
//               {getSubItems().map((subitem: string) => (
//                 <Link
//                   key={subitem}
//                   href={`/${item.toLowerCase()}/${subitem_domain[subitem] || subitem}`}
//                   width="100%"
//                   padding="0.5rem 0.7rem"
//                   _hover={{ backgroundColor: "gray.100", opacity: 1 }}
//                   textDecoration="none"
//                   color="black"
//                   fontWeight="normal"
//                 >
//                   <Center>
//                     {subitem}
//                   </Center>
//                 </Link>
//               ))}
//             </VStack>
//           </PopoverBody>
//         </PopoverContent>
//       </Popover>
//     </Box>
//   );
// };

// export default HeaderItem;

import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  VStack,
  Box,
  Center,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";

// ... (他のインターフェースと定数は変更なし)

interface HeaderItemProps {
  item: keyof MenuItems;
  isMobile?: boolean;
  onClose?: () => void;
}


const HeaderItem: React.FC<HeaderItemProps> = ({ item, isMobile, onClose }) => {
  const [years, setYears] = useState<string[]>([]);

  useEffect(() => {
    if (item === 'Race') {
      const fetchSchedules = async () => {
        try {
          const response = await axios.get<Schedule[]>('http://127.0.0.1:8000/api/schedule/');
          const extractedYears = extractYears(response.data);
          setYears(extractedYears);
          item_menu.Race = extractedYears;
        } catch (error) {
          console.error('Error fetching schedules:', error);
        }
      };

      fetchSchedules();
    }
  }, [item]);

  const getSubItems = (): string[] => {
    return item === 'Race' ? years : item_menu[item];
  };

  if (isMobile) {
    return (
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontWeight="bold">
              {item}
            </Box>
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack align="stretch">
              {getSubItems().map((subitem: string) => (
                <Link
                  key={subitem}
                  href={`/${item.toLowerCase()}/${subitem_domain[subitem] || subitem}`}
                  onClick={onClose}
                >
                  {subitem}
                </Link>
              ))}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  }

  return (
    <Box width="100%">
      <Popover trigger="hover" placement="bottom-start">
        <PopoverTrigger>
          <Box width="100%" cursor="pointer" p={2}>
            {item}
          </Box>
        </PopoverTrigger>
        <PopoverContent width="100%" backgroundColor="white">
          <PopoverBody width="100%" padding={0}>
            <VStack width="100%" align="stretch">
              {getSubItems().map((subitem: string) => (
                <Link
                  key={subitem}
                  href={`/${item.toLowerCase()}/${subitem_domain[subitem] || subitem}`}
                  width="100%"
                  padding="0.5rem 0.7rem"
                  _hover={{ backgroundColor: "gray.100", opacity: 1 }}
                  textDecoration="none"
                  color="black"
                  fontWeight="normal"
                >
                  <Center>
                    {subitem}
                  </Center>
                </Link>
              ))}
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default HeaderItem;