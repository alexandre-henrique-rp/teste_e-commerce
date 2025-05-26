import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
} from "@chakra-ui/react";

export default function FilterCatalog() {
  return (
    <>
      <Accordion w={"100%"} allowMultiple>
        <AccordionItem w={"100%"}>
          <h2>
            <AccordionButton
              w={"100%"}
              py={6}
              border={"1px solid"}
              borderColor={"gray.300"}
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontSize={"1rem"}
                color={"#121212"}
              >
                Lançamentos
              </Box>
            </AccordionButton>
          </h2>
        </AccordionItem>
        <AccordionItem w={"100%"}>
          <h2>
            <AccordionButton
              w={"100%"}
              py={6}
              border={"1px solid"}
              borderColor={"gray.300"}
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontSize={"1rem"}
                color={"#121212"}
              >
                Famílias/Tecnologias
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel px={0} gap={2} display={"flex"} flexDir={"column"}>
            <Button
              w={"100%"}
              py={6}
              border={"1px solid"}
              borderColor={"gray.300"}
              bg={"white"}
            >
              teste 1
            </Button>
            <Button
              w={"100%"}
              py={6}
              border={"1px solid"}
              borderColor={"gray.300"}
              bg={"white"}
            >
              teste 2
            </Button>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem w={"100%"}>
          <h2>
            <AccordionButton
              w={"100%"}
              py={6}
              border={"1px solid"}
              borderColor={"gray.300"}
              borderRadius={"0 0 15px 15px"}
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontSize={"1rem"}
                color={"#121212"}
              >
                Produtos
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel px={0} gap={2} display={"flex"} flexDir={"column"}>
            <Button
              w={"100%"}
              py={6}
              border={"1px solid"}
              borderColor={"gray.300"}
              bg={"white"}
            >
              teste 1
            </Button>
            <Button
              w={"100%"}
              py={6}
              border={"1px solid"}
              borderColor={"gray.300"}
              bg={"white"}
            >
              teste 2
            </Button>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
