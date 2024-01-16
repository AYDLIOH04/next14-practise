"use client";

import { motion, HTMLMotionProps } from "framer-motion";

type AnimateElementProps = {
  variants: any;
  children: React.ReactNode;
} & HTMLMotionProps<"div">;

export const AnimateElement = ({
  variants,
  children,
  ...props
}: AnimateElementProps) => {
  return (
    <motion.div variants={variants} initial="hidden" animate="show" {...props}>
      {children}
    </motion.div>
  );
};
