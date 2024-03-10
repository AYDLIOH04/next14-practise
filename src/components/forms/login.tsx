import { FormType } from "@/types";
import { Button, Input } from "@/components/ui";

export const LoginForm = ({
  switchForm,
}: {
  switchForm: (check: FormType) => void;
}) => {
  return (
    <form className="mx-auto flex max-w-[600px] flex-col gap-3 rounded-md border-2 border-secondary px-5 py-4 text-[20px]">
      <h2 className="mb-4 text-3xl font-bold capitalize">
        Sign <span className="text-accent">In.</span>
      </h2>
      <Input type="email" placeholder="your email" />
      <Input type="text" placeholder="password" />
      <Button variant="full">Sign In</Button>
      <div className="mt-5 flex flex-row items-center justify-center gap-2 text-[16px]">
        <h4>Don`t have an account?</h4>
        <Button onClick={() => switchForm("REGISTRATION")} variant="link">
          registration
        </Button>
      </div>
    </form>
  );
};
