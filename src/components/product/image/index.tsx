import { Box, Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { FaSearchPlus } from "react-icons/fa";
import { FiChevronRight, FiDownload } from "react-icons/fi";

export default function ImageProduct() {
  return (
    <>
      <Box w={'684px'} position="relative">
        {/* Main Product Image */}
        <Box
          border="1px"
          borderColor="gray.200"
          borderRadius="md"
          overflow="hidden"
          position="relative"
          maxW="100%"
        >
          <Image
            src="/Bilateral/1.png"
            alt="Órtese Splint Bilateral"
            w="100%"
            h={["300px", "400px", "523px"]}
            objectFit="cover"
            objectPosition={["center", "center", "center -350px"]}
          />

          <Text
            position="absolute"
            bottom={2}
            left={["calc(50% - 15px)", "calc(50% - 15px)", "280px"]}
            bg="blackAlpha.600"
            color="white"
            px={2}
            py={1}
            borderRadius="md"
            fontSize="sm"
          >
            1/6
          </Text>
          {/* botaão de busca */}
          <IconButton
            aria-label="Previous image"
            position="absolute"
            bottom={2}
            right={2}
            color="white"
            bg="blackAlpha.600"
            borderRadius="md"
            size="sm"
            icon={<FaSearchPlus />}
          />
        </Box>

        {/* Thumbnail Images */}
        <Flex
          w="100%"
          mt={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            as="button"
            aria-label="Previous image"
            bg="blackAlpha.400"
            borderRadius="md"
            p={2}
          >
            <FiChevronRight style={{ transform: "rotate(180deg)" }} />
          </Box>

          <Flex
            overflowX="hidden"
            gap={2}
            ps={[2, 5, 10, 20]}
            flexWrap={["wrap", "nowrap"]}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <Box key={num} position="relative">
                <Box
                  border={num === 1 ? "2px solid" : "1px solid"}
                  borderColor={num === 1 ? "#E57200" : "gray.200"}
                  borderRadius="md"
                  w={["70px", "90px", "112.25px"]}
                  h={["60px", "70px", "90.8px"]}
                  cursor="pointer"
                  overflow="hidden"
                  position="relative"
                >
                  <Image
                    src={`/Bilateral/${num === 2 ? num + ".jpg" : num === 3 ? num + ".jpg" : num + ".png"}`}
                    alt={`Thumbnail ${num}`}
                    w="full"
                    h="full"
                    objectFit="cover"
                  />
                  {num > 1 && (
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      bg="white"
                      opacity={0.6}
                      zIndex={1}
                    />
                  )}
                </Box>
              </Box>
            ))}
          </Flex>

          <Box
            as="button"
            aria-label="Next image"
            bg="blackAlpha.400"
            borderRadius="md"
            p={2}
          >
            <FiChevronRight />
          </Box>
        </Flex>

        {/* Download Product Folder */}
        <Button
          rightIcon={<FiDownload />}
          variant="link"
          color={"#E57200"}
          mt={6}
        >
          Baixar Folder do Produto
        </Button>
      </Box>
    </>
  );
}
