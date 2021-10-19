import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

const Motion = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
