import { Box, Image } from "@chakra-ui/react";



export default function Video() {
    return (
        <Box w={"100%"} h={{base: "auto", md: "663px"}} mb={8} px={{base: 3, md: 0}}>
          <Image src="/video.png" w={"full"} h={"full"} />
        </Box>
    )
}