import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Lang from "../lang";
import { LuCopyright } from "react-icons/lu";

export default function Footer() {
  return (
    <Box w={"100%"} bg={"#4C4D4C"} fontFamily={"roboto, sans-serif"}>
      <Flex flexDir={{ base: "column", lg: "row" }} px={{ base: 5, lg: 24 }} py={4} pt={10} w={"100%"} justifyContent={"space-between"}>
        <Heading as="h1" fontSize={"2rem"} fontWeight={500} color={"white"}>
          LOGO
        </Heading>
        <Box display={"flex"} flexDir={{ base: "column", lg: "row" }} gap={12}>
          <Flex flexDir={"column"}>
            <Text color={"white"} fontSize={"1rem"} fontWeight={600} mb={2}>
              Institucional
            </Text>
            <Text color={"white"} fontSize={"1rem"} fontWeight={400}>
              Sobre nós
            </Text>
            <Text color={"white"} fontSize={"1rem"} fontWeight={400}>
              Trabalhe conosco
            </Text>
          </Flex>

          <Flex flexDir={"column"}>
            <Text color={"white"} fontSize={"1rem"} fontWeight={600} mb={2}>
              Download de Catálogos
            </Text>
            <Text color={"white"} fontSize={"1rem"} fontWeight={400}>
              Catálogo geral
            </Text>
            <Text color={"white"} fontSize={"1rem"} fontWeight={400}>
              Linha Orthopedic
            </Text>
            <Text color={"white"} fontSize={"1rem"} fontWeight={400}>
              Linha Sports
            </Text>
            <Text color={"white"} fontSize={"1rem"} fontWeight={400}>
              Linha Special Cares
            </Text>
            <Text color={"white"} fontSize={"1rem"} fontWeight={400}>
              Catálogo Foot Care
            </Text>
            <Text color={"white"} fontSize={"1rem"} fontWeight={400}>
              Catálogo Acessibilidade
            </Text>
          </Flex>

          <Flex flexDir={"column"}>
            <Text color={"white"} fontSize={"1rem"} fontWeight={600} mb={2}>
              Linhas de produtos
            </Text>
            <Text color={"white"} fontSize={"1rem"} fontWeight={400}>
              Orthopedic
            </Text>
            <Text color={"white"} fontSize={"1rem"} fontWeight={400}>
              Sports
            </Text>
            <Text color={"white"} fontSize={"1rem"} fontWeight={400}>
              Special Cares
            </Text>
          </Flex>

          <Flex flexDir={"column"} >
            <Text color={"white"} fontSize={"1rem"} fontWeight={600} mb={2}>
              Entre em contato e tire suas dúvidas
            </Text>
            <Flex gap={2} alignItems={"center"}>
              <Image src={"/telephone.png"} w={"32px"} h={"32px"} />
              <Text color={"white"} fontSize={"16px"} fontWeight={400}>
                +55 48 3333 3333
              </Text>
            </Flex>
            <Flex gap={2} alignItems={"center"}>
              <Image src={"/email.png"} w={"32px"} h={"32px"} />
              <Box>
                <Text color={"white"} fontSize={"16px"} fontWeight={400}>
                  sac@loremipsum.com.br ou
                </Text>
                <Text color={"white"} fontSize={"16px"} fontWeight={400}>
                  rp@loremipsum.com.br
                </Text>
              </Box>
            </Flex>

            <Box w={{ base: "100%", lg: "13rem" }} mt={2}>
              <Text color={"white"} fontSize={"16px"} fontWeight={600} mb={2}>
                Nos acompanhe também nas redes sociais
              </Text>
              <Flex gap={2} alignItems={"center"} justifyContent={"center"}>
                <Image src={"/insta.png"} w={"32px"} h={"32px"} />
                <Image src={"/youtube.png"} w={"32px"} h={"32px"} />
                <Image src={"/facebook.png"} w={"32px"} h={"32px"} />
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Divider />

      <Flex px={{ base: 5, lg: 24 }} py={6} flexDir={{ base: "column", lg: "row" }} justifyContent={"space-between"}>
        <Flex alignItems={"center"}>
          <Text color={"white"} fontSize={"1rem"} fontWeight={400}>
            Selecionar País
          </Text>
          <Lang color={"white"} size={"md"} />
        </Flex>

        <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
          <Flex alignItems={"center"} gap={2}>
            <LuCopyright color={"white"} />
            <Text color={"white"} fontSize={"0.8rem"} fontWeight={400}>
              2023 Lorem Ipsum. Todos os direitos reservados.
            </Text>
          </Flex>
          <Text color={"white"} fontSize={"0.8rem"} fontWeight={400}>
            Av dos Butiá, 150 - Florianopolis - SC - Brasil
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
