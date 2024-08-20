import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  OrderedList,
  ListItem,
  Link,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

const OBregister: React.FC = () => {
const bgColor = 'blue.50';
const cardBgColor = 'white';
const textColor = 'gray.800';
const headingColor = 'blue.700';
const linkColor = 'blue.600';

  return (
    <Box minH="100vh" bg={bgColor} py={[4, 8]}>
      <Container maxW="4xl" bg={cardBgColor} borderRadius="lg" boxShadow="xl" p={[6, 8]}>
        <VStack spacing={6} align="stretch">
          <Heading as="h1" size="xl" textAlign="center" color={headingColor}>
            シクミネットへの登録のお願い
          </Heading>

          <Heading as="h2" size="lg" color={headingColor}>
            OB・OGさん方へ
          </Heading>

          <Text color={textColor}>
            お疲れ様です。いつも温かいご声援・ご支援ありがとうございます。今回はしくみネット登録についてのご案内です。既に登録してくださっている方は飛ばしていただいて大丈夫です。
          </Text>

          <Text color={textColor}>
            現在、京都大学ウインドサーフィン部はOBOG管理プラットフォームとして、しくみねっとを利用しております。これまでメール等で行っていた今後OB・OGさん方への連絡をしくみネット上のみに統一させていただいております。そのためしくみネットへの登録をお願いしたいです。また、しくみネット上からご支援の方もしていただけます。是非よろしくお願いします。
          </Text>

          <Text color={textColor}>
            OB・OGさん方には、年1,000円のランニングコストを負担していただき、3つの会員種別から1つを選択して、参加していただいております。艇庫代や道具代の値上げが進み、金銭面での負担が大きくなっていることが現状です。プラットフォームの導入により、安定的にOBOG会費が集まることが予想されます。ご負担をおかけしますが、結果で恩返しできるように頑張りますので、ご協力よろしくお願いします。
          </Text>

          <Box>
            <Heading as="h3" size="md" mb={2} color={headingColor}>
              登録手順:
            </Heading>
            <OrderedList spacing={1} pl={4} color={textColor}>
              <ListItem>マイページへのログイン</ListItem>
              <ListItem>パスワード変更</ListItem>
              <ListItem>会員情報の登録</ListItem>
              <ListItem>クレカ情報の登録(任意)</ListItem>
            </OrderedList>
          </Box>

          <Box bg="gray.100" p={4} borderRadius="md">
            <Text fontWeight="semibold" mb={2}>ログイン情報:</Text>
            <Text>URL: <Link href="https://kyodaiwindsurf.shikuminet.jp/login/" color={linkColor} isExternal>https://kyodaiwindsurf.shikuminet.jp/login/</Link></Text>
            <Text>ID: 皆様のメールアドレス</Text>
            <Text>PW: Kyodaiwind12　（※1文字目は大文字）</Text>
          </Box>

          <Text color={textColor}>
            メールアドレスをこちらが把握できていない方はマイページが作成できていないためログインができません。そのような場合は下記のメールアドレスか、各種SNSへのDMをよろしくお願いします。その際は、氏名・何期・ご自身のメールアドレスの記載をお願いします。
          </Text>

          <Box textAlign="center">
            <Text fontWeight="semibold">京都大学ウインドサーフィン部メールアドレス</Text>
            <Link href="mailto:kyotouniversity.windsurfing@gmail.com" color={linkColor}>
              kyotouniversity.windsurfing@gmail.com
            </Link>
          </Box>

          <Box textAlign="center">
            <Button
              as="a"
              href="https://kyodaiwindsurf.shikuminet.jp/login/"
              colorScheme="blue"
              size="lg"
              borderRadius="full"
              _hover={{ bg: 'blue.600' }}
            >
              シクミネットにログイン
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default OBregister;