import MeshSvg from "@/assets/icons/landing-page/mesh";
import Star4 from "@/assets/icons/landing-page/star4";
import { useScroll, useTransform } from "framer-motion";
import React, { useState } from "react";
import BoxTheme from "../box-theme/box-theme";
import GetStartedButton from "../button/get-started-button";

export default function PricingSectionCard({
  className,
  svg,
  title,
  price,
  subText,
  starColor,
  boxColor,
}) {
  const [hover, setHover] = useState(false);
  return (
    <BoxTheme
    disableAnimate={true}
      className={`${className} h-fit w-fit cursor-pointer  `}
      boxStyle={`w-[240px]  lg:w-[344px] h-fit  border-2 bg-white rounded-[20px] border-primary-brown    `}
      bgBoxStyle={`w-full h-full rounded-[20px] ${
        hover ? "bg-primary-brown animate-circleFill" : ""
      }   top-[13px] left-[9px] `}
    >
      <div className="w-full h-full px-7 lg:pl-11 lg:pr-6 py-7 lg:py-11 flex flex-col font-primaryMedium   gap-4 justify-center items-center md:items-start"   onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
         >
        <div>{svg}</div>
        <div className="text-lg md:text-2xl lg:text-[26px] text-medium ">{title}</div>
        <div className="text-2xl   md:text-3xl lg:text-[40px] text-medium text-center md:text-left">
          ${price} <span className="text-base ">{subText}</span>
        </div>
       
          <GetStartedButton
            className="md:mt-5 lg:mt-[70px] "
            hover={hover}
            boxColor="bg-primary-orange"
          />
      </div>
     <div className="scale-[.7] lg:scale-[0.9] absolute -top-8 -left-8 ">
     <Star4
        className={` ${
          hover ? "block" : "hidden"
        } fill-${starColor} animate-spin`}
      />
     </div>
      <div className={`overflow-hidden absolute top-0 rounded-[20px] w-full h-full   -z-1   ${
          hover ? "animate-circleFill" : "hidden"
        }`}>
      <MeshSvg className={`scale-[1.9] ${`bg-${boxColor}`} mt-8 opacity-50 `}/>

      </div>
    </BoxTheme>
  );
}
