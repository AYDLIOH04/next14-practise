"use client";

import { useAuthStore } from "@/stores";

export default function DashboardLayout({
  children,
  role,
  code,
  team,
  admin,
}: {
  children: React.ReactNode;
  role: React.ReactNode;
  code: React.ReactNode;
  team: React.ReactNode;
  admin: React.ReactNode;
}) {
  const userRole = useAuthStore((state) => state.role);

  return (
    <div className="flex flex-col gap-6">
      {children}
      {role}
      <div className="flex flex-wrap gap-6 lg:flex-nowrap">
        {team}
        {code}
      </div>
      {userRole === "ADMIN" && admin}
    </div>
  );
}
