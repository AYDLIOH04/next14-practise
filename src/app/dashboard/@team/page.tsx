import { ListItem } from "@/components/ui/list-item";
import { delay } from "@/lib/utils";

const Team = async ()  => {
  await delay(3500);

  return (
    <div className="min-h-96  flex flex-col gap-2 rounded-md p-10 border-2 border-secondary w-full">
      <h1 className="text-3xl font-bold capitalize mb-8">
        Team<span className="text-accent">.</span>
      </h1>
      <ul className="flex flex-col gap-3 ml-8">
        <ListItem>Лео Мээээси</ListItem>
        <ListItem>Лионель Пепси</ListItem>
        <ListItem>Лэйс Месси</ListItem>
        <ListItem>Лионель МеSIIIUUUU</ListItem>
      </ul>
    </div>
  );
};

export default Team;
