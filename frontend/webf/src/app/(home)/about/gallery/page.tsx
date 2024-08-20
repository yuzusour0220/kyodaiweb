"use client"
import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Image, Heading, Container, AspectRatio, Text } from '@chakra-ui/react';
import axios from 'axios';

interface Gallery {
  id: number;
  photo: string;
}

const Gallery: React.FC = () => {
  const [galleryPhotos, setGalleryPhotos] = useState<Gallery[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/galleryphotos/`)
      .then((res) => {
        setGalleryPhotos(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setError("写真の取得中にエラーが発生しました。");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Container centerContent><Heading>読み込み中...</Heading></Container>;
  if (error) return <Container centerContent><Heading color="red.500">{error}</Heading></Container>;

  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" size="2xl" textAlign="center" mb={8}>
        ギャラリー
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2}} spacing={6}>
        {galleryPhotos.map((photo: Gallery) => (
          <Box
            key={photo.id}
            overflow="hidden"
            borderRadius="lg"
            boxShadow="md"
            transition="all 0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.05)',
              boxShadow: 'xl',
              zIndex: 1
            }}
          >
            <AspectRatio ratio={16 / 9}>
              <Image
                src={photo.photo}
                alt={"ギャラリー写真"}
                objectFit="cover"
              />
            </AspectRatio>
          </Box>
        ))}
      </SimpleGrid>
      {galleryPhotos.length === 0 && (
        <Text textAlign="center" fontSize="xl" mt={8}>
          写真がありません。
        </Text>
      )}
    </Container>
  );
};

export default Gallery;