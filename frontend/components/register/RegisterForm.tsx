import React from "react";

import { FormContainer } from "../form/FormContainer";
import { FormFooter } from "../form/FormFooter";
import { FormHeader } from "../form/FormHeader";
import { RegisterFormControl } from "./RegisterFormControl";

export function RegisterForm() {
  return (
    <FormContainer>
      <FormHeader type="register" />
      <RegisterFormControl />
      <FormFooter type="register" />
    </FormContainer>
  );
}
