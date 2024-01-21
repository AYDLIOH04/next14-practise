"use client";

import { useAuthStore } from "@/stores";

export default function DashboardLayout({
  children,
  code,
  team,
  admin,
}: {
  children: React.ReactNode;
  code: React.ReactNode;
  team: React.ReactNode;
  admin: React.ReactNode;
}) {
  const role = useAuthStore((state) => state.role);

  return (
    <div className="flex flex-col gap-6">
      {children}
      <div className="flex flex-wrap lg:flex-nowrap gap-6">
        {team}
        {code}
      </div>
      {role === "ADMIN" && admin}
    </div>
  );
}
