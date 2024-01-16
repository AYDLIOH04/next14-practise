import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="rounded-md bg-accent hover:bg-opacity-70 duration-200 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};
