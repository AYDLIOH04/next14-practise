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
        "transition duration-300 before:duration-300 relative before:absolute before:h-[2px] before:-bottom-1 hover:text-accent before:hover:bg-accent",
        { "before:w-full before:left-0 before:bg-accent text-accent": active },
        { "before:w-[30px] before:left-[calc(50%-15px)] before:bg-white text-white": !active },
      )}
    >
      {children}
    </Link>
  );
};
