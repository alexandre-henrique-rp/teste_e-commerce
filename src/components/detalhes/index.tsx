import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";

export default function Detalhes() {
  return (
    <Box w="100%">
      <Accordion
        allowMultiple
        w="100%"
        borderTop={"1px solid"}
        borderBottom={"1px solid"}
        borderColor={"gray.300"}
      >
        <AccordionItem>
          <h2>
            <AccordionButton py={8}>
              <Box as="span" flex="1" textAlign="left">
                Detalhes
              </Box>
              <AccordionIcon w={10} h={10} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex flexDir={"column"} gap={3}>
              <Text fontSize={"1rem"} fontWeight={700}>
                Nível 3- Recuperação e tratamento de lesões GRAVES
              </Text>
              <Flex gap={2}>
                <Text fontSize={"1rem"} fontWeight={400}>
                  Nome Comercial:
                </Text>
                <Text fontSize={"1rem"} fontWeight={400}>
                  Órtese Splint Bilateral
                </Text>
              </Flex>
              <Flex gap={2}>
                <Text fontSize={"1rem"} fontWeight={400}>
                  Linha:
                </Text>
                <Text fontSize={"1rem"} fontWeight={400}>
                  Orthopedic
                </Text>
              </Flex>
              <Flex gap={2}>
                <Text fontSize={"1rem"} fontWeight={400}>
                  Cod. Produto (referências/SKU):
                </Text>
                <Text fontSize={"1rem"} fontWeight={400}>
                  OR83
                </Text>
              </Flex>
              <Flex gap={2}>
                <Text fontSize={"1rem"} fontWeight={400}>
                  Família de Produtos:
                </Text>
                <Text fontSize={"1rem"} fontWeight={400}>
                  Hidrolight Neo
                </Text>
              </Flex>
              <Flex gap={2}>
                <Text fontSize={"1rem"} fontWeight={400}>
                  Modelos do produto(esquerda/direita–bilateral):
                </Text>
                <Text fontSize={"1rem"} fontWeight={400}>
                  Bilateral
                </Text>
              </Flex>
              <Flex gap={2}>
                <Text fontSize={"1rem"} fontWeight={400}>
                  Composição:
                </Text>
                <Text fontSize={"1rem"} fontWeight={400}>
                  74% borracha de cloropreno, 16% poliamida, 9%poliestireno e
                  1%PVC.
                </Text>
              </Flex>
              <Text fontSize={"1rem"} fontWeight={400}>
                PRODUTO TÉRMICO
              </Text>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={8}>
              <Box as="span" flex="1" textAlign="left">
              Especificações técnicas
              </Box>
              <AccordionIcon w={10} h={10} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}></AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={8}>
              <Box as="span" flex="1" textAlign="left">
              Indicações e Instrução de uso
              </Box>
              <AccordionIcon w={10} h={10} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}></AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={8}>
              <Box as="span" flex="1" textAlign="left">
              Garantia
              </Box>
              <AccordionIcon w={10} h={10} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}></AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
