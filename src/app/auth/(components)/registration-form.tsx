import { FormType } from "../auth.types";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

const RegistrationForm = ({
  switchForm,
}: {
  switchForm: (check: FormType) => void;
}) => {
  return (
    <form className="mx-auto flex max-w-[600px] flex-col gap-3 rounded-md border-2 border-secondary px-5 py-4 text-[20px]">
      <h2 className="mb-4 text-3xl font-bold capitalize">
        Sign <span className="text-accent">up.</span>
      </h2>
      <Input type="email" placeholder="your email" />
      <Input type="text" placeholder="login" />
      <Input type="text" placeholder="password" />
      <Button variant="full">Sign Up</Button>
      <div className="mt-5 flex flex-row items-center justify-center gap-2 text-[16px]">
        <h4>Already have an account?</h4>
        <Button onClick={() => switchForm("LOGIN")} variant="link">
          login
        </Button>
      </div>
    </form>
  );
};

export default RegistrationForm;
