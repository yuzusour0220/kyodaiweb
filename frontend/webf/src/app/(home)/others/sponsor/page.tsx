"use client";

import React, { useState, useEffect } from 'react'
import { Box, Container, Heading, SimpleGrid, Text, Image, VStack, Link, Center } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

interface Sponsor {
  id: number;
  name: string;
  description: string;
  url: string;
  photo: string;
}

interface SponsorCardProps extends Sponsor {}

const SponsorCard: React.FC<SponsorCardProps> = ({ name, description, url, photo }) => (
  <MotionBox
    borderWidth="1px"
    borderRadius="lg"
    p={6}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <VStack spacing={4} align="stretch" marginLeft={1} marginRight={1}>
        <Center>
      <Image src={photo} alt={name} w="90%" />
      </Center>
      <Heading size="md">{name}</Heading>
      <Text>{description}</Text>
      <Link href={url} isExternal color="blue.500">
        ウェブサイトはこちら
      </Link>
    </VStack>
  </MotionBox>
)

const SponsorsPage: React.FC = () => {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sponsor/`);
        if (!response.ok) {
          throw new Error('Failed to fetch sponsors');
        }
        const data = await response.json();
        setSponsors(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load sponsors. Please try again later.');
        setLoading(false);
      }
    };

    fetchSponsors();
  }, []);

  if (loading) {
    return <Box textAlign="center" py={16}>Loading...</Box>;
  }

  if (error) {
    return <Box textAlign="center" py={16} color="red.500">{error}</Box>;
  }

  return (
    <Box minH="100vh">
      <Container maxW="container.xl" py={16}>
        <VStack spacing={12} align="stretch">
          <Box textAlign="center">
            <Heading as="h1" size="2xl" mb={4}>
              スポンサー
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {sponsors.map((sponsor) => (
              <SponsorCard key={sponsor.id} {...sponsor} />
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