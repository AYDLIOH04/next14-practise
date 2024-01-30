"use client";

import { useState } from "react";
import HeaderBurger from "./burger";
import { SlPlaylist } from "react-icons/sl";
import HeaderDesktop from "./desktop";
import HeaderMobile from "./mobile";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[10] h-[100vh] bg-black/10 backdrop-blur-sm" />
      )}
      <header className="h-[70px] w-full bg-main">
        <div className="main-container flex h-full w-full items-center justify-between px-4 md:px-8 lg:px-16">
          <div className="rounded-full border-2 border-accent p-2.5 z-[100]">
            <SlPlaylist size={25} />
          </div>
          <HeaderBurger open={open} setOpen={setOpen} />
          <HeaderDesktop />
          <AnimatePresence mode="wait">
            {open && <HeaderMobile open={open} setOpen={setOpen} />}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Header;
