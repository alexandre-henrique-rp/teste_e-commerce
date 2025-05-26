import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import Card from "../card";
import { FaSearch } from "react-icons/fa";
import FilterCatalog from "../filter_cartalog";

const ImgData = [
  {
    id: 1,
    src: "/product/1.png",
    alt: "Órtese Soft Curta com Polegar",
    cod: "OR1065",
    prd: false,
  },
  {
    id: 2,
    src: "/product/2.png",
    alt: "Órtese Soft Curta sem Polegar",
    cod: "OR1066",
    prd: true,
  },
  {
    id: 3,
    src: "/product/3.png",
    alt: "Órtese Soft Curta com Polegar",
    cod: "OR1067",
    prd: false,
  },
  {
    id: 4,
    src: "/product/4.jpg",
    alt: "Órtese Safe Air",
    cod: "OR1068",
    prd: true,
  },
  {
    id: 5,
    src: "/product/1.png",
    alt: "Órtese Soft Curta com Polegar",
    cod: "OR1069",
    prd: false,
  },
  {
    id: 6,
    src: "/product/2.png",
    alt: "Órtese Soft Curta sem Polegar",
    cod: "OR1070",
    prd: true,
  },
  {
    id: 7,
    src: "/product/4.jpg",
    alt: "Órtese Safe Air",
    cod: "OR1071",
    prd: true,
  },
  {
    id: 8,
    src: "/product/1.png",
    alt: "Órtese Soft Curta com Polegar",
    cod: "OR1072",
    prd: false,
  },
  {
    id: 9,
    src: "/product/2.png",
    alt: "Órtese Soft Curta sem Polegar",
    cod: "OR1073",
    prd: true,
  },
];
//TODO: finalizar filtro de produtos
export default function Catalog() {
  return (
    <Box id="catalogo">
      <Flex
        gap={4}
        justifyContent={"space-between"}
        mb={16}
        flexDir={{ base: "column", xl: "row" }}
      >
        <Box w={{ base: "100%", xl: "306px" }}>
          <Box
            p={4}
            py={6}
            border={"1px solid"}
            borderColor={"gray.300"}
            style={{ borderRadius: "15px 15px 0 0" }}
          >
            <Text fontSize={"1rem"} color={"#121212"}>
              Filtros
            </Text>
          </Box>
          <FilterCatalog />
        </Box>

        <Box w={{ base: "100%", xl: "55rem" }} px={{ base: 16, xl: 0 }}>
          <Flex alignItems={"center"} justifyContent={"space-between"} py={3}>
            <Flex gap={2} alignItems={"center"}>
              <Box
                p={1}
                bg={"gray.100"}
                borderRadius={8}
                fontSize={"14px"}
                fontWeight={700}
              >
                68 produtos
              </Box>
              <IconButton
                size={"sm"}
                color={"#4C4D4C"}
                bg={"gray.100"}
                borderRadius={20}
                aria-label="Search database"
              >
                <FaSearch />
              </IconButton>
            </Flex>

            <Button
              rightIcon={
                <Image
                  src={"/download.png"}
                  alt=""
                  color={"white"}
                  w={"20px"}
                />
              }
              bg={"#E57200"}
              color={"white"}
              borderRadius={8}
              p={1}
              px={2}
            >
              Baixar Catálogo
            </Button>
          </Flex>
          <Flex gap={6} flexWrap={"wrap"}>
            {ImgData.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
