import { Box, Flex, Text } from "@chakra-ui/react";
import { PiTrademarkRegisteredLight } from "react-icons/pi";

export default function Conteudo() {
  return (
    <Flex w={"100%"} py={{base: 12, md: 14}} ps={{base: 1, md: 24}}>
      <Flex
        flexDir={"column"}
        justifyContent={"space-between"}
        h={{base: "auto", md: "17.5rem"}}
        w={"100%"}
      >
        <Box mb={{base: 2, md: 0}}>
          <Flex w={"100%"} gap={{base: 1, md: 2}} flexDir={{base: "column", md: "row"}}>
            <Text fontSize={"2rem"}>Conheça as</Text>
            <Text fontSize={"2rem"} fontWeight={700} color={"#80276C"}>
              famílias exclusivas
            </Text>
          </Flex>
          <Text fontSize={"2rem"}>da linha Orthopedic</Text>
        </Box>

        <Flex
          w={{ base: "100%", md: "51rem" }}
          justifyContent={"space-between"}
          flexWrap={{ base: "wrap", md: "nowrap" }}
        >
          <Flex p={{base: 1, md: 2}} bg={"#80276C"} borderRadius={8} fontSize={{base: "0.8rem", md: "0.9rem"}}>
            <Text color={"white"}>Hidrolight Neo</Text>
            <PiTrademarkRegisteredLight color={"white"} />
          </Flex>
          <Flex p={{base: 1, md: 2}} borderRadius={8} fontSize={"0.9rem"}>
            <Text color={"#A75897"}>Comfort Air</Text>
            <PiTrademarkRegisteredLight color={"#A75897"} />
          </Flex>
          <Flex p={{base: 1, md: 2}} borderRadius={8} fontSize={"0.9rem"}>
            <Text color={"#A75897"}>Ortho Recovery</Text>
            <PiTrademarkRegisteredLight color={"#A75897"} />
          </Flex>
          <Flex p={{base: 1, md: 2}} borderRadius={8} fontSize={"0.9rem"}>
            <Text color={"#A75897"}>Air Flex</Text>
            <PiTrademarkRegisteredLight color={"#A75897"} />
          </Flex>
          <Flex p={{base: 1, md: 2}} borderRadius={8} fontSize={"0.9rem"}>
            <Text color={"#A75897"}>Softline</Text>
            <PiTrademarkRegisteredLight color={"#A75897"} />
          </Flex>
          <Flex p={{base: 1, md: 2}} borderRadius={8} fontSize={"0.9rem"}>
            <Text color={"#A75897"}>Foot Care</Text>
            <PiTrademarkRegisteredLight color={"#A75897"} />
          </Flex>
          <Flex p={{base: 1, md: 2}} borderRadius={8} fontSize={"0.9rem"}>
            <Text color={"#A75897"}>Lean</Text>
            <PiTrademarkRegisteredLight color={"#A75897"} />
          </Flex>
        </Flex>
        <Box w={{base: "100%", md: "32rem"}} p={{base: 4, md: 0}}>
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
