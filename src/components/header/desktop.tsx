import { navLinks } from "@/constants";
import { HeaderLink } from "./link";

const HeaderDesktop = () => {
  return (
    <nav className="hidden items-center justify-start gap-10 lg:flex">
      {navLinks.map(({ href, label }) => (
        <HeaderLink key={href} href={href}>{label}</HeaderLink>
      ))}
    </nav>
  );
};

export default HeaderDesktop;
