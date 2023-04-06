import React from "react";
import SideBadge from "@/assets/icons/landing-page/number-badge";
import { motion } from "framer-motion";
const PromiseNumber = ({ id }) => {

  return (
    <>
      {id == 1 && (
        <motion.div className="relative z-1">
          <div className="bg-primary-brown absolute left-2 top-0 -z-1 rounded-3xl w-[120px] h-[120px]"></div>
          {/* <div className="bg-primary-brown rounded-xl absolute right-2"></div> */}
          <div className="bg-[#B8C8FF] border-[1px] border-primary-brown rounded-3xl text-[60px] px-6 py-2 z-3 w-[120px] h-[120px] flex justify-center items-center">
            <SideBadge className="absolute -left-8 -top-6 z-2" />
            <p className="pt-5 font-primaryMedium  "> 01</p>
          </div>
        </motion.div>
      )}
      {id == 2 && (
        <motion.div className="relative z-1">
          <div className="bg-primary-brown absolute left-2 top-0 -z-1 rounded-3xl w-[120px] h-[120px]"></div>
          {/* <div className="bg-primary-brown rounded-xl absolute right-2"></div> */}
          <div className="bg-[#B6ECCC] border-[1px] border-primary-brown rounded-3xl text-[60px] px-6 py-2 z-3 w-[120px] h-[120px] flex justify-center items-center">
            <SideBadge className="absolute -left-8 -top-6 z-2" />
            <p className="pt-5 font-primaryMedium  "> 02</p>
          </div>
        </motion.div>
      )}
      {id == 3 && (
        <div className="relative z-1">
          <div className="bg-primary-brown absolute left-2 top-0 -z-1 rounded-3xl w-[120px] h-[120px]"></div>
          {/* <div className="bg-primary-brown rounded-xl absolute right-2"></div> */}
          <div className="bg-[#FFF5B7] border-[1px] border-primary-brown rounded-3xl text-[60px] px-6 py-2 z-3 w-[120px] h-[120px] flex justify-center items-center">
            <SideBadge className="absolute -left-8 -top-6 z-2" />
            <p className="pt-5 font-primaryMedium  "> 03</p>
          </div>
        </div>
      )}
      {id == 4 && (
        <div className="relative z-1">
          <div className="bg-primary-brown absolute left-2 top-0 -z-1 rounded-3xl w-[120px] h-[120px]"></div>
          {/* <div className="bg-primary-brown rounded-xl absolute right-2"></div> */}
          <div className="bg-[#FDB2B2] border-[1px] border-primary-brown rounded-3xl text-[60px] px-6 py-2 z-3 w-[120px] h-[120px] flex justify-center items-center">
            <SideBadge className="absolute -left-8 -top-6 z-2" />
            <p className="pt-5 font-primaryMedium  "> 04</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PromiseNumber;
