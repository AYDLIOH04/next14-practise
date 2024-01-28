import { ListItem } from "@/components/ui/list-item";
import { delay } from "@/lib/utils";

const TeamSettings = async () => {
  await delay(3500);

  return (
    <section className="flex min-h-96 w-full flex-col gap-2 rounded-md border-2 border-secondary p-10">
      <h1 className="mb-8 text-3xl font-bold capitalize">
        Settings<span className="text-accent">.</span>
      </h1>
    </section>
  );
};

export default TeamSettings;
