import { Flex } from "@chakra-ui/react";
import Footer from "../../components/footer";
import Header from "../../components/header";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Flex overflowY={"auto"} h={"100vh"} direction="column" justifyContent={"space-between"}>
        <Flex justifyContent={"center"}>
          <Flex w={{ base: "100%", md: "1192px" }} direction="column" h={"100%"}>
            <Header />
            {children}
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}
