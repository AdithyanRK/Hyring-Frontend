import MeshSvg from "@/assets/icons/landing-page/mesh";
import Star1 from "@/assets/icons/landing-page/star1";
import Star2 from "@/assets/icons/landing-page/star2";
import React from "react";
import BoxTheme from "../box-theme/box-theme";

export default function CarouselSectionCard({
  text,
  Svg,
  boxStyleColor,
  starColor1,
  starColor2,
  starColor3,
}) {
  return (
    <BoxTheme
      className={"h-[156px] sm:h-[191px] md:h-[261px] lg:h-[323px] w-fit  cursor-pointer m-auto"}
      boxStyle={` h-[145px] sm:h-[180px] md:h-[250px] lg:h-[312px]
                  w-[260px]  xs:w-[360px] sm:w-[460px] md:w-[560px] lg:w-[700px] xl:w-[950px]  
                   border-2 ${boxStyleColor} rounded-[16px] border-primary-brown`}
      bgBoxStyle={`w-full h-[145px] sm:h-[180px] md:h-[250px] lg:h-[312px]  
                    rounded-[16px]  bg-primary-brown top-[6px] left-[5px] md:top-[11px] md:left-[9px]`}
    >
      <div className="flex  items-center justify-between w-full gap-1 md:gap-4 p-2 md:p-5">
        <div className="basis-3/5 ">
          <div className="relative">
            <Star2 className={`scale-[0.45] xs:scale-[0.5] md:scale-[0.8] lg:scale-[1] ${starColor1}`} />
            <Star1
              className={`ml-6 -mt-6 md:ml-9 md:-mt-4 scale-[0.45] md:scale-[0.8] lg:scale-[1]  ${starColor2}`}
            />
          </div>
          <div className="text-[16px] sm:text-[24px] md:text-[32px] lg:text-[46px] font-primary mt-3">{text}</div>
        </div>
        <div className="basis-2/5">
          <div className="relative flex items-center  justify-center scale-[0.35] md:scale-[0.6] lg:scale-[1] ">
            <MeshSvg className="absolute z-[10]" />
            <div className="absolute z-[20]">{Svg}</div>

            <Star2
              className={`absolute z-[30]  top-[70px] -left-[70px] lg:top-[80px] lg:left-[0px] fill-custom-red animate-scaleIn`}
            />
            <Star2
              className={`absolute z-[30] -top-[120px] -right-[60px] lg:-top-[130px] lg:right-[0px] ${starColor3} animate-scaleOut`}
            />
          </div>
        </div>
      </div>
    </BoxTheme>
  );
}
