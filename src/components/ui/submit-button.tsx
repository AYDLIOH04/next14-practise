"use client";

import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="rounded-md bg-accent py-2 text-white duration-200 hover:bg-opacity-70 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};
