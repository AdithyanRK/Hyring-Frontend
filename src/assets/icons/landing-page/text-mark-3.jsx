import { motion } from "framer-motion";

const TextMark3 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={175}
    height={83}
    fill="none"
    {...props}
  >
    <motion.path
      stroke="#EAA24B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      initial={{ pathLength: 0,opacity:0}}
      animate={{ pathLength: 1,opacity:1 }}
      transition={{ duration: 0.5,delay:1}}
      d="M168.789 17.36C126.082-7.56 16.005-4.747 2.772 45.1-11.353 98.305 173 87.313 173 45.099c0-20.487-39.399-31.357-63.46-31.357"
    />
  </svg>
)
export default TextMark3

