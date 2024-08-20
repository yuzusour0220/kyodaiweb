"use client";

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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

type ObGenerationProps = {
  params: {
    generation: string;
  };
};

interface Member {
  name: string;
  id: number;
  photo: string;
  sail_number: string;
  introduction: string;
  position: string;
  grade: string;
  faculty: string;
  generation: number;
}

const ObGenerationPage = ({ params }: ObGenerationProps) => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/members/?grade=ob`)
      .then((res) => {
        const filteredMembers = res.data.filter(
          (member: Member) => member.generation.toString() === params.generation
        );
        setMembers(filteredMembers);
      })
      .catch((error) => {
        console.error("There was an error fetching OB members:", error);
      });
  }, [params.generation]);

 

  return (
    <Box>
      <Center margin={10}>
        <Heading>{params.generation}期 OBメンバー</Heading>
      </Center>

      <SimpleGrid
        columns={[1, 2, 2, 2, 3]}
        spacing={[2, 4, 4, 4, 6]}
        width="95%"
        margin="auto"
        alignItems="stretch"
      >
        {members.map((member) => (
          <GridItem key={member.id} w="100%" display="flex">
            <Card backgroundColor="#eaf6fd" alignItems="center">
              <CardHeader>
                <Center>
                  <Heading size="md">{member.name}</Heading>
                </Center>
                <Text fontSize="lg" align="center" marginTop={2}>
                  {member.sail_number} {member.position} {member.faculty}
                </Text>
              </CardHeader>
              <CardBody>
                <Flex justifyContent="center" width="100%">
                  <Image
                    src={member.photo}
                    alt={`${member.name}'s photo`}
                    width="90%"
                    maxWidth="100%"
                    objectFit="cover"
                    marginBottom={4}
                  />
                </Flex>
                <Text fontSize="lg">{member.introduction}</Text>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ObGenerationPage;