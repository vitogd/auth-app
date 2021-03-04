import React from "react";

import { FormContainer } from "../form/FormContainer";
import { FormFooter } from "../form/FormFooter";
import { FormHeader } from "../form/FormHeader";

export function LoginForm() {
  return (
    <FormContainer>
      <FormHeader type="login" />
      <FormFooter type="login" />
    </FormContainer>
  );
}
