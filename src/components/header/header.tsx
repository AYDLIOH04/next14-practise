import { HeaderLink } from "./header-link";
import { SlPlaylist } from "react-icons/sl";

export const Header = () => {
  return (
    <header className="h-[70px] w-full bg-main">
      <div className="main-container flex h-full w-full items-center justify-between px-4 md:px-16">
        <div className="rounded-full border-2 border-accent p-2.5">
          <SlPlaylist size={25} />
        </div>
        <nav className="hidden items-center justify-start gap-10 md:flex">
          <HeaderLink href={"/"}>Home</HeaderLink>
          <HeaderLink href={"/about"}>About</HeaderLink>
          <HeaderLink href={"/contacts"}>Contacts</HeaderLink>
          <HeaderLink href={"/gallery"}>Photos</HeaderLink>
          <HeaderLink href={"/dashboard"}>Dashboard</HeaderLink>
          <HeaderLink href={"/auth"}>Login</HeaderLink>
        </nav>
      </div>
    </header>
  );
};
