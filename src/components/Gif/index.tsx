import React from "react"; 

import { Box, Image, Text } from "@chakra-ui/react";
type GifProps = {
  title : string;
  url : string;
}

export default function Gif({ title, url }: GifProps) {
  return (
    <Box borderWidth='1px' borderRadius='lg'>
    <Image src={url} alt={title} htmlWidth='100%' borderRadius='lg'/>
    <Box p='4'>
      <Box display='flex' alignItems='baseline'>
        <Text fontSize='md' mt={3}>{title}</Text>
      </Box>
    </Box>
  </Box>
  );
}