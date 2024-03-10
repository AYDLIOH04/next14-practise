import { ListItem } from "@/components/ui";
import { delay } from "@/lib/utils";

const Team = async () => {
  await delay(3500);

  return (
    <section className="flex min-h-96 w-full flex-col gap-2 rounded-md border-2 border-secondary p-10">
      <h1 className="mb-8 text-3xl font-bold capitalize">
        Team<span className="text-accent">.</span>
      </h1>
      <ul className="ml-8 flex flex-col gap-3">
        <ListItem>Лео Мээээси</ListItem>
        <ListItem>Лионель Пепси</ListItem>
        <ListItem>Лэйс Месси</ListItem>
        <ListItem>Лионель МеSIIIUUUU</ListItem>
      </ul>
    </section>
  );
};

export default Team;
