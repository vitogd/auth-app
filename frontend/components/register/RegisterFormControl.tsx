import React from "react";
import { Stack, Button } from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { FaUserAlt } from "react-icons/fa";

import { InputGroup } from "../form/InputGroup";

export function RegisterFormControl() {
  return (
    <Stack spacing={4}>
      <InputGroup type="text" placeholder="Name" icon={FaUserAlt} />
      <InputGroup type="email" placeholder="Email" icon={EmailIcon} />
      <InputGroup type="password" placeholder="Password" icon={LockIcon} />
      <Button size="md" colorScheme="messenger">
        Start coding now
      </Button>
    </Stack>
  );
}
