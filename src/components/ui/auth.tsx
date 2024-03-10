"use client";

import { useState } from "react";
import { LoginForm, RegistrationForm } from "../forms";
import { FormType } from "@/types/form-auth";

export const Auth = () => {
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
