import { delay } from "@/lib/utils";

const DefaultCode = async () => {
  await delay(3000);
  return (
    <div>
      <h1 className="text-3xl font-bold capitalize">
        Code <span className="text-accent">default.</span>
      </h1>
    </div>
  );
};

export default DefaultCode;
