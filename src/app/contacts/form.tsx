"use client";

import { useFormState } from "react-dom";
import { addEntry } from "../_actions/form-action";
import { SubmitButton } from "@/components/ui/submit-button";
import { JsonCode } from "../../components/ui/json-code";

export const Form = () => {
  const [state, formAction] = useFormState(addEntry, null);

  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <form
        action={formAction}
        className="mx-auto flex w-full flex-1 flex-col gap-4 sm:w-2/3 lg:mx-0 lg:w-1/2"
        key={Math.random()}
      >
        <input
          className="rounded-md px-3 py-2 text-background placeholder:capitalize"
          name="name"
          placeholder="Your name"
        />
        <textarea
          className="min-h-[100px] rounded-md px-3 py-2 text-background placeholder:capitalize"
          name="message"
          placeholder="Your message"
        />
        <SubmitButton />
      </form>
      <JsonCode data={state?.data || state?.error} />
    </div>
  );
};
