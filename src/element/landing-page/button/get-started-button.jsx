import Arrow1 from "@/assets/icons/landing-page/arrow1";
import React, { useRef } from "react";
import BoxTheme from "../box-theme/box-theme";
import { motion } from "framer-motion";
import { PopupButton } from "@typeform/embed-react";
import { createPopup } from "@typeform/embed";
import "@typeform/embed/build/css/popup.css";

export default function GetStartedButton({ className, boxColor, hover, role }) {
  const openPopup = (event) => {
    if (role == 1) {
      createPopup("FDcDS1yK").open();
    } else {
      createPopup("LIowQUFE").open();
    }
  };

  return (
    <BoxTheme
      top="4px"
      left="5px"
      className={`${className} h-[47px] lg:h-[65px] w-fit cursor-pointer`}
      boxStyle={`w-[180px] lg:w-[200px] h-[52px] lg:h-[62px]  border-2 ${boxColor} relative overflow-hidden   rounded-[5px] border-primary-brown 
      before:content-[''] before:w-[237px] before:h-[300px] before:-top-[234px] before:-left-[17px] lg:before:w-[344px] lg:before:h-[379px] 
      before:rounded-[20px] before:absolute lg:before:-top-[284px] lg:before:-left-[36px] before:-z-1 before:bg-primary-orange
       ${hover ? "before:animate-circleFill before:bg-white" : ""}`}
      bgBoxStyle={
        "w-full lg:h-[62px] h-[52px] rounded-[5px] bg-primary-brown   "
      }
      isButton={true}
      onClick={() => openPopup()}
    >
      <div className="flex items-center gap-1  ">
        <div className="  font-primaryMedium text-base sm:text-lg  lg:text-xl">
          Request Invite
        </div>
        <motion.div
          animate={{
            translateX: [0, 9, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 0.3,
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        >
          <Arrow1 />
        </motion.div>
      </div>
    </BoxTheme>
  );
}
