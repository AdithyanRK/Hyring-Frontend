import * as React from "react";
import { motion } from "framer-motion";
const SmileExpression = (props) => (
  <svg
    width="38"
    height="35"
    viewBox="0 0 38 35 "
    {...props}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      d="M1.37936 22.9708L6.23047 1"
      stroke="#462B34"
      stroke-width="2"
      stroke-linecap="round"
    />
    <motion.path
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      d="M15.3764 33.0891L36.7305 26"
      stroke="#462B34"
      stroke-width="2"
      stroke-linecap="round"
    />
    <motion.path
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      d="M10.3801 24.5635L20.0078 14"
      stroke="#462B34"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);

export default SmileExpression;
