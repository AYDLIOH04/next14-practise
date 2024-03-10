import { navLinks } from "@/constants";
import { useClickOutside, useOverflowEffect } from "@/hooks";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { TbLogin2 } from "react-icons/tb";

const mobileNavVariants = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

type HeaderMobileProps = {
  open: boolean;
  setOpen: any;
};

const HeaderMobile = ({ open, setOpen }: HeaderMobileProps) => {
  const ref = useRef(null);

  const onClose = () => {
    setOpen(false);
  };

  useOverflowEffect("nav-scroll-disabled", [open]);
  useClickOutside(onClose, ref);

  return (
    <motion.div
      ref={ref}
      variants={mobileNavVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{ duration: 0.3 }}
      className="fixed right-0 top-24 z-[100] flex items-center justify-start gap-10 lg:hidden"
    >
      <nav className="flex flex-col gap-4 text-4xl">
        <div className="flex flex-col gap-5 rounded-l-md bg-main px-2 py-3">
          {navLinks.slice(0, -1).map(({ Icon, ...link }) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="flex flex-col items-center justify-center"
            >
              <Icon />
              <p className="text-sm">{link.label}</p>
            </Link>
          ))}
        </div>
        <div className="mx-2 rounded-md bg-main px-3 py-3">
          <Link
            href={"/auth"}
            onClick={onClose}
            className="flex flex-col items-center justify-center"
          >
            <TbLogin2 />
          </Link>
        </div>
      </nav>
    </motion.div>
  );
};

export default HeaderMobile;
