import Head from "next/head";
import { Center } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>auth-app</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Center>
        <h1>Hello World!</h1>
      </Center>
    </div>
  );
}
