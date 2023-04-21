import Star8 from '@/assets/icons/landing-page/star8';
import React, { useState } from 'react'
import BoxTheme from '../landing-page/box-theme/box-theme';

export default function WhyIndiaSkillsCard({svg,children,color}) {
const [hover,setHover] =useState(false)

  return (
    <div>
      <BoxTheme
      top={"7px"}
      left={"5px"}
      className={` h-fit w-fit cursor-pointer  `}
      boxStyle={`w-[294px]  lg:w-[377px] h-[201px] lg:h-[258px]   border-2 bg-white rounded-[8px] border-primary-brown    `}
      bgBoxStyle={`w-[294px]  lg:w-[377px]  rounded-[8px] h-[201px] lg:h-[258px]  bg-primary-brown   `}
    >
      <div
        className="   font-primaryMedium    "
        onMouseEnter={() => {
            setHover(!hover);
          
        }}
        onMouseLeave={() => setHover(!hover)}
      >
        <div className="flex justify-center ">{svg}</div>
        <div className="text-lg text-center py-5 md:text-2xl lg:text-[26px] text-medium ">
          {children}
        </div>
       
      </div>
      <div className={`scale-[.7] lg:scale-[0.9] absolute  -top-6 -left-6 ${
            hover ? "block " : "hidden"
          } ${color}  `}>
        <Star8
         
        />
      </div>
    </BoxTheme>
    </div>
  )
}

 