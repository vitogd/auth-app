import Head from 'next/head'
import { Center } from "@chakra-ui/react"

export default function Home() {
  return (
    <div>
      <Head>
        <title>auth-app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center>
        <h1>
          Hello World!
        </h1>
      </Center>
    </div>
  )
}
