"use client";
import { Box, Container, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Card from "../card";
import { useRef } from "react";

const MoreProductsData = [
    {
        id: 1,
        alt: "Órtese Soft Curta com Polegar",
        src: "/product/1.png",
        cod: "OR1065 / OR1065",
        prd: false,
    },
    {
        id: 2,
        alt: "Órtese Soft Curta sem Polegar",
        src: "/product/2.png",
        cod: "OR1066",
        prd: true,
    },
    {
        id: 3,
        alt: "Órtese de Polegar LEAN®",
        src: "/product/5.jpg",
        cod: "OR1012",
        prd: false,
    },
    {
        id: 4,
        alt: "Órtese Safe Air",
        src: "/product/4.jpg",
        cod: "OR1051",
        prd: true,
    },
    {
        id: 5,
        alt: "Órtese Soft Curta com Polegar",
        src: "/product/1.png",
        cod: "OR1067",
        prd: false,
    },
]

export default function MoreProducts() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <Container maxW="container.xl" my={16}>
            <Flex justifyContent="space-between" alignItems="center" mb={6}>
                <Box>
                    <Heading as="h2" color="gray.600" fontSize="2xl" fontWeight="medium">
                        Conheça também{" "}
                        <Text as="span" display="block">
                            nossos outros produtos
                        </Text>
                    </Heading>
                </Box>
                <Flex gap={2}>
                    <IconButton
                        aria-label="Anterior"
                        icon={<FiChevronLeft />}
                        onClick={scrollLeft}
                        size="lg"
                        variant="outline"
                        borderRadius="full"
                        borderColor="gray.300"
                    />
                    <IconButton
                        aria-label="Próximo"
                        icon={<FiChevronRight />}
                        onClick={scrollRight}
                        size="lg"
                        variant="outline"
                        borderRadius="full"
                        borderColor="gray.300"
                    />
                </Flex>
            </Flex>

            <Flex
                ref={scrollContainerRef}
                overflowX="auto"
                gap={3}
                pb={4}
                css={{
                    "&::-webkit-scrollbar": {
                        height: "8px",
                    },
                    "&::-webkit-scrollbar-track": {
                        background: "#f1f1f1",
                        borderRadius: "10px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        background: "#888",
                        borderRadius: "10px",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                        background: "#555",
                    },
                    scrollbarWidth: "thin",
                    scrollbarColor: "#888 #f1f1f1",
                }}
            >
                {MoreProductsData.map((produto) => (
                    <Box key={produto.id} minW="17rem" maxW="17rem">
                        <Card data={produto} />
                    </Box>
                ))}
            </Flex>
        </Container>
    );
}