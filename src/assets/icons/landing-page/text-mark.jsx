import * as React from "react"
import { motion } from "framer-motion";

const TextMark = (props) => (
  <svg
    width={104}
    height={53}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <motion.path
     initial={{ pathLength: 0,opacity:0}}
     animate={{ pathLength: 1,opacity:1 }}
     transition={{ duration: 0.5,delay:.5 }}
      d="M99.538 11.527C74.563-3.93 10.19-2.185 2.452 28.733c-8.26 33.001 99.548 26.183 99.548 0 0-12.708-23.04-19.45-37.111-19.45"
      stroke="#EAA24B"
      strokeWidth={3.078}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default TextMark

