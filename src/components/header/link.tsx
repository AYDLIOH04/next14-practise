"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
type HeaderLinkProps = LinkProps & {
  children: React.ReactNode;
  href: string;
};

export const HeaderLink = ({ children, href, ...props }: HeaderLinkProps) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      {...props}
      className={clsx(
        "relative uppercase transition duration-300 before:absolute before:-bottom-1 before:h-[2px] before:duration-300 hover:text-accent before:hover:bg-accent",
        { "text-accent before:left-0 before:w-full before:bg-accent": active },
        {
          "text-white before:left-[calc(50%-15px)] before:w-[30px] before:bg-white":
            !active,
        },
      )}
    >
      {children}
    </Link>
  );
};
