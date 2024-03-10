import { SlPlaylist } from "react-icons/sl";
import { FaRegCopyright } from "react-icons/fa6";
import { Dot } from "../ui/dot";
import { FooterLink } from "./link";

export const Footer = () => {
  return (
    <footer className="min-h-[240px] bg-main px-16 py-10">
      <div className="main-container flex flex-col items-center justify-between gap-10 xl:flex-row xl:gap-0">
        <div className="flex flex-col gap-2">
          <SlPlaylist className="self-center text-[40px]" />
          <h3 className="self-center text-[22px]">
            Luck<span className="text-accent">ify</span>
          </h3>
          <p className="mt-1 flex flex-row items-center gap-1 text-[13px]">
            <FaRegCopyright className="text-[16px]" />
            Все права защищены
          </p>
        </div>
        <ul className="flex flex-col gap-8 text-center text-[18px] lg:flex-row lg:text-start xl:gap-16">
          <li className="w-[250px]">
            <h3 className="mb-4 flex flex-row justify-center gap-1 font-semibold capitalize lg:justify-normal">
              contacts
              <Dot />
            </h3>
            <ul className="flex flex-col gap-1 text-[14px]">
              <FooterLink href={"https://www.youtube.com/"}>
                Instagram
              </FooterLink>
              <FooterLink href={"https://www.youtube.com/"}>
                Facebook
              </FooterLink>
              <FooterLink href={"https://www.youtube.com/"}>Twitter</FooterLink>
              <FooterLink href={"https://www.youtube.com/"}>
                Telegram
              </FooterLink>
              <FooterLink href={"https://www.youtube.com/"}>
                VKontakte
              </FooterLink>
            </ul>
          </li>
          <li className="w-[250px]">
            <h3 className="mb-4 flex flex-row justify-center gap-1 font-semibold capitalize lg:justify-normal">
              collaborative companies
              <Dot />
            </h3>
            <ul className="flex flex-col gap-1 text-[14px]">
              <FooterLink href={"https://www.youtube.com/"}>Apple</FooterLink>
              <FooterLink href={"https://www.youtube.com/"}>Google</FooterLink>
              <FooterLink href={"https://www.youtube.com/"}>
                Facebook
              </FooterLink>
              <FooterLink href={"https://www.youtube.com/"}>Vercel</FooterLink>
            </ul>
          </li>
          <li className="w-[250px]">
            <h3 className="mb-4 flex flex-row justify-center gap-1 font-semibold capitalize lg:justify-normal">
              Programming languages
              <Dot />
            </h3>
            <ul className="flex flex-col gap-1 text-[14px]">
              <FooterLink href={"https://www.youtube.com/"}>Golang</FooterLink>
              <FooterLink href={"https://www.youtube.com/"}>
                TypeScript
              </FooterLink>
              <FooterLink href={"https://www.youtube.com/"}>Rust</FooterLink>
              <FooterLink href={"https://www.youtube.com/"}>C#</FooterLink>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
};
