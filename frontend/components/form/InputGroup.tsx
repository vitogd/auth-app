import React, { ElementType } from "react";
import {
  Icon,
  Input,
  InputGroup as ChakraInputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

interface InputGroupProps {
  placeholder: string;
  type: "text" | "email" | "password";
  icon: ElementType;
}

export function InputGroup(props: InputGroupProps) {
  return (
    <ChakraInputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<Icon as={props.icon} color="gray.500" />}
      />
      <Input
        type={props.type}
        placeholder={props.placeholder}
        borderColor="gray.300"
      />
    </ChakraInputGroup>
  );
}
