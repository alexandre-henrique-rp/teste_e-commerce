"use client";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text,
  VStack,
  Badge,
  Icon,
} from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
import { PiTrademarkRegisteredLight } from "react-icons/pi";
import ImageProduct from "./image";

export default function Product() {
  return (
    <Box w="100%" mx="auto" px={[2, 4, 6, 8]} py={[4, 6, 8]}>
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        spacing="8px"
        separator={<FiChevronRight color="gray.500" />}
        fontSize="sm"
        mb={6}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Início</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/linha-orthopedic">
            Linha Orthopedic
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#" color={"black"}>
            Órtese Splint Bilateral
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      {/* Main Product Display */}
      <Grid templateColumns={["1fr", "1fr", "1fr", "1fr 1fr"]} gap={[4, 6, 8]}>
        {/* Product Images - Left Side */}
        <ImageProduct />

        {/* Product Info - Right Side */}
        <VStack w={'523px'} spacing={4} align="stretch">
          {/* Product Brand */}
          <Text color={"gray.600"}>
            Hidrolight Neo{" "}
            <Icon as={PiTrademarkRegisteredLight} fontSize={"sm"} />
          </Text>

          {/* Product Title */}
          <Heading
            as="h1"
            size="xl"
            bg={"#80276C"}
            color="white"
            p={2}
            borderRadius="md"
          >
            Órtese Splint Bilateral
          </Heading>

          {/* Product Codes */}
          <Text fontSize="sm" color={"gray.600"}>
            Código SKU OR83 Lado direito / Código SKU OR83 Lado esquerdo
          </Text>

          {/* Product Description */}
          <Box
            w={["100%", "100%", "100%", "480px"]}
            maxH={["none", "none", "none", "316px"]}
            overflowY={["visible", "visible", "visible", "auto"]}
          >
            <Text fontWeight="bold" mb={2}>
              Descrição
            </Text>
            <Text fontSize="sm">
              A Órtese Splint Bilateral Hidrolight é feita de neoprene Plush,
              com propriedades isolantes térmicas e um acabamento elegante em
              plush. Possui ampla capacidade de ajuste devido à aderência do
              tecido. Em repouso, a órtese já está pré-ajustada, com fechamento
              do polegar e uma membrana elástica que funciona como um bolso,
              facilitando a colocação pelo próprio paciente. As talas internas
              são facilmente ajustáveis para se adaptarem a mão desejada. São
              fornecidas duas talas removíveis, uma com curvatura ideal para
              sustentar o punho até a palma da mão, e a segunda reta na parte
              dorsal do punho, impedindo movimentos para cima e para baixo. O
              elástico aderente envolve a articulação, proporcionando compressão
              de acordo com a indicação médica e a necessidade do paciente.
            </Text>
          </Box>

          {/* Level and Recovery Info */}
          <Box>
            <Text fontWeight="bold">Nível 3</Text>
            <Text fontSize="sm">Recuperação e tratamento de lesões GRAVES</Text>
          </Box>

          {/* Available Colors */}
          <Flex align="center" flexWrap="wrap">
            <Text mr={2} minW={["100%", "auto"]}>
              Cores disponíveis:
            </Text>
            <Flex align="center">
              <Box w={4} h={4} borderRadius="full" bg="black" mr={1}></Box>
              <Text>Preto</Text>
            </Flex>
          </Flex>

          {/* Model */}
          <Flex flexWrap="wrap">
            <Text mr={2} minW={["100%", "auto"]}>
              Modelo:
            </Text>
            <Text color={"#4C4D4C"}>Bilateral</Text>
          </Flex>

          {/* Available Sizes */}
          <Flex align="center" flexWrap="wrap">
            <Text mr={2} minW={["100%", "auto"]}>
              Tamanhos disponíveis:
            </Text>
            <Flex mt={[1, 0]}>
              <Badge mx={1} px={2} bg="#EBEBEB">
                Único
              </Badge>
              <Badge mx={1} px={2} bg="#EBEBEB">
                Especial
              </Badge>
            </Flex>
          </Flex>

          {/* Size Guide and Measurement Table */}
          <Flex direction={["column", "row"]} gap={[2, 4]}>
            <Link color="#E57200">
              <Flex align="center">
                <Icon as={Image} src="/size.png" w={"20px"} mr={1} />
                <Text fontSize={["sm", "md"]}>
                  Descubra o seu tamanho ideal
                </Text>
              </Flex>
            </Link>
            <Link color={"#4C4D4C"}>
              <Flex align="center">
                <Icon as={Image} src="/fita.png" w={"20px"} mr={1} />
                <Text fontSize={["sm", "md"]}>Tabela de medidas</Text>
              </Flex>
            </Link>
          </Flex>

          {/* Find Stores Button */}
          <Button
            w={["100%", "178px"]}
            bg="#E57200"
            color="white"
            _hover={{ bg: "#E57200" }}
            mt={4}
            fontSize={["sm", "md"]}
          >
            Encontrar lojas online
          </Button>

          {/* Become a Seller Link */}
          <Text mt={2}>
            <Link href="#" color={"gray.600"}>
              Gostou desse produto? Seja um vendedor
            </Link>
          </Text>
        </VStack>
      </Grid>
    </Box>
  );
}
