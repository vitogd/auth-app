import Head from "next/head";
import { Flex } from "@chakra-ui/react";

import { RegisterForm } from "../components/register/RegisterForm";

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
        <RegisterForm />
      </Flex>
    </div>
  );
}
