import { JsonCode } from "@/components/ui/json-code";
import { data } from "@/constants/dashboard";
import { delay } from "@/lib/utils";

const Code = async () => {
  await delay(3000);

  return (
    <section className="min-h-96 flex flex-col gap-2 rounded-md md:p-10 p-4 pt-8 border-2 border-secondary w-full">
      <h1 className="text-3xl font-bold capitalize mb-8 md:text-start text-center">
        Code<span className="text-accent">.</span>
      </h1>
      <JsonCode data={data} />
    </section>
  );
};

export default Code;
