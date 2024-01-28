"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Transition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  // if (pathname === "/auth") {
  //   return <div> { children }</div>;
  // }
  
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Transition;
