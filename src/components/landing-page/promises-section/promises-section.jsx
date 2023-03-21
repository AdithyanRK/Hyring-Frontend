import React from "react";
import PromiseFramer from "@/element/landing-page/promise-section/promise-framer";
import HeartRed from "@/assets/icons/landing-page/heart-red";
import HeartBrown from "@/assets/icons/landing-page/heart-brown";
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
    <div className="my-10">
      <div className="flex justify-center items-center gap-1 flex-nowrap">
        <div className="flex justify-center items-center font-primaryMedium text-primary-brown text-[50px]">
          Our Promises
        </div>
        <div className="relative -top-2">
          <HeartRed className="z-1" />
          <HeartBrown className="absolute left-1 top-[3px] -z-1" />
        </div>
      </div>
      <PromiseFramer />
    </div>
  );
};

export default PromiseSection;
