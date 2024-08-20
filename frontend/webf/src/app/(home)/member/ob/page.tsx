"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Box,
  Link,
} from "@chakra-ui/react";
import NextLink from 'next/link';

interface Member {
  id: number;
  name: string;
  photo: string;
  sail_number: string;
  introduction: string;
  position: string;
  grade: string;
  faculty: string;
  generation: number;
}

interface GroupedMembers {
  [key: number]: Member[];
}

const OBMembersPage = () => {
  const [groupedObMembers, setGroupedObMembers] = useState<GroupedMembers>({});

  useEffect(() => {
    const fetchObMembers = async () => {
      try {
        const response = await axios.get<Member[]>(`${process.env.NEXT_PUBLIC_API_URL}/members/?grade=ob`);
        const filteredObMembers = response.data.filter((member: Member) => member.grade === 'OB');
        
        // グループ化
        const grouped = filteredObMembers.reduce((acc: GroupedMembers, member: Member) => {
          if (!acc[member.generation]) {
            acc[member.generation] = [];
          }
          acc[member.generation].push(member);
          return acc;
        }, {});

        setGroupedObMembers(grouped);
      } catch (error) {
        console.error('Error fetching OB members:', error);
      }
    };

    fetchObMembers();
  }, []);

  return (
    <Box>
      <Center margin={10}>
        <Heading>OBメンバー</Heading>
      </Center>

      <SimpleGrid
        columns={[1, 2, 2, 3, 4]}
        spacing={[2, 4, 4, 4, 6]}
        width="95%"
        margin="auto"
        alignItems="stretch"
      >
        {Object.entries(groupedObMembers).map(([generation, members]) => (
          <GridItem key={generation} w="100%" display="flex">
            <Card backgroundColor="#eaf6fd" alignItems="center" width="100%">
              <CardHeader>
                <Center>
                  <Heading size="md">{generation}期</Heading>
                </Center>
              </CardHeader>
              <CardBody>
                <Center>
                  <NextLink href={`/member/ob/${generation}`} passHref>
                    <Link color="blue.500" fontWeight="bold">
                      一覧
                    </Link>
                  </NextLink>
                </Center>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default OBMembersPage;