import Arrow1 from "@/assets/icons/landing-page/arrow1";
import React from "react";
import BoxTheme from "../box-theme/box-theme";

export default function GetStartedButton({className,boxColor}) {
  return (
     <BoxTheme
        className={`${className} h-[65px] w-[205px] cursor-pointer`}
     
      boxStyle={
        `w-[200px] h-[62px] border-2 ${boxColor} rounded-[5px] border-primary-brown get`
      }
      bgBoxStyle={
        "w-[200px] h-[62px] rounded-[5px] bg-primary-brown  top-1 left-[5px] "
      }
    >
      <div className="flex items-center gap-1  ">
        <div className="font-medium text-xl">Get Started</div>
        <Arrow1 />
      </div>
    </BoxTheme>
  );
}
