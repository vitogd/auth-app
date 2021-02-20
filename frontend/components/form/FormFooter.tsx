import { Stack, Text, Flex, Link } from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";

import { FormProps } from "./FormProps";
import { SocialIconButton } from "./SocialIconButton";

export function FormFooter(props: FormProps) {
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
