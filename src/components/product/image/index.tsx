import { Box, Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { FaSearchPlus } from "react-icons/fa";
import { FiChevronRight, FiDownload } from "react-icons/fi";

export default function ImageProduct() {
  return (
    <>
      <Box
        w={{ base: "100%", md: "684px" }}
        position="relative"
        mx={{base: 2, md: 0}}
        px={{base: 2, md: 4}}
      >
        {/* Main Product Image */}
        <Box
          border="1px"
          borderColor="gray.200"
          borderRadius="md"
          overflow="hidden"
          position="relative"
          w="full"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mx={{base: 0, md: 2}}
          my={{base: 2, md: 3}}
        >
          <Image
            src="/Bilateral/1.png"
            alt="Órtese Splint Bilateral"
            w="100%"
            h={{ base: "300px", sm: "350px", md: "450px", lg: "523px" }}
            objectFit="contain"
            objectPosition="center"
            margin="0 auto"
          />

          <Text
            position="absolute"
            bottom={4}
            left={{ base: "50%", lg: "280px" }}
            transform={{ base: "translateX(-50%)", lg: "none" }}
            bg="blackAlpha.600"
            color="white"
            px={3}
            py={1}
            borderRadius="md"
            fontSize={{ base: "xs", md: "sm" }}
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
          mb={3}
          px={{base: 1, md: 2}}
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
            overflowX={{ base: "auto", md: "hidden" }}
            gap={{ base: 2, md: 3 }}
            px={{ base: 3, sm: 4, md: 6 }}
            py={{base: 2, md: 3}}
            mx={{base: 1, md: 2}}
            flexWrap={{ base: "nowrap", md: "nowrap" }}
            css={{
              "&::-webkit-scrollbar": {
                display: "none"
              },
              scrollbarWidth: "none",
              "-ms-overflow-style": "none"
            }}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <Box key={num} position="relative">
                <Box
                  border={num === 1 ? "2px solid" : "1px solid"}
                  borderColor={num === 1 ? "#E57200" : "gray.200"}
                  borderRadius="md"
                  w={{ base: "80px", sm: "90px", md: "100px", lg: "112.25px" }}
                  h={{ base: "65px", sm: "75px", md: "85px", lg: "90.8px" }}
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
          mt={{ base: 4, md: 6 }}
          mb={{ base: 2, md: 3 }}
          mx={{ base: 2, md: 3 }}
          fontSize={{ base: "sm", md: "md" }}
        >
          Baixar Folder do Produto
        </Button>
      </Box>
    </>
  );
}
