import { delay } from "@/lib/utils";
import { SwitchRoleButton } from "./(components)/switch-role-btn";

const DashboardHeader = async () => {
  await delay(2000);

  return (
    <section className="h-60 rounded-md border-2 border-secondary p-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold capitalize">
          Dashboard <span className="text-accent">page.</span>
        </h1>
        <SwitchRoleButton />
      </div>
    </section>
  );
};

export default DashboardHeader;
