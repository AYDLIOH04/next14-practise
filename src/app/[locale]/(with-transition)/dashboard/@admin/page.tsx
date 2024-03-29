import { delay } from "@/lib/utils";

const DashboardHeader = async () => {
  await delay(5000);

  return (
    <section className="h-60 rounded-md border-2 border-secondary p-10">
      <div>
        <h1 className="text-3xl font-bold capitalize">
          Admin <span className="text-accent">dashboard.</span>
        </h1>
        <p>Create photo</p>
      </div>
    </section>
  );
};

export default DashboardHeader;
