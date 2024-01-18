"use client";

import { JsonCode } from "@/components/ui/json-code";
import { SubmitButton } from "@/components/ui/submit-button";
import clsx from "clsx";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  message: string;
};

export const RHForm = () => {
  const [data, setData] = useState<Inputs>();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      message: "",
    },
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    reset();
    setData(data);
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
            {...register("name", { required: "Name is required" })}
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
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 4,
                message: "Message must have at least 4 characters",
              },
            })}
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
