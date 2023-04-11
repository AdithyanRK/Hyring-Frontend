import MeshSvg from "@/assets/icons/landing-page/mesh";
import Star2 from "@/assets/icons/landing-page/star2";
import React from "react";
import BoxTheme from "../box-theme/box-theme";
import Star4 from "@/assets/icons/landing-page/star4";

export default function CarouselSectionMobileCard({
  text,
  content,
  Svg,
  boxStyleColor,
  starColor,
}) {
  return (
   <div className="pt-10 md:pt-2 lg:pt-3 xl4:pt-4">
     <BoxTheme
      top="7px"
      left="7px"
      className={" h-[280px] md:h-[270px] lg:h-[330px]   xl3:h-[370px] xl4:h-[445px]     w-fit  cursor-pointer m-auto"}
      boxStyle={` h-[240px] md:h-[240px] lg:h-[300px]  xl3:h-[340px] xl4:h-[415px]
                  w-[290px] xs:w-[340px] sm:w-[400px] md:w-[340px] lg:w-[500px] xl3:w-[610px] xl3:w-[650px] !justify-start
                   border-2 ${boxStyleColor} rounded-[16px] border-primary-brown`}
      bgBoxStyle={`w-[290px] xs:w-[340px] sm:w-[400px] md:w-[340px] lg:w-[500px] xl3:w-[610px] xl3:w-[650px]
                    h-[240px] md:h-[240px] lg:h-[300px] xl3:h-[340px]  xl4:h-[415px]
                    rounded-[16px]  bg-primary-brown  `}
    >
       <div className="scale-[0.6] md:scale-[.7] lg:scale-[0.9] xl4:scale-[1] absolute -top-8 -right-8 ">
              <Star4 className={`${starColor} animate-spin`} />
            </div>
      <div className="pl-5  sm:pl-10 md:pl-7 lg:pl-8 pr-2 lg:pr-5 lg:py-5  flex flex-col  justify-start items-start">
        <div className="scale-[0.6] lg:scale-[0.8] xl3:scale-[1] h-10 text-left -ml-5 lg:-ml-0 "> {Svg}</div>
        <p className="sm:text-xl mdtext-lg lg:text-2xl xl3:text-3xl xl4:text-5xl font-primaryMedium mt-3  leading-5 pt-8 md:pt-10 lg:pt-16 xl3:pt-24">
          {text}
        </p>
        <p className="text-base mt-2 md:text-[14px] lg:text-lg xl4:text-[26px] xl4:pt-5 font-primaryLight">{content}</p>
      </div>
    </BoxTheme>
   </div>
  );
}
