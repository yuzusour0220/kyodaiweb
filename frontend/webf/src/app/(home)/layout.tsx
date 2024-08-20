import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Box, VStack } from "@chakra-ui/react";
import React from "react";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      
        <Header />
        <Box as="main">{children}</Box>
        <Footer />
    </>
  );
};

export default MainLayout;
