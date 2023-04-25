import * as React from "react";
import { motion } from "framer-motion";
const DottedLine = (props) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <motion.path stroke="#462B34" strokeDasharray="8 8" d="M0 1h1100" />
  </motion.svg>
);
export default DottedLine;
