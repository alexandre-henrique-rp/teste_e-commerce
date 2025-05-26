import { Divider } from "@chakra-ui/react";
import Catalog from "../../components/Catalog";
import Conteudo from "../../components/content";
import Hero from "../../components/hero";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <Conteudo />
      <Divider my={10} border={"1px solid"} borderColor={"gray.300"}/>
      <Catalog />
      
    </>
  );
}
