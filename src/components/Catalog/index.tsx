import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  IconButton,
  Image,
} from "@chakra-ui/react";
import Card from "../card";
import { FaSearch } from "react-icons/fa";

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
    <>
      <Flex gap={4} justifyContent={"space-between"} mb={10}>
        <Box display={{ base: "none", lg: "flex" }} w={"306px"}>
          <Accordion w={"100%"} allowMultiple>
            <AccordionItem w={"100%"}>
              <h2>
                <AccordionButton w={"100%"}>
                  <Box as="span" flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <Box w={"55rem"}>
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
          <Flex gap={8} flexWrap={"wrap"}>
            {ImgData.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
