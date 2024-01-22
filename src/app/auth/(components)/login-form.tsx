import { FormType } from "@/app/auth/auth.types";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

const LoginForm = ({
  switchForm,
}: {
  switchForm: (check: FormType) => void;
}) => {
  return (
    <form className="border-secondary border-2 rounded-md py-4 px-5 max-w-[600px] mx-auto flex flex-col gap-3 text-[20px]">
      <h2 className="text-3xl font-bold capitalize mb-4">
        Sign <span className="text-accent">In.</span>
      </h2>
      <Input type="email" placeholder="your email" />
      <Input type="text" placeholder="password" />
      <Button variant="full">Sign In</Button>
      <div className="text-[16px] mt-5 flex flex-row items-center justify-center gap-2">
        <h4>Don`t have an account?</h4>
        <Button onClick={() => switchForm("REGISTRATION")} variant="link">
          registration
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
