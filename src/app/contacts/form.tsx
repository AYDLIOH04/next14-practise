"use client";

import { useFormState } from "react-dom";
import { addEntry } from "../_actions/form-action";
import { SubmitButton } from "@/components/ui/submit-button";
import { JsonCode } from "../../components/ui/json-code";

export const Form = () => {
  const [state, formAction] = useFormState(addEntry, null);

  return (
    <div className="flex lg:flex-row flex-col gap-6">
      <form
        action={formAction}
        className="flex flex-1 flex-col gap-4 lg:w-1/2 sm:w-2/3 w-full lg:mx-0 mx-auto"
        key={Math.random()}
      >
        <input
          className="text-background rounded-md py-2 px-3 placeholder:capitalize"
          name="name"
          placeholder="Your name"
        />
        <textarea
          className="text-background rounded-md min-h-[100px] py-2 px-3 placeholder:capitalize"
          name="message"
          placeholder="Your message"
        />
        <SubmitButton />
      </form>
      <JsonCode data={state?.data || state?.error} />
    </div>
  );
};
