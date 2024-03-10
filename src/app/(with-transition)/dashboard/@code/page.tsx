import { JsonCode } from "@/components/ui";
import { dashboard } from "@/constants";
import { delay } from "@/lib/utils";

const Code = async () => {
  await delay(3000);

  return (
    <section className="flex min-h-96 w-full flex-col gap-2 rounded-md border-2 border-secondary p-4 pt-8 md:p-10">
      <h1 className="mb-8 text-center text-3xl font-bold capitalize md:text-start">
        Code<span className="text-accent">.</span>
      </h1>
      <JsonCode data={dashboard} />
    </section>
  );
};

export default Code;
