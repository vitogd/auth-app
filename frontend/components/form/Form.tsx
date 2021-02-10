import { Box, Image, Stack, Text, Flex, Link } from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";

import { FormProps } from "./FormProps";
import { FormControl } from "./FormControl";
import { SocialIconButton } from "./SocialIconButton";

export default function Form(props: FormProps) {
  return (
    <>
      <Box
        borderWidth={{ base: 0, sm: 2 }}
        width={400}
        borderRadius={24}
        px={39}
        py={10}
      >
        <FormHeader type={props.type} />
        <FormControl type={props.type} />
        <FormFooter type={props.type} />
      </Box>
    </>
  );
}

function FormHeader(props: FormProps) {
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

function FormFooter(props: FormProps) {
  return (
    <Stack spacing={5} marginTop={6}>
      <Text fontSize="md" fontWeight={400} alignSelf="center" color="gray.500">
        or continue with these social profile
      </Text>

      <Flex justifyContent="center" alignItems="center" direction="row">
        <SocialIconButton icon={<FaGoogle size={20} />} />
        <SocialIconButton icon={<FaFacebook size={20} />} marginLeft={5} />
        <SocialIconButton icon={<FaTwitter size={20} />} marginLeft={5} />
        <SocialIconButton icon={<FaGithub size={20} />} marginLeft={5} />
      </Flex>

      <Text fontSize="md" fontWeight={400} alignSelf="center" color="gray.500">
        {props.type == "register" ? (
          <>
            Already a member?{" "}
            <Link href="/login" color="blue.400">
              Login
            </Link>
          </>
        ) : (
          <>
            Don’t have an account yet?{" "}
            <Link href="/register" color="blue.400">
              Register
            </Link>
          </>
        )}
      </Text>
    </Stack>
  );
}
