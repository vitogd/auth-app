import Head from "next/head";
import { Flex } from "@chakra-ui/react";

import { LoginForm } from "../components/login/LoginForm";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>

      <Flex
        minHeight="100vh"
        width="full"
        align="center"
        justifyContent="center"
      >
        <LoginForm />
      </Flex>
    </div>
  );
}
