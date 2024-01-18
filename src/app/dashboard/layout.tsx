export default function DashboardLayout({
  children,
  code,
  team,
}: {
  children: React.ReactNode;
  code: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-6">
      {children}
      <div className="flex flex-wrap lg:flex-nowrap gap-6">
        {team}
        {code}
      </div>
    </section>
  );
}
