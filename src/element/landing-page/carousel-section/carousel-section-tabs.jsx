import Star3 from "@/assets/icons/landing-page/star3";
import React from "react";
import BoxTheme from "../box-theme/box-theme";
import {
  useWindowHeight,
} from '@react-hook/window-size'
export default function CarouselSectionTabs({ className, color, text, index }) {
  const onlyHeight = useWindowHeight()
  if (onlyHeight == 0) {
    return " ";
  }

  return (
    <div className={`
    ${onlyHeight >= 440 && onlyHeight < 768 ? "py-2 " :" "}
    ${onlyHeight >= 768 ? "py-4 " :" "}
     w-fit`}>
      <BoxTheme
        top="7px"
        left="7px"
        className={`${className} h-[71px] w-fit cursor-pointer relative -ml-10 md:ml-10
        ${onlyHeight < 440 ? "scale-[0.6] md:-mx-16 " :" "}
        ${onlyHeight >= 440 && onlyHeight < 768 ? "scale-[0.65] sm:scale-[0.8] sm:mx-2" :" "}
        ${onlyHeight >= 768  ? "scale-[0.7] sm:scale-[0.8] md:scale-[0.9] lg:scale-[1] sm:mx-2" :" "}
          `}
        boxStyle={
          " h-[64px] border-2 bg-white rounded-[12px] border-primary-brown"
        }
        bgBoxStyle={`w-full h-[64px]  rounded-[12px] border-2 border-primary-brown  
          ${
            color === 1
              ? "bg-custom-blue"
              : color === 2
              ? "bg-custom-red"
              : color === 3
              ? "bg-custom-violet"
              : color === 4
              ? "bg-custom-green"
              : color === 5
              ? "bg-custom-yellow"
              : ""
          }`}
      >
        <p className="px-[25px] text-base font-primary xxxl:text-2xl">{text}</p>
        <div className="absolute -top-[20px] -left-[20px]">
          <div className="relative">
            <Star3
              className={` 
                  ${
                    color === 1
                      ? "fill-custom-blue"
                      : color === 2
                      ? "fill-custom-red"
                      : color === 3
                      ? "fill-custom-violet"
                      : color === 4
                      ? "fill-custom-green"
                      : color === 5
                      ? "fill-custom-yellow"
                      : ""
                  } animate-spin  `}
            />
            <div className="absolute top-[22%] left-[15px] text-medium font-primaryMedium  ">
              {index}
            </div>
          </div>
        </div>
      </BoxTheme>
    </div>
  );
}
