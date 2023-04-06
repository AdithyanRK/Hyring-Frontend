import React from "react";
import PromiseFramer from "@/element/landing-page/promise-section/promise-framer";
// import { motion, useAnimation,useInView } from "framer-motion";
const PromiseSection = () => {
  // const ref = useRef(null);
  // const controls = useAnimation();
  // const entry = useInView(ref);
  // console.log("🚀 entry:", entry);
  // useEffect(() => {
  //   if (entry) {
  //     setData(item.id);
  //     controls.start("visible");
  //   }
  // }, [entry]);
  // const cardVariants = {
  //   hidden: {
  //     opacity: 0,
  //     y: "100%",
  //     transition: {
  //       duration: 5,
  //     },
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 1,
  //       ease: "easeInOut",
  //     },
  //   },
  // };
  return (
    <div className="mb-10 overflow-hidden">
      <PromiseFramer />
    </div>
  );
};

export default PromiseSection;
