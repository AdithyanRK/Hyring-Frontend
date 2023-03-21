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
      className={`${className} h-[313px]   lg:h-[398px] w-fit cursor-pointer  `}
      boxStyle={`w-[240px]  lg:w-[344px] h-[300px] lg:h-[379px] border-2 bg-white rounded-[20px] border-primary-brown    `}
      bgBoxStyle={`w-full h-[300px] lg:h-[379px]  rounded-[20px] ${
        hover ? "bg-primary-brown card-ani" : ""
      }   top-[13px] left-[9px] `}
    >
      <div className="w-full h-full px-4 lg:px-8 py-4 lg:py-12">
        <div>{svg}</div>
        <div className="text-lg md:text-2xl lg:text-[26px] text-medium">
          {title}
        </div>
        <div className="text-2xl   md:text-3xl lg:text-[40px] text-medium">
          ${price} <span className="text-base font-normal">{subText}</span>
        </div>
        <div
          onMouseEnter={() => setHover(!hover)}
          onMouseLeave={() => setHover(!hover)}
          className="w-fit "
        >
          <GetStartedButton
            className=" mt-14 md:mt-10 lg:mt-24 "
            hover="hover-bgCircle-fill"
          />
        </div>
      </div>
      <Star4
        className={`absolute -top-8 -left-8 scale-[0.] ${
          hover ? "block" : "hidden"
        } fill-${starColor} animate-spin`}
      />
      <div
        className={`overflow-hidden absolute top-0 rounded-[20px] w-full h-full  -z-1   ${
          hover ? "card-ani" : "hidden"
        }`}
      >
        <MeshSvg className={`scale-[1.9] ${`bg-${boxColor}`}  opacity-50 `} />
      </div>
    </BoxTheme>
  );
}
