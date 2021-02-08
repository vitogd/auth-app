import {
  Box,
  Image,
  Stack,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Flex,
  Link
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { FaGoogle, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

import { SocialIconButton } from "./SocialIconButton";

export default function RegisterForm() {
  return (
    <Box borderWidth={2} width={400} borderRadius={24} px={39} py={10}>
      <FormHeader />
      <FormControls />
      <FormFooter />
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

function FormControls() {
  return (
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
        <Input type="password" placeholder="Password" borderColor="gray.300" />
      </InputGroup>

      <Button size="md" colorScheme="messenger">
        Start coding now
      </Button>
    </Stack>
  );
}

function FormFooter() {
  return (
    <Stack spacing={5} marginTop={6}>
      <Text fontSize="md" fontWeight={400} alignSelf="center" color="gray.500">
        or continue with these social profile
      </Text>

      <Flex justifyContent="center" alignItems="center" direction="row">
        <SocialIconButton icon={<FaGoogle size={20} />} />
        <SocialIconButton icon={<FaFacebook size={20} />} marginLeft={5}/>
        <SocialIconButton icon={<FaTwitter size={20} />} marginLeft={5}/>
        <SocialIconButton icon={<FaGithub size={20} />} marginLeft={5}/>
      </Flex>

      <Text fontSize="md" fontWeight={400} alignSelf="center" color="gray.500">
        Already a member? <Link href="/login" color="blue.400">Login</Link>
      </Text>
    </Stack>
  );
}
