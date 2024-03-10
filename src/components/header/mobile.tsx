"use client";

import { navLinks } from "@/constants";
import { useClickOutside, useOverflowEffect } from "@/hooks";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { TbLogin2 } from "react-icons/tb";

const mobileNavVariants = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

type HeaderMobileProps = {
  open: boolean;
  setOpen: any;
};

const HeaderMobile = ({ open, setOpen }: HeaderMobileProps) => {
  const ref = useRef(null);
  const locale = useLocale();
  const t = useTranslations("Header");
  const pathname = usePathname();

  const onClose = () => {
    setOpen(false);
  };

  useOverflowEffect("nav-scroll-disabled", [open]);
  useClickOutside(onClose, ref);

  return (
    <motion.div
      ref={ref}
      variants={mobileNavVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{ duration: 0.3 }}
      className="fixed right-0 top-24 z-[100] flex items-center justify-start gap-10 lg:hidden"
    >
      <nav className="flex flex-col gap-4 text-4xl">
        <div className="flex flex-col gap-5 rounded-l-md bg-main px-2 py-3">
          {navLinks.slice(0, -1).map(({ Icon, ...link }) => {
            let hrefWithLocale = `/${locale}${link.href}`;

            if (hrefWithLocale.endsWith("/")) {
              hrefWithLocale = hrefWithLocale.slice(0, -1);
            }

            const active = pathname === hrefWithLocale;
            return (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                onClick={onClose}
                className={clsx(
                  "flex flex-col items-center justify-center",
                  {
                    "text-accent before:left-0 before:w-full before:bg-accent":
                      active,
                  },
                  {
                    "text-white before:left-[calc(50%-15px)] before:w-[30px] before:bg-white":
                      !active,
                  },
                )}
              >
                <Icon />
                <p className="text-sm">{t(link.label)}</p>
              </Link>
            );
          })}
        </div>
        <div className="mx-2 rounded-md bg-main px-3 py-3">
          <Link
            href={`/${locale}/auth`}
            onClick={onClose}
            className="flex flex-col items-center justify-center"
          >
            <TbLogin2 />
          </Link>
        </div>
      </nav>
    </motion.div>
  );
};

export default HeaderMobile;
