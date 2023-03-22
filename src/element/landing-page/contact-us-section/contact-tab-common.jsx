import Arrow2 from "@/assets/icons/landing-page/arrow2";
import React from "react";
import BoxTheme from "../box-theme/box-theme";

export default function ContactTabCommon({
  className,
  text1,
  text2,
  icon,
  color,
}) {
  return (
    <BoxTheme
      className={`h-fit ${className} w-[95%] lg:w-[100%] mx-auto cursor-pointer mt-10   `}
      boxStyle={`w-full h-fit border-2 border-primary-brown bg-white rounded-[10px] ${
        color === 1
          ? "hover:before:bg-custom-blue"
          : color === 2
          ? "hover:before:bg-custom-dark-green"
          : color === 3
          ? " hover:before:bg-primary-orange"
          : ""
      }   contact-tab py-5 `}
      bgBoxStyle={
        "w-full h-full  rounded-[10px]  duration-300 delay-100 bg-primary-brown"
      }
    >
      <div className="flex gap-3 xl:gap-6 flex-wrap justify-center md:justify-start items-center text-xl md:text-3xl lg:text-4xl w-full h-full px-8">
        <div className=" md:delay-200 scale-[0.75]">{icon}</div>
        <div className=" font-primaryLight font-light  ">{text1}</div>
        <div className="font-primaryMedium font-medium ">{text2}</div>
        <div className=" grow hidden">
          <div className="relative w-full h-full">
          <div className="absolute -top-[8px] lg:-top-[10px]   arrow-bounce scale-[0.8] lg:scale-[1]">
            <Arrow2 />
          </div>
          </div>
          
        </div>
      </div>
    </BoxTheme>
  );
}
