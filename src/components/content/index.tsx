import { Box, Flex, Text } from "@chakra-ui/react";
import ListOrthopedic from "../List_orthopedic";

export default function Conteudo() {
  return (
    <Flex
      id="sobre"
      w={"100%"}
      py={{ base: 12, md: 14 }}
      ps={{ base: 1, md: 24 }}
      px={{ base: 5, md: 0 }}
    >
      <Flex
        flexDir={"column"}
        justifyContent={"space-between"}
        h={{ base: "auto", md: "17.5rem" }}
        w={"100%"}
      >
        <Box mb={{ base: 2, md: 0 }}>
          <Flex
            w={"100%"}
            gap={{ base: 1, md: 2 }}
            flexDir={{ base: "column", md: "row" }}
          >
            <Text fontSize={"2rem"}>Conheça as</Text>
            <Text fontSize={"2rem"} fontWeight={700} color={"#80276C"}>
              famílias exclusivas
            </Text>
          </Flex>
          <Text fontSize={"2rem"}>da linha Orthopedic</Text>
        </Box>
        <ListOrthopedic />
        <Box w={{ base: "100%", md: "32rem" }} p={{ base: 4, md: 0 }}>
          <Text fontSize={"1rem"}>
            Família voltada para extrair os benefícios do Neoprene. Propriedades
            térmicas, compressivas e elásticas: são essas três propriedades que
            fazem do Neoprene uma ferramenta eficaz no tratamento e prevenção de
            lesões no tratamento ortopédico.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
