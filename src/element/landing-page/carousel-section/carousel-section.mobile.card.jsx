import MeshSvg from "@/assets/icons/landing-page/mesh";
import Star2 from "@/assets/icons/landing-page/star2";
import React from "react";
import BoxTheme from "../box-theme/box-theme";

export default function CarouselSectionMobileCard({
  text,
  content,
  Svg,
  boxStyleColor,
  starColor,
}) {
  return (
    <BoxTheme
      top="8px"
      left="7px"
      className={"h-[172px]  w-fit  cursor-pointer m-auto"}
      boxStyle={` h-[160px]
                  w-[290px] xs:w-[340px] sm:w-[400px] !justify-start
                   border-2 ${boxStyleColor} rounded-[16px] border-primary-brown`}
      bgBoxStyle={`w-[290px] xs:w-[340px] sm:w-[400px]  h-[160px] 
                    rounded-[16px]  bg-primary-brown  `}
    >
      {/* <div className="flex  items-center justify-between w-full gap-1 md:gap-4 p-2 md:p-5">
        <div className="basis-4/5 ">
          <div className="text-[16px]  font-primary mt-3">{text}</div>
          <div className="text-[12px]  font-primary mt-3">{content}</div>
        </div>
      </div> */}
      <div className="px-3 xs:p-5 flex flex-col justify-start items-start">
        <p className="scale-[0.35] h-10 text-left -ml-6"> {Svg}</p>
        <p className="text-base font-primaryMedium mt-3 leading-5 md:mt-10">
          {text}
        </p>
        <p className="text-xs mt-2 font-primaryLight">{content}</p>
      </div>
    </BoxTheme>
  );
}
