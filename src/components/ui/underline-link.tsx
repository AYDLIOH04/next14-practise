import Link, { LinkProps } from "next/link";

type UnderlineLinkProps = LinkProps & {
  href: string;
  children: React.ReactNode;
};

const UnderlineLink = ({ href, children, ...props }: UnderlineLinkProps) => {
  return (
    <Link
      href={href}
      className="relative after:absolute after:-bottom-[2px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:duration-500 hover:after:w-full"
      {...props}
    >
      {children}
    </Link>
  );
};

export default UnderlineLink;
