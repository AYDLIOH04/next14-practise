"use client";

import { useClickOutside } from "@/hooks";
import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { MdTranslate } from "react-icons/md";
export const LangSwitcher = () => {
  const [open, setOpen] = useState(false);
  const langSwitcherRef = useRef(null);

  const router = useRouter();
  const pathname = usePathname();

  const locale = useLocale();
  const t = useTranslations("LangSwitcher");

  const onOpenList = () => {
    setOpen((current) => !current);
  };

  const onLanguageSwitch = (lang: "ru" | "en") => {
    const slicePathname = pathname.slice(3);
    router.replace(`/${lang}${slicePathname}`);
  };

  useClickOutside(() => setOpen(false), langSwitcherRef);

  return (
    <div ref={langSwitcherRef} className="relative right-16 lg:right-0">
      <MdTranslate
        size={30}
        className={clsx("cursor-pointer duration-200", {
          "text-blue-400": open,
        })}
        onClick={onOpenList}
      />
      {open && (
        <div className="absolute -right-5 top-10 rounded-md bg-[#2b2a2a] px-3 py-6 sm:py-4">
          <ul className="flex flex-col gap-6 sm:gap-4">
            {t.raw("langs").map((lang: any, langIndex: number) => (
              <li
                onClick={() => onLanguageSwitch(lang.id)}
                key={langIndex}
                className={clsx(
                  "min-w-40 cursor-pointer text-xl sm:min-w-32 sm:text-[14px]",
                  {
                    "text-blue-400": locale === lang.id,
                  },
                )}
              >
                {lang.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
