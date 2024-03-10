import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type DashboardLinkProps = LinkProps & {
  children: React.ReactNode;
  href: string;
  Icon: any;
};

export const DashboardLink = ({
  href,
  children,
  Icon,
  ...props
}: DashboardLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      className="cursor group flex items-center gap-1"
      href={href}
    >
      <p
        className={clsx(
          "relative after:absolute after:-bottom-[2px] after:left-0 after:h-[2px] after:w-0 after:duration-500 group-hover:after:w-full",
          {
            "after:w-full after:bg-accent": pathname === href,
            "after:bg-white ": pathname !== href,
          },
        )}
      >
        {children}
      </p>
      <Icon
        className={clsx("text-3xl duration-200", {
          "text-accent": pathname === href,
        })}
      />
    </Link>
  );
};
