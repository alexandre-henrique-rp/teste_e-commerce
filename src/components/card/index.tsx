import { Box, Code, Flex, Text } from "@chakra-ui/react";

type dataProps = {
  id: number;
  src: string;
  alt: string;
  cod: string;
  prd: boolean;
};

interface CardProps {
  data: dataProps;
}

export default function Card({ data }: CardProps) {
  return (
    <>
      <Flex
        h={"25rem"}
        w={"17rem"}
        flexDir={"column"}
        borderRadius={8}
        boxShadow="lg"
        border={"1px solid"}
        borderColor={"gray.300"}
      >
        <Box
          h={"22rem"}
          w={"100%"}
          bgImage={data.src}
          bgSize={"cover"}
          borderRadius={8}
          bgRepeat="no-repeat"
          bgPosition="center"
          p={2}
        >
          {data.prd && (
            <Flex p={2} w={"max-content"} bg="#9A1A8099" borderRadius={8}>
              <Text color="white">Lançamento</Text>
            </Flex>
          )}
        </Box>
        <Box w={"100%"} p={2} pt={4}>
          <Text fontSize={"1rem"} fontWeight={600}>
            {data.alt}
          </Text>
          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"0.8rem"} fontWeight={600}>
              Cód. Produto
            </Text>
            <Code fontSize={"0.8rem"} children={data.cod} />
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
