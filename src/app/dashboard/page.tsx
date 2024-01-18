import { delay } from "@/lib/utils";

const DashboardHeader = async () => {
  await delay(2000);

  return (
    <div className="h-60 rounded-md p-10 border-2 border-secondary">
      <h1 className="text-3xl font-bold capitalize">
        Dashboard <span className="text-accent">page.</span>
      </h1>
    </div>
  );
};

export default DashboardHeader;