import Link, { LinkProps } from "next/link";

type FooterLinkProps = LinkProps & {
  children: React.ReactNode;
};

export const FooterLink = ({ children, ...props }: FooterLinkProps) => {
  return (
    <li>
      <Link {...props} target="_blank" className="hover:text-accent duration-200">
        {children}
      </Link>
    </li>
  );
};
