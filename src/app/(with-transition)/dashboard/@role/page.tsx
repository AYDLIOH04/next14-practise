import { delay } from "@/lib/utils";
import { SwitchRoleButton } from "../(components)";

const DashboardRole = async () => {
  await delay(2000);

  return (
    <section className="h-60 rounded-md border-2 border-secondary p-10">
      <div className="flex flex-col gap-3 sm:items-start items-center">
        <h1 className="text-3xl font-bold capitalize sm:text-start text-center">
          Dashboard <span className="text-accent">page.</span>
        </h1>
        <SwitchRoleButton />
      </div>
    </section>
  );
};

export default DashboardRole;
