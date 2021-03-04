import React from "react";
import {
  Stack,
  InputGroup,
  Input,
  Button,
  Icon,
  InputLeftElement,
  FormControl,
  useToast,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { FaUserAlt } from "react-icons/fa";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../api";

interface LoginFormData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email(),
  password: yup.string().required("Password is required"),
});

export function LoginFormControl() {
  const toast = useToast();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginFormData, e: any) => {
    const { email, password } = data;
    api
      .post("/auth/login", {
        email,
        password,
      })
      .then(() => (window.location.href = "/"))
      .catch((err) => {
        const errorMessage = err.response.data.error.message;
        toast({
          title: "There's an error:",
          description: errorMessage,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit((data, event) => onSubmit(data, event))}>
      <Stack>
        <FormControl isInvalid={!!errors.email}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={EmailIcon} color="gray.500" />}
            />
            <Input
              placeholder="Email"
              borderColor="gray.300"
              name="email"
              id="email"
              ref={register}
            />
          </InputGroup>
        </FormControl>

        <FormControl isInvalid={!!errors.password}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={LockIcon} color="gray.500" />}
            />
            <Input
              placeholder="Password"
              borderColor="gray.300"
              name="password"
              id="password"
              ref={register}
              type="password"
            />
          </InputGroup>
        </FormControl>

        <Button size="md" colorScheme="messenger" type="submit">
          Login
        </Button>
      </Stack>
    </form>
  );
}
