"use client";

import { IoMdSettings, IoMdHome } from "react-icons/io";
import { DashboardLink } from "./(components)/dashboard-link";

const DashboardHeader = () => {
  return (
    <header>
      <nav className="flex items-center justify-start gap-10 text-lg font-bold">
        <DashboardLink href={'/dashboard'} Icon={IoMdHome}>Dashboard</DashboardLink>
        <DashboardLink href={'/dashboard/settings'} Icon={IoMdSettings}>Settings</DashboardLink>
      </nav>
    </header>
  );
};

export default DashboardHeader;
