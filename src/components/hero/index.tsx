import { Flex, Image, Link, Text } from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Hero() {
  return (
    <>
      <Flex
        display={{ base: "none", lg: "flex" }}
        bgImage={"/heroimg.jpg"}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition={{ lg: "center -400px", xl: "center -500px" }}
        h="39rem"
      >
        <Flex
          w={"100%"}
          h="100%"
          bgGradient="linear(to-r, #ffff, #80276C33)"
          p={8}
          ps={12}
          flexDir={"column"}
          gap={40}
        >
          <Flex alignItems={"center"} gap={1}>
            <Link href="/">Inicio</Link>
            <MdKeyboardArrowRight size={20} />
            <Text
              fontWeight={500}
              _hover={{
                cursor: "pointer",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              Linha Orthopedic
            </Text>
          </Flex>
          <Flex flexDir={"column"} gap={8}>
            <Image src={"/Group238.png"} w={"max-content"} />
            <Flex gap={2} alignItems={"start"} w={"628px"}>
              <BsDot size={40} color={"#121212"} />
              <Text fontSize={"1.5rem"} fontWeight={500} color={"#121212"}>
                Produtos desenvolvidos para auxiliar na prevenção e retorno das
                atividades, no tratamento e recuperação de pacientes com lesões
                ortopédicas. s
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        bgImage={"/heroimg.jpg"}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition={{
          base: "center",
          sm: "center -200px",
          md: "center -300px",
        }}
        h={{ base: "34rem", md: "39rem" }}
        display={{ base: "flex", lg: "none" }}
      >
        <Flex
          w={"100%"}
          h="100%"
          bgGradient="linear(to-t, #ffff, #80276C33)"
          p={8}
          ps={12}
          flexDir={"column"}
          gap={40}
          justifyContent={"flex-end"}
        >
          <Flex flexDir={"column"} gap={8}>
            <Image src={"/Group238.png"} w={"max-content"} />
            <Flex
              gap={2}
              alignItems={"start"}
              w={{ base: "100%", md: "628px" }}
            >
              <BsDot size={40} color={"#121212"} />
              <Text
                fontSize={{ base: "1rem", md: "1.5rem" }}
                fontWeight={500}
                color={"#121212"}
              >
                Produtos desenvolvidos para auxiliar na prevenção e retorno das
                atividades, no tratamento e recuperação de pacientes com lesões
                ortopédicas. s
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
