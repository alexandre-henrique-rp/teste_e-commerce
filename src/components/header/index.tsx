import { FaSearch } from "react-icons/fa";
import HanbugerMenu from "./hanbuger";
import { Button, Flex, Heading, IconButton, Link } from "@chakra-ui/react";
import Lang from "./lang";

export default function Header() {
  const Dados = [
    {
      valor: "/produtos",
      texto: "Produtos",
    },
    {
      valor: "/sobre",
      texto: "Sobre nós",
    },
    {
      valor: "/contato",
      texto: "Contato",
    },
    {
      valor: "/catalogo",
      texto: "Catalogo",
    },
  ];

  return (
    <Flex
      w={"100%"}
      py={4}
      px={{ base: 1, md: 24 }}
      justifyContent={"center"}
      gap={{ base: 2, md: 0 }}
    >
      <Flex w={"100%"} justifyContent={"space-between"} alignItems={"center"}>
        <Heading as="h1" fontSize={"2rem"} fontWeight={500} color={"#4C4D4C"}>
          LOGO
        </Heading>

        <Flex
          display={{ base: "none", lg: "flex" }}
          gap={6}
          alignItems={"center"}
        >
          {Dados.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.valor}
                fontSize={"1rem"}
                fontWeight={500}
                color={"#4C4D4C"}
              >
                {item.texto}
              </Link>
            );
          })}
          <IconButton
            size={"xs"}
            color={"#4C4D4C"}
            bg={"gray.100"}
            borderRadius={20}
            aria-label="Search database"
          >
            <FaSearch />
          </IconButton>
        </Flex>

        <Flex display={{ base: "flex", lg: "none" }}>
          <HanbugerMenu Dados={Dados} />
        </Flex>

        <Flex gap={3}>
          <Button bg={"#E57200"} color={"white"} borderRadius={8}>
            Fale conosco
          </Button>
          <Lang display={{ base: "none", lg: "flex" }} />
        </Flex>
      </Flex>
    </Flex>
  );
}
