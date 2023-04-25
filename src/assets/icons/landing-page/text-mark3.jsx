import React from "react";
import { motion } from "framer-motion";
function TextMark3(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={191}
      height={86}
      fill="none"
      {...props}
    >
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        stroke="#EAA24B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.078"
        d="M184.395 17.943C137.693-7.924 17.315-5.003 2.845 46.736-12.603 101.964 189 90.553 189 46.736c0-21.265-43.086-32.548-69.397-32.548"
      />
    </svg>
  );
}

export default TextMark3;
