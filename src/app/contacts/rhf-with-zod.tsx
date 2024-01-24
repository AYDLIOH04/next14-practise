"use client";

import { JsonCode } from "@/components/ui/json-code";
import { SubmitButton } from "@/components/ui/submit-button";
import { FormDataSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

type Inputs = z.infer<typeof FormDataSchema>;

export const RHFormWithZod = () => {
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

  const processForm: SubmitHandler<Inputs> = (data) => {
    reset();
    setData(data);
  };

  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <form
        onSubmit={handleSubmit(processForm)}
        className="mx-auto flex w-full flex-1 flex-col gap-4 sm:w-2/3 lg:mx-0 lg:w-1/2"
      >
        <div
          className={clsx(
            "relative flex flex-col gap-2",
            "before:absolute before:-left-6 before:top-3 before:border-b-[8px] before:border-l-[16px] before:border-t-[8px] before:border-b-transparent before:border-l-accent before:border-t-transparent",
            { "before:hidden": !errors.name?.message },
          )}
        >
          <input
            placeholder="Your name"
            className="w-full rounded-md px-3 py-2 text-background placeholder:capitalize"
            {...register("name")}
          />
          {errors.name?.message && (
            <p className="text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div
          className={clsx(
            "relative flex flex-col gap-2",
            "before:absolute before:-left-6 before:top-3 before:border-b-[8px] before:border-l-[16px] before:border-t-[8px] before:border-b-transparent before:border-l-accent before:border-t-transparent",
            { "before:hidden": !errors.message?.message },
          )}
        >
          <textarea
            className="min-h-[100px] w-full rounded-md px-3 py-2 text-background placeholder:capitalize"
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
