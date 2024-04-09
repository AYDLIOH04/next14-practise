"use client";

import { IoMdSettings, IoMdHome } from "react-icons/io";
import { DashboardLink } from "./(components)";
import { useLocale } from "next-intl";

const DashboardHeader = () => {
  const locale = useLocale();

  return (
    <header>
      <nav className="flex items-center justify-start gap-10 text-lg font-bold">
        <DashboardLink href={`/${locale}/dashboard`} Icon={IoMdHome}>
          Dashboard
        </DashboardLink>
        <DashboardLink
          href={`/${locale}/dashboard/settings`}
          Icon={IoMdSettings}
        >
          Settings
        </DashboardLink>
      </nav>
    </header>
  );
};

export default DashboardHeader;
