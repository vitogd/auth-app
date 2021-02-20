import React from "react";
import { Box } from "@chakra-ui/react";

export function FormContainer(props) {
  return (
    <Box
      borderWidth={{ base: 0, sm: 2 }}
      width={400}
      borderRadius={24}
      px={39}
      py={10}
    >
      {props.children}
    </Box>
  );
}
