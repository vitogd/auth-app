import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Form from "../components/form/Form";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Register</title>
      </Head>

      <Flex
        minHeight="100vh"
        width="full"
        align="center"
        justifyContent="center"
      >
        <Form type="register" />
      </Flex>
    </div>
  );
}
