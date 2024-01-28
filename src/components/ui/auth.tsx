"use client";

import { useState } from "react";
import LoginForm from "../forms/login";
import RegistrationForm from "../forms/registration";
import { FormType } from "@/types/form-auth.types";

const Auth = () => {
  const [formType, setFormType] = useState<FormType>("LOGIN");

  const switchForm = (type: FormType) => {
    setFormType(type);
  };

  return (
    <section>
      {formType === "LOGIN" ? (
        <LoginForm switchForm={switchForm} />
      ) : (
        <RegistrationForm switchForm={switchForm} />
      )}
    </section>
  );
};

export default Auth;
