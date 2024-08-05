import Header from "@/components/Header";
import { Box } from "@chakra-ui/react";
import React from "react";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Box>{children}</Box>
    </>
  );
};

export default MainLayout;
