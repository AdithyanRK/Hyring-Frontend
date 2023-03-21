import BoxTheme from '@/element/landing-page/box-theme/box-theme'
import React from 'react'
import PricingSectionAccordian from './pricing-section-accordian'

export default function PricingAccordian({className}) {
  return (
    <BoxTheme
        className={`${className} h-fit lg:h-[856px]  w-full cursor-pointer `}
        boxStyle={
          "h-fit lg:h-[845px] w-full border-2 bg-white rounded-[23px] border-primary-brown"
        }
        bgBoxStyle={
          " w-full h-full  lg:h-[845px]  rounded-[23px]  bg-primary-brown top-[11px] left-[9px]"
        }
      >
         <div className='w-full h-full p-3 md:p-12'>
            <PricingSectionAccordian />
         </div>
      </BoxTheme>
  )
}
