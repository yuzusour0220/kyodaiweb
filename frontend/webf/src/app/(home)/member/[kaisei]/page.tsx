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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

type kaiseiProps = {
  params: {
    kaisei: keyof kaiseitaiouProps;
  };
};

const kaiseitaiou: kaiseitaiouProps = {
  "4th": "4回生",
  "3rd": "3回生",
  "2nd": "2回生",
  "1st": "1回生",
  ob: "OB",
};
type kaiseitaiouProps = {
  "4th": string;
  "3rd": string;
  "2nd": string;
  "1st": string;
  ob: string;
};

const Member = ({ params }: kaiseiProps) => {
  const [users, setUsers] = useState<
    {
      name: string;
      id: number;
      photo: string;
      sail_number: string;
      introduction: string;
      position: string;
      grade: string;
      faculty: string;
    }[]
  >([]);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/members/`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <>
      <Center margin={10}>
        <Heading>{kaiseitaiou[params.kaisei]}</Heading>
      </Center>

      <SimpleGrid
        columns={{base: 1, md: 2, lg: 3}} // 各ブレイクポイントに対して列数を設定
        spacing={4} // 各ブレイクポイントに対して間隔を設定
        width="95%"
        margin="auto"
        alignItems="stretch"
      >
        {users
          .filter((user) => params.kaisei.includes(user.grade))
          .map((user) => (
            <GridItem key={user.name} w="100%" display="flex">
              <Card backgroundColor="#eaf6fd" alignItems="center">
                <CardHeader>
                  <Center>
                    <Heading size="md">{user.name}</Heading>
                  </Center>
                  <Text fontSize="lg" align="center" marginTop={2}>
                    {user.sail_number} {user.position}  {user.faculty}
                  </Text>
                </CardHeader>
                <CardBody>
                  <Flex justifyContent="center" width="100%">
                    <Image
                      src={user.photo}
                      alt="logo"
                      width="90%"
                      maxWidth="100%"
                      objectFit="cover"
                      marginBottom={4}
                    />
                  </Flex>
                  <Text fontSize="lg">{user.introduction}</Text>
                </CardBody>
              </Card>
            </GridItem>
          ))}
      </SimpleGrid>
    </>
  );
};

export default Member;
