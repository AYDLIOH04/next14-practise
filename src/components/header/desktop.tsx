"use client";

import { navLinks } from "@/constants";
import { HeaderLink } from "./link";
import { useLocale, useTranslations } from "next-intl";

const HeaderDesktop = () => {
  const locale = useLocale();
  const t = useTranslations("Header");

  return (
    <nav className="hidden items-center justify-start gap-10 lg:flex">
      {navLinks.map(({ href, label }) => (
        <HeaderLink key={href} href={`/${locale}${href}`}>
          {t(label)}
        </HeaderLink>
      ))}
    </nav>
  );
};

export default HeaderDesktop;
