import { Box, Select, SelectProps } from "@chakra-ui/react";

interface LangProps extends SelectProps {}

export default function Lang({ ...res }: LangProps) {
  return (
    <>
      <Box display={{ base: "none", md: "flex" }}>
        <Select
          size="sm"
          w={"max-content"}
          border={0}
          bg="transparent"
          {...res}
        >
          <option style={{ padding: 0 }} value="pt-br">
            🇧🇷
          </option>
          <option style={{ padding: 0 }} value="eu">
            🇺🇲
          </option>
        </Select>
      </Box>

      <Box display={{ base: "flex", md: "none" }}>
        <Select size="md" border={0} bg="transparent" {...res}>
          <option style={{ padding: 0 }} value="pt-br">
            🇧🇷 PT-BR
          </option>
          <option style={{ padding: 0 }} value="eu">
            🇺🇲 EU
          </option>
        </Select>
      </Box>
    </>
  );
}
