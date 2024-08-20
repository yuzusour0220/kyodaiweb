"use client";

import React from 'react'
import { Box, Container, Heading, SimpleGrid, Text, Image, VStack, Link } from '@chakra-ui/react'
import { motion, MotionProps } from 'framer-motion'

interface Sponsor {
  name: string;
  description: string;
  website: string;
}

const sponsors: Sponsor[] = [
  {
    name: "47 マーケティング YON-NANA",
    description: "現代のビジネスのためのデジタルマーケティングソリューション",
    website: "https://47marketing.jp/"
  },
  // ここに他のスポンサーを追加
]

const MotionBox = motion<MotionProps & React.ComponentProps<typeof Box>>(Box)

interface SponsorCardProps extends Sponsor {}

const SponsorCard: React.FC<SponsorCardProps> = ({ name, description, website }) => (
  <MotionBox
    borderWidth="1px"
    borderRadius="lg"
    p={6}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <VStack spacing={4} align="stretch">
      <Image src="/photos/sponsorlogo2.jpg" alt={name} />
      <Heading size="md">{name}</Heading>
      <Text>{description}</Text>
      <Link href={website} isExternal color="blue.500">
        ウェブサイトはこちら
      </Link>
    </VStack>
  </MotionBox>
)

const SponsorsPage: React.FC = () => {
  return (
    <Box bg="gray.50" minH="100vh">
      <Container maxW="container.xl" py={16}>
        <VStack spacing={12} align="stretch">
          <Box textAlign="center">
            <Heading as="h1" size="2xl" mb={4}>
              スポンサー
            </Heading>
            
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {sponsors.map((sponsor, index) => (
              <SponsorCard key={index} {...sponsor} />
            ))}
          </SimpleGrid>

          <Box textAlign="center" mt={12}>
            <Text fontSize="lg">
              スポンサーに興味がある企業様は{' '}
              <Link href="mailto:sponsor@kuwindsurfing.com" color="blue.500">
                sponsor@kuwindsurfing.com
              </Link>
              {' '}までご連絡ください。
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default SponsorsPage