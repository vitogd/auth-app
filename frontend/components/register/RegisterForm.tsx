import React from "react";
import { FormContainer } from "../form/FormContainer";
import { FormControl } from "../form/FormControl";
import { FormFooter } from "../form/FormFooter";
import { FormHeader } from "../form/FormHeader";

export function RegisterForm() {
  return (
    <FormContainer>
      <FormHeader type="register" />
      <FormControl
        buttonText="Start coding now"
        onButtonClicked={() => console.log("clicked!")}
      />
      <FormFooter type="register" />
    </FormContainer>
  );
}
