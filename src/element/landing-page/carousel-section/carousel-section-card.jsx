import MeshSvg from "@/assets/icons/landing-page/mesh";
import Star1 from "@/assets/icons/landing-page/star1";
import Star2 from "@/assets/icons/landing-page/star2";
import React from "react";
import BoxTheme from "../box-theme/box-theme";
import { useWindowHeight } from "@react-hook/window-size";

export default function CarouselSectionCard({
  text,
  Svg,
  boxStyleColor,
  starColor1,
  starColor2,
  starColor3,
  starColor4,
  subText,
}) {
  const onlyHeight = useWindowHeight();
  if (onlyHeight == 0) {
    return " ";
  }

  return (
    <BoxTheme
      top="7px"
      left="5px"
     
      className={`      
      ${onlyHeight < 440 ? "h-[168px] " : " "}
      ${onlyHeight >= 440 && onlyHeight < 540 ? "h-[208px] " : " "}
      ${onlyHeight >= 540 && onlyHeight < 640 ? "h-[238px] " : " "}
      ${onlyHeight >= 640 && onlyHeight < 768 ? "h-[268px] " : " "}
      ${onlyHeight >= 768 && onlyHeight < 1024 ? "h-[308px] " : " "}  
      ${onlyHeight >= 1024 ? "h-[308px] " : " "}  

           w-fit  cursor-pointer m-auto`}
      boxStyle={`
      ${onlyHeight < 440 ? "h-[160px] " : " "}
      ${onlyHeight >= 440 && onlyHeight < 540 ? " h-[200px]" : " "}
      ${onlyHeight >= 540 && onlyHeight < 640 ? " h-[230px]" : " "}
      ${onlyHeight >= 640 && onlyHeight < 768 ? " h-[260px]" : " "}
      ${onlyHeight >= 768 && onlyHeight < 1024 ? "h-[300px] " : " "}  
      ${onlyHeight >= 1024 ? "h-[300px] " : " "}  

       
                  w-[310px]   xxs:w-[325px] xs:w-[380px] sm:w-[480px] md:w-[580px] lg:w-[700px] xl:w-[950px]  
                   border-2 ${boxStyleColor} rounded-[16px] border-primary-brown`}
      bgBoxStyle={`
      ${onlyHeight < 540 ? "h-[160px] " : " "}
      ${onlyHeight >= 440 && onlyHeight < 540 ? "h-[200px] " : " "}
      ${onlyHeight >= 540 && onlyHeight < 640 ? "h-[230px] " : " "}
      ${onlyHeight >= 640 && onlyHeight < 768 ? "h-[260px] " : " "}
      ${onlyHeight >= 768 && onlyHeight < 1024 ? "h-[300px] " : " "}  
      ${onlyHeight >= 1024 ? "h-[300px] " : " "}  

      w-full  
                    rounded-[16px]  bg-primary-brown  `}
    >
      <div className="flex  items-center justify-between w-full gap-1 md:gap-4 p-2 md:p-5">
        <div className="basis-4/5">
          <div className="relative flex">
            <Star2
              className={`
              ${onlyHeight < 440 ? " scale-[0.45]  " : " "}
              ${
                onlyHeight >= 440 && onlyHeight < 540
                  ? " scale-[0.45] md:scale-[0.6]   "
                  : " "
              }
              ${
                onlyHeight >= 540 && onlyHeight < 640
                  ? " scale-[0.45] xs:scale-[0.5] md:scale-[0.8]   "
                  : " "
              }
              ${onlyHeight >= 640 ? " scale-[0.45] xs:scale-[0.5] md:scale-[0.8] lg:scale-[0.9]   " : " "}
              
              ${starColor1}`}
            />
            <Star1
              className={`
              
              ${onlyHeight < 440 ? "scale-[0.45]  " : " "}
          ${
            onlyHeight >= 440 && onlyHeight < 540
              ? " scale-[0.45] md:scale-[0.6]   "
              : " "
          }
          ${
            onlyHeight >= 540 && onlyHeight < 640
              ? "sm:ml-6 sm:-mt-6  scale-[0.45] md:scale-[0.8]  "
              : " "
          }
          ${
            onlyHeight >= 640
              ? "sm:ml-6 sm:-mt-6 md:ml-9 md:-mt-4 scale-[0.45] md:scale-[0.8] lg:scale-[0.9]   "
              : " "
          }
              
                ${starColor2}`}
            />
          </div>

          <div
            className={`
          ${onlyHeight < 440 ? "text-base sm:text-xl " : " "}
          ${
            onlyHeight >= 440 && onlyHeight < 540
              ? "text-xl sm:text-2xl mt-2 "
              : " "
          }
          ${
            onlyHeight >= 540 && onlyHeight < 640
              ? "text-xl xs:text-2xl  lg:text-3xl mt-3 "
              : " "
          }
          ${onlyHeight >= 640 ? "text-xl xs:text-2xl  lg:text-4xl mt-3  lg:mt-5  " : " "}

           font-primary `}
          >
            {text}
          </div>
          <div
            className={`
           ${onlyHeight < 440 ? "text-xs   md:text-base " : " "}
           ${
             onlyHeight >= 440 && onlyHeight < 540
               ? "text-xs  xs:text-base  md:text-lg   "
               : " "
           }
           ${
             onlyHeight >= 540 && onlyHeight < 640
               ? "text-xs  xs:text-base  md:text-lg   "
               : " "
           }
           ${onlyHeight >= 640 ? "text-xs  xs:text-base  md:text-lg  lg:leading-[25px]  " : " "}
 
            font-primaryLight mt-3 `}
          >
            {subText}
          </div>
        </div>
        <div className="basis-2/5">
          <div
            className={`relative flex items-center  justify-center
          ${onlyHeight < 440 ? "scale-[0.35] " : " "}
          ${
            onlyHeight >= 440 && onlyHeight < 768
              ? "scale-[0.35] sm:scale-[0.45] lg:scale-[0.6] "
              : " "
          }
          ${
            onlyHeight >= 768
              ? "scale-[0.35] xs:scale-[0.5] sm:scale-[0.5] lg:scale-[0.7]"
              : " "
          } 
            `}
          >
            <MeshSvg className="absolute z-[10]" />
            <div className="absolute z-[20]">{Svg}</div>
            <Star2
              className={`absolute z-[30] 
              ${onlyHeight < 440 ? " top-36 -left-32 " : " "}
              ${
                onlyHeight >= 440 && onlyHeight < 768
                  ? " top-36 -left-32 lg:top-24 lg:-left-16 "
                  : " "
              }
              ${
                onlyHeight >= 768
                  ? " top-36 -left-28  lg:top-[120px] lg:-left-[40px]"
                  : " "
              } 
              ${starColor3}  animate-scaleIn`}
            />
            <Star2
              className={`absolute z-[30]
              ${onlyHeight < 440 ? "-top-44 -right-24  " : " "}
              ${
                onlyHeight >= 440 && onlyHeight < 768
                  ? "-top-44 -right-24 lg:-top-[130px] lg:-right-10  "
                  : " "
              }
              ${
                onlyHeight >= 768
                  ? "-top-44 -right-16  lg:-top-[150px] lg:-right-[10px]"
                  : " "
              }   ${starColor4}  animate-scaleOut`}
            />
          </div>
        </div>
      </div>
    </BoxTheme>
  );
}
