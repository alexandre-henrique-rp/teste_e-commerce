import { Box, Divider, Flex } from "@chakra-ui/react";
import Header from "../components/header";
import Hero from "../components/hero";
import Conteudo from "../components/content";
import Footer from "../components/footer";
import Catalog from "../components/Catalog";

export default async function HomePage() {
  return (
    <Box overflowY={"auto"} maxH={"100vh"}>
      <Flex justifyContent={"center"}>
        <Flex w={{ base: "100%", md: "86rem" }} direction="column" h={"100%"}>
          <Header />
          <Hero />
          <Conteudo />
          <Divider />
          <Catalog />
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
}
