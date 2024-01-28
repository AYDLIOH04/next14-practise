import { delay } from "@/lib/utils";

const AdminSettings = async () => {
  await delay(3000);
  return (
    <div>
      <h1 className="text-3xl font-bold capitalize">
        Admin <span className="text-accent">settings.</span>
      </h1>
    </div>
  );
};

export default AdminSettings;
