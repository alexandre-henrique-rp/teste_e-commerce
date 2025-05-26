"use client";
import {
  Box,
  Flex,
  Text,
  Image,
  Container,
  useBreakpointValue,
} from "@chakra-ui/react";
import { PiTrademarkRegisteredLight } from "react-icons/pi";

export default function ImgDetalhe() {
  // Usa breakpoint para controlar a visibilidade e posicionamento
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  
  return (
    <Box 
      w={{ base: "100%", lg: "1192px" }} 
      h={{ base: "auto", lg: "800px" }} 
      position="relative" 
      // mb={10}
      mx="auto"
    >
      {/* Conteúdo */}
      <Container maxW="container.xl" position="relative" py={10} h={{ base: "auto", lg: "100%" }}>
        {/* Fabricação própria e nacional */}
        <Box maxW="400px">
          <Flex alignItems="baseline" flexWrap="wrap">
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="medium" color="gray.700">
              Fabricação{" "}
            </Text>
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="#E57200">
              própria
            </Text>
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="medium" color="gray.700" ml={2}>
              e nacional.
            </Text>
          </Flex>

          <Flex>
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="#E57200">
              Qualidade
            </Text>
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="medium" color="gray.700" ml={2}>
              garantida!
            </Text>
          </Flex>

          <Text color="gray.600" mt={2} fontSize="sm">
            Antes de utilizar o produto, leia atentamente as precauções e instruções de uso.
          </Text>
        </Box>

        {/* Área central com imagem e cards */}
        <Box 
          position="relative"
          mt={8}
          h={{ base: "auto", lg: "600px" }}
        >
          {/* Layout para dispositivos móveis (empilhado) */}
          {!isDesktop && (
            <Flex 
              direction="column" 
              align="center"
              gap={6}
            >
              {/* Card da esquerda */}
              <Box
                w="100%"
                border="1px dashed #E57200"
                borderRadius="md"
                p={5}
                bg="white"
              >
                <Flex alignItems="center" mb={2}>
                  <Text color="#9D408F" fontWeight="bold">
                    Hidrolight Neo
                  </Text>
                  <Box as="span" ml={1} mt={-1} color="#9D408F">
                    <PiTrademarkRegisteredLight size={12} />
                  </Box>
                </Flex>

                <Text fontSize="sm" color="gray.700" lineHeight="1.5">
                  Família voltada para extrair os benefícios do Neoprene. Propriedades térmicas, compressivas e elásticas: são essas três propriedades que fazem do Neoprene uma ferramenta eficaz no tratamento e prevenção de lesões, no tratamento ortopédico
                </Text>
              </Box>

              {/* Imagem central */}
              <Box
                w="100%"
                textAlign="center"
                position="relative"
              >
                <Image
                  src="/Bilateral/1.png"
                  alt="Mulher usando Órtese Splint Bilateral"
                  maxH="400px"
                  objectFit="contain"
                  mx="auto"
                />
                {/* Gradiente na parte inferior */}
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  height="152px"
                  bgGradient="linear(to-t, white, transparent)"
                  pointerEvents="none"
                />
              </Box>

              {/* Card da direita */}
              <Box
                w="100%"
                border="1px dashed #E57200"
                borderRadius="md"
                p={5}
                bg="white"
              >
                <Box textAlign="center" mb={2}>
                  <Image 
                    src="/ANVISA.png" 
                    alt="Selo ANVISA" 
                    maxW="120px" 
                    mx="auto" 
                  />
                </Box>

                <Text fontSize="sm" fontWeight="medium" textAlign="center" lineHeight="1.5">
                  Autorização e Cadastro de produtos para saúde na ANVISA
                </Text>
              </Box>
            </Flex>
          )}

          {/* Layout para desktop (posicionamento absoluto) */}
          {isDesktop && (
            <Box position="relative" h="100%">
              {/* Card da esquerda */}
              <Box
                w="30%"
                border="1px dashed #E57200"
                borderRadius="md"
                p={5}
                bg="white"
                position="absolute"
                left={12}
                top="25%"
                transform="translateY(-50%)"
                zIndex={2}
              >
                <Flex alignItems="center" mb={2}>
                  <Text color="#9D408F" fontWeight="bold">
                    Hidrolight Neo
                  </Text>
                  <Box as="span" ml={1} mt={-1} color="#9D408F">
                    <PiTrademarkRegisteredLight size={12} />
                  </Box>
                </Flex>

                <Text fontSize="sm" color="gray.700" lineHeight="1.5">
                  Família voltada para extrair os benefícios do Neoprene. Propriedades térmicas, compressivas e elásticas: são essas três propriedades que fazem do Neoprene uma ferramenta eficaz no tratamento e prevenção de lesões, no tratamento ortopédico
                </Text>
              </Box>

              {/* Imagem central */}
              <Box
                position="absolute"
                left="50%"
                bottom={0}
                transform="translateX(-50%)"
                zIndex={1}
                textAlign="center"
              >
                <Image
                  src="/Bilateral/1.png"
                  alt="Mulher usando Órtese Splint Bilateral"
                  maxH="593px"
                  objectFit="contain"
                />
                {/* Gradiente na parte inferior */}
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  height="152px"
                  bgGradient="linear(to-t, white, transparent)"
                  pointerEvents="none"
                />
              </Box>

              {/* Card da direita */}
              <Box
                w="30%"
                border="1px dashed #E57200"
                borderRadius="md"
                p={5}
                bg="white"
                position="absolute"
                right={12}
                top="25%"
                transform="translateY(-50%)"
                zIndex={2}
              >
                <Box textAlign="center" mb={2}>
                  <Image 
                    src="/ANVISA.png" 
                    alt="Selo ANVISA" 
                    maxW="150px" 
                    mx="auto" 
                  />
                </Box>

                <Text fontSize="sm" fontWeight="medium" textAlign="center" lineHeight="1.5">
                  Autorização e Cadastro de produtos para saúde na ANVISA
                </Text>
              </Box>

              {/* Linhas conectoras com círculos */}
              {/* Linha esquerda */}
              <Flex
                position="absolute"
                left="32%"
                top="25%"
                w="19%"
                alignItems="center"
                zIndex={1}
              >
                <Box
                  flex="1"
                  h="1px"
                  transform={"rotate(51deg)"}
                  bg="#E57200"
                  transformOrigin="left"
                />
                <Box
                  w="16px"
                  h="16px"
                  borderRadius="full"
                  bg="#E57200"
                  position="absolute"
                  top="168px"
                  left="135px"
                  zIndex={2}
                />
              </Flex>

              {/* Linha direita */}
              <Flex
                position="absolute"
                right="33%"
                top="27%"
                w="23%"
                alignItems="center"
                zIndex={1}
              >
                <Box
                  w="16px"
                  h="16px"
                  borderRadius="full"
                  bg="#E57200"
                  position="absolute"
                  right="188px"
                  top="168px"
                  zIndex={2}
                />
                <Box
                  flex="1"
                  h="1px"
                  transform={"rotate(-42deg)"}
                  bg="#E57200"
                  transformOrigin="right"
                />
              </Flex>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}