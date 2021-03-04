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
import { api } from "../../api/api";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required").min(5).max(50),
  email: yup.string().required("Email is required").email(),
  password: yup.string().required("Password is required").min(8).max(50),
});

export function RegisterFormControl() {
  const toast = useToast();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: RegisterFormData, e: any) => {
    const { name, email, password } = data;
    api
      .post("/auth/register", {
        name,
        email,
        password,
      })
      .then(() => (window.location.href = "/login"))
      .catch((err) => {
        const errorMessage = err.response.data.error.message;
        toast({
          title: "There's an error:",
          description:
            errorMessage == "Conflict"
              ? "Your email is already registered"
              : errorMessage,
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
        <FormControl isInvalid={!!errors.name}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FaUserAlt} color="gray.500" />}
            />
            <Input
              placeholder="Name"
              borderColor="gray.300"
              name="name"
              id="name"
              ref={register}
            />
          </InputGroup>
        </FormControl>

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
          Start coding now
        </Button>
      </Stack>
    </form>
  );
}
