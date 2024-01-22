"use client";

import { useState } from "react";
import LoginForm from "./(components)/login-form";
import RegistrationForm from "./(components)/registration-form";
import { FormType } from "@/app/auth/auth.types";

const AuthPage = () => {
  const [formType, setFormType] = useState<FormType>("LOGIN");

  const switchForm = (type: FormType) => {
    setFormType(type);
  };

  return (
    <section>
      {formType === "LOGIN" ? (
        <LoginForm switchForm={switchForm} />
      ) : (
        <RegistrationForm switchForm={switchForm}  />
      )}
    </section>
  );
};

export default AuthPage;
