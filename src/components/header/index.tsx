"use client";
import { Button, Flex, Heading, IconButton, Link, Text } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Lang from "../lang";
import HanbugerMenu from "./hanbuger";


export default function Header() {
  const isHomePage = () => {
    return window.location.pathname === "/" || window.location.pathname === "";
  };

  const scrollToFooter = () => {
    if (isHomePage()) {
      const footer = document.getElementById("contato");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
      }
      } else {
        window.location.href = "/#contato";
    }
  };
  
  const scrollToSobre = () => {
    if (isHomePage()) {
      const sobre = document.getElementById("sobre");
      if (sobre) {
        sobre.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#sobre";
    }
  };
  
  const scrollToCatalogo = () => {
    if (isHomePage()) {
      const catalogo = document.getElementById("catalogo");
      if (catalogo) {
        catalogo.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#catalogo";
    }
  };

  const Dados = [
    {
      valor: "/hidrolight-neo",
      texto: "Produtos",
    },
    {
      valor: "#",
      texto: "Sobre nós",
      action: scrollToSobre,
    },
    {
      valor: "#",
      texto: "Contato",
      action: scrollToFooter,
    },
    {
      valor: "#",
      texto: "Catalogo",
      action: scrollToCatalogo,
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
        <Link href="/" _hover={{ textDecoration: "none" }}>
          <Heading as="h1" fontSize={"2rem"} fontWeight={500} color={"#4C4D4C"} cursor="pointer">
            LOGO
          </Heading>
        </Link>

        <Flex
          display={{ base: "none", lg: "flex" }}
          gap={6}
          alignItems={"center"}
        >
          {Dados.map((item, index) => {
            if (item.action) {
              return (
                <Text
                  key={index}
                  onClick={item.action}
                  fontSize={"1rem"}
                  fontWeight={500}
                  color={"#4C4D4C"}
                  cursor="pointer"
                  _hover={{ textDecoration: "underline" }}
                >
                  {item.texto}
                </Text>
              );
            }

            // links normais
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
