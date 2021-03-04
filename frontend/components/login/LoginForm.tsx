import React from "react";

import { FormContainer } from "../form/FormContainer";
import { FormFooter } from "../form/FormFooter";
import { FormHeader } from "../form/FormHeader";
import { LoginFormControl } from "./LoginFormControl";

export function LoginForm() {
  return (
    <FormContainer>
      <FormHeader type="login" />
      <LoginFormControl />
      <FormFooter type="login" />
    </FormContainer>
  );
}
