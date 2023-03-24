import Arrow from "@/assets/icons/landing-page/arrow";
import React from "react";
import BoxTheme from "../box-theme/box-theme";
import { motion } from "framer-motion";

export default function SignUpButton() {
  return (
      <BoxTheme
        className={"lg:h-[57px] w-full lg:w-[160px] cursor-pointer"}
        boxStyle={
          "w-full md:w-[140px]  lg:w-[155px] h-[42px] lg:h-[52px] border bg-custom-green rounded-[4px] border-primary-brown animate-glow"
        }
        bgBoxStyle={
          "w-full md:w-[140px] lg:w-[155px] h-[42px] lg:h-[52px] border-2 rounded-[4px] bg-  custom-bg border-primary-brown top-1 left-[5px]"
        }
      isButton={true}
        width={"w-full"}
      >
        <div className="flex items-center gap-1   ">
          <div className="  font-primaryMedium text-lg  md:text-xl">Sign Up</div>
          <motion.div
           animate={{
            translateX:[0,9,0]
            
           }}
          transition={{duration:1.5,delay:0.3 ,repeat: Infinity ,repeatDelay:0.5 }}><Arrow /></motion.div>
        </div>
      </BoxTheme>
  );
}
