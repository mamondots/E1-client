"use client";

import { motion } from "framer-motion";
const CountdownBox = ({ label, value }: { label: string; value: string }) => {
  console.log(label);
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex flex-col items-center lg:bg-primary  lg:p-2 rounded border border-white/40"
    >
      <motion.span
        key={value}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-lg font-bold tracking-wider lg:text-white text-primary"
      >
        {value}
      </motion.span>
      <span className="text-[10px] uppercase text-white/70 hidden lg:block">
        {label}
      </span>
    </motion.div>
  );
};

export default CountdownBox;
