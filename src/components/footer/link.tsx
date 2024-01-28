import Link, { LinkProps } from "next/link";

type FooterLinkProps = LinkProps & {
  children: React.ReactNode;
};

export const FooterLink = ({ children, ...props }: FooterLinkProps) => {
  return (
    <li>
      <Link
        {...props}
        target="_blank"
        className="duration-200 hover:text-accent"
      >
        {children}
      </Link>
    </li>
  );
};
