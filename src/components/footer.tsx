import { SlPlaylist } from "react-icons/sl";
import { FaRegCopyright } from "react-icons/fa6";
import { Dot } from "./dot";
import Link from "next/link";
import { FooterLink } from "./footer-link";

export const Footer = () => {
  return (
    <footer className="bg-header h-[280px] px-16 py-10">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-2">
          <SlPlaylist className="text-[40px] self-center" />
          <h3 className="text-[22px] self-center">
            Luck<span className="text-accent">ify</span>
          </h3>
          <p className="mt-1 flex flex-row gap-1 items-center text-[13px]">
            <FaRegCopyright className="text-[16px]" />
            Все права защищены
          </p>
        </div>
        <ul className="flex flex-row gap-16 text-[18px]">
          <li className="w-[250px]">
            <h3 className="mb-4 capitalize flex flex-row gap-1 font-semibold">
              contacts
              <Dot />
            </h3>
            <ul className="flex flex-col gap-1 text-[14px]">
              <FooterLink href={'https://www.youtube.com/'}>Instagram</FooterLink>
              <FooterLink href={'https://www.youtube.com/'}>Facebook</FooterLink>
              <FooterLink href={'https://www.youtube.com/'}>Twitter</FooterLink>
              <FooterLink href={'https://www.youtube.com/'}>Telegram</FooterLink>
              <FooterLink href={'https://www.youtube.com/'}>VKontakte</FooterLink>
            </ul>
          </li>
          <li className="w-[250px]">
            <h3 className="mb-4 capitalize flex flex-row gap-1 font-semibold">
              collaborative companies
              <Dot />
            </h3>
            <ul className="flex flex-col gap-1 text-[14px]">
              <FooterLink href={'https://www.youtube.com/'}>Apple</FooterLink>
              <FooterLink href={'https://www.youtube.com/'}>Google</FooterLink>
              <FooterLink href={'https://www.youtube.com/'}>Facebook</FooterLink>
              <FooterLink href={'https://www.youtube.com/'}>Vercel</FooterLink>
            </ul>
          </li>
          <li className="w-[250px]">
            <h3 className="mb-4 capitalize flex flex-row gap-1 font-semibold">
              Programming languages
              <Dot />
            </h3>
            <ul className="flex flex-col gap-1 text-[14px]">
              <FooterLink href={'https://www.youtube.com/'}>Golang</FooterLink>
              <FooterLink href={'https://www.youtube.com/'}>TypeScript</FooterLink>
              <FooterLink href={'https://www.youtube.com/'}>Rust</FooterLink>
              <FooterLink href={'https://www.youtube.com/'}>C#</FooterLink>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
};
