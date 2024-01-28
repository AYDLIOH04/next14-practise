import { delay } from "@/lib/utils";

const DefaultRole = async () => {
  await delay(3000);
  return (
    <div>
      <h1 className="text-3xl font-bold capitalize">
        Role <span className="text-accent">default.</span>
      </h1>
    </div>
  );
};

export default DefaultRole;
