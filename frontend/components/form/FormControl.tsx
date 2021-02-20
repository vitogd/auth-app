import React from "react";
import {
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";

interface FormControlProps {
  buttonText: string;
  onButtonClicked: Function;
}

export function FormControl(props: FormControlProps) {
  return (
    <Stack spacing={4}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<EmailIcon color="gray.500" />}
        />
        <Input type="email" placeholder="Email" borderColor="gray.300" />
      </InputGroup>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<LockIcon color="gray.500" />}
        />
        <Input type="password" placeholder="Password" borderColor="gray.300" />
      </InputGroup>

      <Button
        size="md"
        colorScheme="messenger"
        onClick={() => props.onButtonClicked()}
      >
        {props.buttonText}
      </Button>
    </Stack>
  );
}
