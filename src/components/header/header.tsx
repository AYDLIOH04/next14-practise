import { HeaderLink } from "./header-link";
import { SlPlaylist } from "react-icons/sl";

export const Header = () => {
  return (
    <header className="w-full h-[70px] bg-main">
      <div className="md:px-16 px-4 flex items-center justify-between h-full w-full main-container">
        <div className="border-accent border-2 p-2.5 rounded-full">
          <SlPlaylist size={25}/>
        </div>
        <nav className="md:flex hidden justify-start items-center gap-10">
          <HeaderLink href={"/"}>Home</HeaderLink>
          <HeaderLink href={"/about"}>About</HeaderLink>
          <HeaderLink href={"/contacts"}>Contacts</HeaderLink>
          <HeaderLink href={"/photos"}>Photos</HeaderLink>
        </nav>
      </div>
    </header>
  );
};
