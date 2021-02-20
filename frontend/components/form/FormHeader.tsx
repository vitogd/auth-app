import React from "react";
import { Image, Stack, Text } from "@chakra-ui/react";

import { FormProps } from "./FormProps";

export function FormHeader(props: FormProps) {
  return (
    <>
      <Image src="/devchallenges.svg" alt="DevChallenges logo" />

      <Stack marginY="25px" spacing="3">
        {props.type == "login" ? (
          <Text fontSize="lg" fontWeight={600}>
            Login
          </Text>
        ) : (
          <>
            <Text fontSize="lg" fontWeight={600}>
              Join thousands of learners from around the world
            </Text>
            <Text fontWeight={400}>
              Master web development by making real-life projects. There are
              multiple paths for you to choose
            </Text>
          </>
        )}
      </Stack>
    </>
  );
}
