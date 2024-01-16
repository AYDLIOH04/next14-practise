import { HeaderLink } from "./header-link";

export const Header = () => {
  return (
    <header className="w-full h-[70px] bg-header flex items-center justify-between">
      <nav className="px-16 flex justify-start items-center gap-10">
        <HeaderLink href={"/"}>Home</HeaderLink>
        <HeaderLink href={"/about"}>About</HeaderLink>
        <HeaderLink href={"/contacts"}>Contacts</HeaderLink>
        <HeaderLink href={"/photos"}>Photos</HeaderLink>
      </nav>
    </header>
  );
};
