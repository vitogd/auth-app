import { Box, Image, Stack, Text } from "@chakra-ui/react";
import Form from "./Form";

export default function RegisterForm() {
  return (
    <Box borderWidth={2} width={400} borderRadius={24} px={39} py={10}>
      <FormHeader />
      <Form type="register" />
    </Box>
  );
}

function FormHeader() {
  return (
    <>
      <Image src="/devchallenges.svg" alt="DevChallenges logo" />

      <Stack marginY="25px" spacing="3">
        <Text fontSize="lg" fontWeight={600}>
          Join thousands of learners from around the world
        </Text>
        <Text fontWeight={400}>
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </Text>
      </Stack>
    </>
  );
}
