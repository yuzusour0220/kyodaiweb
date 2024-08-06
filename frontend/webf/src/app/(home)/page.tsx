"use client";

import { Box, Heading, Image, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      aria-label="previous slide"
      icon={<ChevronLeftIcon />}
      onClick={onClick}
      position="absolute"
      left="8px"
      top="50%"
      transform="translateY(-50%)"
      zIndex={2}
    />
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      aria-label="next slide"
      icon={<ChevronRightIcon />}
      onClick={onClick}
      position="absolute"
      right="8px"
      top="50%"
      transform="translateY(-50%)"
      zIndex={2}
    />
  );
};

const Page = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplaySpeed: 3000, };

  const images = [
    "photos/kaitosan.jpg",
    "photos/hokkou.jpg",
  ];

  return (
    <Box p={4}>
      <Heading mb={4}>Home</Heading>
      
      <Box mx="auto" position="relative">
        <Slider {...settings}>
          {images.map((src, index) => (
            <Box key={index} w="100%">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                objectFit="cover"
                w="100%"
                h="100%"
              />
            </Box>
          ))}
        </Slider>
      </Box>
      <Text>
        はじめてバージョン管理システムを利用する人、初学の人から、すでに開発に使っている人までこれまでのバージョン管理に比べ圧倒的に便利だ。という反面、「バージョン管理の利点と使い方はなんとなくわかる。が、分散バージョン管理はよくわからない」という声があります。私自身も
        git の利用を開始した当初は、「Index? HEAD? なにそれ?
        」状態でした。流行のオープンソースの場合、インターネットにたくさんの情報があり、有用な日本語訳も提供されています。
        でも、バージョン管理という新しい概念を学ぶときは初めての用語が多く、そもそもどのような検索キーワードで検索すればよいのか、公式マニュアルも専門用語の羅列でなんかよくわからないという人も多いのではないでしょうか。分散バージョン管理も同じように新しい用語や概念が存在しており、それが「なんとなくわかっているけど、まだよくわからない」に繋がっていると思います。このチュートリアルで分散バージョン管理のモヤモヤを解消できるように解説したいと思います。
        git の基礎勉強ではつまずきやすい分散バージョン管理の考え方と git
        の基本的な使い方を解説します。考え方さえ理解すればあとは実践あるのみです。とてもパワフルな分散バージョン管理「git」の世界にようこそ。
      </Text>
    </Box>
  );
};

export default Page;
