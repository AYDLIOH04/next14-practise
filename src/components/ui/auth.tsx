"use client";

import { useState } from "react";
import LoginForm from "./forms/login-form";
import RegistrationForm from "./forms/registration-form";
import { FormType } from "@/types/auth.types";

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
