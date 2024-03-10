import { delay } from "@/lib/utils";

const AdminSettings = async () => {
  await delay(3000);
  return (
    <section className="h-60 rounded-md border-2 border-secondary p-10">
      <div>
        <h1 className="text-3xl font-bold capitalize">
          Admin <span className="text-accent">settings.</span>
        </h1>
      </div>
    </section>
  );
};

export default AdminSettings;
