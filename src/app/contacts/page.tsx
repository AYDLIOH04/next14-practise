import { Dot } from "@/components/ui/dot";
import { Form } from "./form";
import { RHForm } from "./rhf";
import { RHFormWithZod } from "./rhf-with-zod";
import { RHFormWithAction } from "./rhf-with-action";

const Contact = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-20">
          <div>
            <h2 className="page-title flex flex-row justify-center gap-0.5 lg:justify-start">
              Form <Dot />
            </h2>
            <Form />
          </div>
          <div>
            <h2 className="page-title flex flex-row justify-center gap-0.5 lg:justify-start">
              React Hook Form <Dot />
            </h2>
            <RHForm />
          </div>
          <div>
            <h2 className="page-title flex flex-row justify-center gap-0.5 lg:justify-start">
              React Hook Form + Zod <Dot />
            </h2>
            <RHFormWithZod />
          </div>
          <div>
            <h2 className="page-title flex flex-row justify-center gap-0.5 lg:justify-start">
              React Hook Form + Zod + Action <Dot />
            </h2>
            <RHFormWithAction />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
