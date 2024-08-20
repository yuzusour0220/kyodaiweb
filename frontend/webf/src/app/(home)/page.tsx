"use client";

import {
  Box,
  Heading,
  Image,
  IconButton,
  Text,
  Center,
  VStack,
  keyframes,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import axios from "axios";
import HomeTitle from "@/components/Hometitle";
import InstagramFeed from "@/components/InstagramFed";
import MainComponent from "@/components/InstagramFed";

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
const waveAnimation = keyframes`
  0% { transform: translateX(0) translateZ(0) scaleY(1); }
  50% { transform: translateX(-25%) translateZ(0) scaleY(0.55); }
  100% { transform: translateX(-50%) translateZ(0) scaleY(1); }
`;
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
    autoplaySpeed: 3000,
  };
  const headingSize = useBreakpointValue({ base: "3xl", md: "4xl", lg: "5xl" });
  const textSize = useBreakpointValue({ base: "3xl", md: "4xl", lg: "5xl" });
  
  const [photos, setPhotos] = useState<
    {
      name: string;
      id: number;
      photo: string;
      sail_number: string;
      introduction: string;
    }[]
  >([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/homephotos/")
      .then((res) => {
        setPhotos(res.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <>
      {/* <HomeTitle /> */}
      <Box  w="100%">
        

        <Box mx="auto" position="relative">
          <Slider {...settings}>
            {photos.map((src, index) => (
              <Box key={index} w="100%">
                <Image
                  src={src.photo}
                  alt={`Slide ${index + 1}`}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
              </Box>
            ))}
          </Slider>
        </Box>
        
      </Box>
      
    </>
  );
};

export default Page;
