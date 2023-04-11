import Arrow1 from "@/assets/icons/landing-page/arrow1";
import React from "react";
import BoxTheme from "../box-theme/box-theme";
import { motion } from "framer-motion"
export default function KnowMoreButton() {
  return (
      <BoxTheme
      top="8px"
      left="7px"
        className={`h-[57px] lg:h-[65px] w-fit cursor-pointer`}
        boxStyle={`w-[180px] lg:w-[200px] h-[52px] lg:h-[62px] border-[3px] bg-primary-brown   rounded-[5px] border-custom-sandal animate-glow`}
        bgBoxStyle={
          "w-full h-[52px] lg:h-[62px]  rounded-[5px] bg-primary-brown border-2 border-custom-sandal"
        }
      isButton={true}

      >
        <div className="flex items-center gap-1">
          <div className="  font-primaryMedium text-base sm:text-lg lg:text-xl text-custom-sandal">
            Know More
          </div>
          <motion.div
           animate={{
            translateX:[0,9,0]
            
           }}
          transition={{duration:1.5,delay:0.3 ,repeat: Infinity ,repeatDelay:0.5 }}><Arrow1 className="fill-custom-sandal" /></motion.div>
        </div>
      </BoxTheme>
  );
}
