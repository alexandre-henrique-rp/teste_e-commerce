import { Button, Flex } from "@chakra-ui/react";
import { PiTrademarkRegisteredLight } from "react-icons/pi";
import Form from "../implements/form";
import { redirect } from "next/navigation";

const DataList = [
  {
    id: 1,
    name: "Hidrolight Neo",
    icon: <PiTrademarkRegisteredLight />,
  },
  {
    id: 2,
    name: "Comfort Air",
    icon: <PiTrademarkRegisteredLight />,
  },
  {
    id: 3,
    name: "Ortho Recovery",
    icon: <PiTrademarkRegisteredLight />,
  },
  {
    id: 4,
    name: "Air Flex",
    icon: <PiTrademarkRegisteredLight />,
  },
  {
    id: 5,
    name: "Softline",
    icon: <PiTrademarkRegisteredLight />,
  },
  {
    id: 6,
    name: "Foot Care",
    icon: <PiTrademarkRegisteredLight />,
  },
  {
    id: 7,
    name: "Lean",
    icon: <PiTrademarkRegisteredLight />,
  },
];

export default async function ListOrthopedic() {
  const HandleClick = async (_: any, formData: FormData) => {
    "use server";
    const name = formData.get("Btm") as string;
    console.log("clicou", name);
    if (name === "Hidrolight Neo") {
      redirect("/hidrolight-neo");
    }
    return 'ok';
  };

  return (
    <>
      <Form action={HandleClick}>
        <Flex
          w={{ base: "100%", md: "51rem" }}
          justifyContent={"space-between"}
          flexWrap={{ base: "wrap", md: "nowrap" }}
        >
          {DataList.map((item) => (
            <Button
              key={item.id}
              p={{ base: 1, md: 2 }}
              bg={"transparent"}
              name={'Btm'}
              value={item.name}
              border={"none"}
              color={"#A75897"}
              borderRadius={8}
              _hover={{ bg: "#80276C", color: "white", fontWeight: 400 }}
              fontSize={{ base: "0.8rem", md: "0.9rem" }}
              fontWeight={400}
              type={"submit"}
            >
              {item.name}
              {item.icon}
            </Button>
          ))}
        </Flex>
      </Form>
    </>
  );
}
