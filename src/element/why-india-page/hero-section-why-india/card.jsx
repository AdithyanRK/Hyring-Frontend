import Star5 from "@/assets/icons/landing-page/star5";
import BoxTheme from "@/element/landing-page/box-theme/box-theme";
import React from "react";

export default function WhyIndiaHeroSectionCard() {
  const cardData = [
    {
      text1: "IT Professionals",
      text2: "4.14 Million",
      bg: "bg-custom-rose",
      fill: "fill-custom-rose",
    },
    {
      text1: "Currency",
      text2: "Indian Rupees ",
      bg: "bg-custom-yellow",
      fill: "fill-custom-yellow",
    },
    {
      text1: "Global IT Outsourcing Share",
      text2: "55%",
      bg: "bg-custom-red",
      fill: "fill-custom-red",
    },
    {
      text1: "Payroll Frequency",
      text2: "Monthly",
      bg: "bg-custom-sandal",
      fill: "fill-custom-sandal",
    },
    {
      text1: "GDP per Captia",
      text2: "$2256.59",
      bg: "bg-custom-green",
      fill: "fill-custom-green",
    },
    {
      text1: "Average Salary",
      text2: "$600/month",
      bg: "bg-custom-blue",
      fill: "fill-custom-blue",
    },
  ];
  return (
    <div className="grid grid-cols-2 px-1 gap-4 md:grid-cols-3 lg:gap-10 max-w-[400px] xs:max-w-[600px] md:max-w-[1200px] my-10 lg:my-20 mx-auto">
      {cardData.map((data, index) => (
        <BoxTheme
          top="8px"
          left="7px"
          key={index}
          className={
            "h-[87px] xs:h-[119px] md:h-[139px] lg:h-[171px]  w-fit  cursor-pointer m-auto"
          }
          boxStyle={` h-[78px] xs:h-[110px] md:h-[130px] lg:h-[162px] 
                  w-[160px]  xs:w-[200px] md:w-[240px] lg:w-[280px] xl:w-[334px]  !justify-start 
                   border-2  rounded-[10px] border-primary-brown bg-[#FDFDFD] `}
          bgBoxStyle={`w-full h-[78px] xs:h-[110px] md:h-[130px]  lg:h-[162px]  
                    rounded-[10px]  ${data.bg} border-2 border-primary-brown  `}
        >
          <div className="pl-2 xs:pl-4 md:pl-[24px]">
            <div
              className={`font-primaryLight  text-[12px] xs:text-[14px] md:text-lg lg:text-xl   flex items-center gap-1 xl:gap-3 `}
            >
              <Star5 className={data.fill} /> {data.text1}
            </div>

            <div className="font-primaryBold flex items-end xs:text-xl md:text-2xl xl:text-[34px] mt-1 md:mt-4">
              {data.text2} <span className={index == 1 ? "block text-[8px] xs:text-[10px] md:text-xs pb-1 ml-1 xs:pb-0 md:pb-1  xs:ml-2" : "hidden"}>(INR)</span>
            </div>
          </div>
        </BoxTheme>
      ))}
    </div>
  );
}
