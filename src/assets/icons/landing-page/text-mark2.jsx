import { motion } from "framer-motion";

const TextMark2 = (props) => (
  <svg
    width={289}
    height={105}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <motion.path
     initial={{ pathLength: 0,opacity:0}}
     animate={{ pathLength: 1,opacity:1 }}
     transition={{ duration: 0.5,delay:.5 }}
      d="M278.281 25.104C207.283-5.892 19.871-8.963 4.5 55c-15.5 64.5 280.782 57.107 280.781 4.603 0-25.48-65.499-39-105.499-39"
      stroke="#EAA24B"
      strokeWidth={6}
      strokeLinecap="round"
      strokeLinejoin="round"
      
    />
  </svg>
)

export default TextMark2
