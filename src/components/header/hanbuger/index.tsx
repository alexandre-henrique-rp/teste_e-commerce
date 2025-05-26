"use client";
import {
  Box,
  Button,
  CloseButton,
  IconButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import Lang from "../../lang";
import { useRouter } from "next/navigation";

type ListaProps = {
  valor: string;
  texto: string;
  action?: () => void;
};

interface Props {
  Dados: ListaProps[];
}

export default function HanbugerMenu({ Dados }: Props) {
  const router = useRouter();
  const mobileNav = useDisclosure();

  const handleChange = (value: string) => {
    router.push(value);
    mobileNav.onClose();
  };

  return (
    <Box
      display={{
        base: "inline-flex",
        lg: "none",
      }}
    >
      <IconButton
        display={{
          base: "flex",
          lg: "none",
        }}
        aria-label="Open menu"
        fontSize="20px"
        color="gray.800"
        _dark={{
          color: "inherit",
        }}
        variant="ghost"
        icon={<GiHamburgerMenu />}
        onClick={mobileNav.onOpen}
      />

      <VStack
        pos="absolute"
        w="100%"
        top={16}
        left={0}
        right={0}
        display={mobileNav.isOpen ? "flex" : "none"}
        flexDirection="column"
        justifyContent="center"
        p={2}
        pb={4}
        bg={"gray.100"}
        spacing={3}
        rounded="sm"
        shadow="sm"
        zIndex={10}
      >
        <CloseButton
          w={"100%"}
          justifyContent={"center"}
          _hover={{ bg: "gray.300" }}
          aria-label="Close menu"
          onClick={mobileNav.onClose}
        />

        {Dados.map((item, index) => {
          if (item.action) {
            return (
              <Button
                key={index}
                w="full"
                variant="ghost"
                _hover={{ bg: "gray.300" }}
                onClick={item.action}
              >
                {item.texto}
              </Button>
            );
          }
          
          return (
            <Button
              key={index}
              w="full"
              variant="ghost"
              _hover={{ bg: "gray.300" }}
              onClick={() => handleChange(item.valor)}
            >
              {item.texto}
            </Button>
          );
        })}
        <Lang />
      </VStack>
    </Box>
  );
}
