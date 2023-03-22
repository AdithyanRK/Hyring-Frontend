import Star3 from '@/assets/icons/landing-page/star3'
import React from 'react'
import BoxTheme from '../box-theme/box-theme'

export default function CarouselSectionTabs({className,color,text,index}) {
  return (
   <div className={"py-8 w-fit"}>
     <BoxTheme
        className={`${className} h-[71px] w-fit cursor-pointer relative ml-10 scale-[0.7] sm:scale-[0.8] md:scale-[0.9] lg:scale-[1] `}
        boxStyle={
          " h-[64px] border-2 bg-white rounded-[12px] border-primary-brown"
        }
        bgBoxStyle={
          `w-full h-[64px]  rounded-[12px] border-2 border-primary-brown  top-[7px] left-[7px] 
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
              ? "bg-custom-yellow" :""
          }`
        }
      >
        <p className='px-[25px] text-base font-primary' >{text}</p>
        <div className='absolute -top-[20px] -left-[20px]'>
                <div className='relative'>
                <Star3 className={` 
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
                    ? "fill-custom-yellow" :""
                } animate-spin  `}/>
                <div className='absolute top-1/4 left-[16px] text-medium font-primaryMedium  '>{index }</div>
                </div>
        </div>
      </BoxTheme>
   </div>
  )
}
