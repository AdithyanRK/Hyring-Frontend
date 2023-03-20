import Arrow1 from "@/assets/icons/landing-page/arrow1";
import React from "react";
import BoxTheme from "../box-theme/box-theme";

export default function GetStartedButton({className,boxColor,hover}) {
  return (
     <BoxTheme
        className={`${className} h-[47px] lg:h-[65px] w-fit cursor-pointer`}
     
      boxStyle={
        `w-[180px] lg:w-[200px] h-[52px] lg:h-[62px] border-2 ${boxColor} rounded-[5px] border-primary-brown ${hover}`
      }
      bgBoxStyle={
        "w-full lg:h-[62px] h-[52px] rounded-[5px] bg-primary-brown  top-1 left-[5px] "
      }
    >
      <div className="flex items-center gap-1  ">
        <div className="font-medium text-base lg:text-xl">Get Started</div>
        <Arrow1 />
      </div>
    </BoxTheme>
  );
}
