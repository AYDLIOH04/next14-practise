import { FormType } from "../auth.types";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

const RegistrationForm = ({
  switchForm,
}: {
  switchForm: (check: FormType) => void;
}) => {
  return (
    <form className="border-secondary border-2 rounded-md py-4 px-5 max-w-[600px] mx-auto flex flex-col gap-3 text-[20px]">
      <h2 className="text-3xl font-bold capitalize mb-4">
        Sign <span className="text-accent">up.</span>
      </h2>
      <Input type="email" placeholder="your email" />
      <Input type="text" placeholder="login" />
      <Input type="text" placeholder="password" />
      <Button variant="full">Sign Up</Button>
      <div className="text-[16px] mt-5 flex flex-row items-center justify-center gap-2">
        <h4>Already have an account?</h4>
        <Button onClick={() => switchForm("LOGIN")} variant="link">
          login
        </Button>
      </div>
    </form>
  );
};

export default RegistrationForm;
