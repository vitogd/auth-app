import {
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Text,
  Flex,
  Link,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { FaGoogle, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import { SocialIconButton } from "./SocialIconButton";

interface FormProps {
  type: "register" | "login";
}

export default function Form(props: FormProps) {
  return (
    <>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<EmailIcon color="gray.500" />}
          />
          <Input type="email" placeholder="Email" borderColor="gray.300" />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<LockIcon color="gray.500" />}
          />
          <Input
            type="password"
            placeholder="Password"
            borderColor="gray.300"
          />
        </InputGroup>

        <Button size="md" colorScheme="messenger">
          {props.type == "register" ? "Start coding now" : "Login"}
        </Button>
      </Stack>
      <Stack spacing={5} marginTop={6}>
        <Text
          fontSize="md"
          fontWeight={400}
          alignSelf="center"
          color="gray.500"
        >
          or continue with these social profile
        </Text>

        <Flex justifyContent="center" alignItems="center" direction="row">
          <SocialIconButton icon={<FaGoogle size={20} />} />
          <SocialIconButton icon={<FaFacebook size={20} />} marginLeft={5} />
          <SocialIconButton icon={<FaTwitter size={20} />} marginLeft={5} />
          <SocialIconButton icon={<FaGithub size={20} />} marginLeft={5} />
        </Flex>

        <Text
          fontSize="md"
          fontWeight={400}
          alignSelf="center"
          color="gray.500"
        >
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
    </>
  );
}
