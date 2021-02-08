import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import RegisterForm from "../components/RegisterForm";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
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
