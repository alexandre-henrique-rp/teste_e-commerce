import { Flex } from "@chakra-ui/react";
import Header from "../components/header";
import Hero from "../components/hero";
import Conteudo from "../components/content";


export default async function HomePage() {
  return (
    <Flex justifyContent={"center"} overflowY={"auto"} maxH={"100vh"}>
      <Flex
        w={{ base: "100%", md: "86rem" }}
        direction="column"
        h={"100%"}
      >
        <Header />
        <Hero />
        <Conteudo />
      </Flex>
    </Flex>
  );
}
