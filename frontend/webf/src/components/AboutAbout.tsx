import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  UnorderedList,
  ListItem,
  Button,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

function MainComponent() {
  const bgColor = "blue.50";
  const textColor = "gray.800";
  const headingColor = "blue.700";

  return (
    <Box minH="100vh" bg={bgColor} py={8}>
      <Container maxW="4xl" bg="white" borderRadius="lg" boxShadow="xl" p={8}>
        <VStack spacing={8} align="stretch">
          <VStack>
            <Heading
              as="h1"
              size="2xl"
              textAlign="center"
              color={headingColor}
              fontFamily="'Noto Sans JP', sans-serif"
            >
              京都大学ウィンドサーフィン部
            </Heading>
            <Heading
              as="h1"
              size="2xl"
              textAlign="center"
              color={headingColor}
              fontFamily="'Noto Sans JP', sans-serif"
            >
              へようこそ
            </Heading>
          </VStack>

          <Image
            src="/photos/kaitosan.jpg" // 実際の画像URLに置き換えてください
            alt="京都大学ウィンドサーフィン部の活動風景"
            objectFit="cover"
            borderRadius="lg"
            boxShadow="md"
          />

          <Text
            fontSize="lg"
            color={textColor}
            fontFamily="'Noto Serif JP', serif"
          >
            京都大学ウィンドサーフィン部は、ウィンドサーフィンを通じて心身ともに成長することを目指す学生団体です。
            琵琶湖の美しい自然の中で、仲間とともに技術を磨き、挑戦し、楽しむ場を提供しています。
          </Text>

          <Heading
            as="h2"
            size="lg"
            color={headingColor}
            fontFamily="'Noto Sans JP', sans-serif"
          >
            ウィンドサーフィン部の特徴：
          </Heading>

          <UnorderedList
            spacing={2}
            pl={4}
            color={textColor}
            fontFamily="'Noto Serif JP', serif"
          >
            <ListItem>初心者から経験者まで、幅広いレベルの部員が活動</ListItem>
            <ListItem>琵琶湖での定期的な練習と合宿</ListItem>
            <ListItem>年間を通じた各種大会への参加</ListItem>
            <ListItem>体力向上とストレス解消の両立</ListItem>
            <ListItem>先輩後輩の垣根を越えた交流と絆づくり</ListItem>
          </UnorderedList>

          <Text
            fontSize="lg"
            color={textColor}
            fontFamily="'Noto Serif JP', serif"
          >
            ウィンドサーフィンは、風と水を相手にする自然スポーツです。
            技術の向上はもちろん、自然との一体感や達成感を味わえる素晴らしいスポーツです。
            京大生活をより充実したものにしたい方、新しいことにチャレンジしたい方、
            ぜひ私たちと一緒にウィンドサーフィンを楽しみませんか？
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}

export default MainComponent;
