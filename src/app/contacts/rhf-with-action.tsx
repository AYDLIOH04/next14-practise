"use client";

import { JsonCode } from "@/components/ui/json-code";
import { SubmitButton } from "@/components/ui/submit-button";
import { FormDataSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { addEntry } from "../_actions/rhf-action";

type Inputs = z.infer<typeof FormDataSchema>;

export const RHFormWithAction = () => {
  const [data, setData] = useState<Inputs>();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    const result = await addEntry(data);

    if (!result || result.error) {
      return;
    }

    reset();
    setData(result.data);
  };

  return (
    <div className="flex lg:flex-row flex-col gap-6">
      <form
        onSubmit={handleSubmit(processForm)}
        className="flex flex-1 flex-col gap-4 lg:w-1/2 sm:w-2/3 w-full lg:mx-0 mx-auto"
      >
        <div
          className={clsx(
            "relative flex flex-col gap-2",
            "before:border-t-[8px] before:border-b-[8px] before:border-l-[16px] before:border-t-transparent before:border-b-transparent before:border-l-accent before:absolute before:-left-6 before:top-3",
            { "before:hidden": !errors.name?.message }
          )}
        >
          <input
            placeholder="Your name"
            className="text-background rounded-md py-2 px-3 placeholder:capitalize w-full"
            {...register("name")}
          />
          {errors.name?.message && (
            <p className="text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div
          className={clsx(
            "relative flex flex-col gap-2",
            "before:border-t-[8px] before:border-b-[8px] before:border-l-[16px] before:border-t-transparent before:border-b-transparent before:border-l-accent before:absolute before:-left-6 before:top-3",
            { "before:hidden": !errors.message?.message }
          )}
        >
          <textarea
            className="text-background rounded-md min-h-[100px] w-full py-2 px-3 placeholder:capitalize"
            placeholder="Your message"
            {...register("message")}
          />
          {errors.message?.message && (
            <p className="text-sm text-red-400">{errors.message.message}</p>
          )}
        </div>
        <SubmitButton />
      </form>
      <JsonCode data={data} />
    </div>
  );
};
