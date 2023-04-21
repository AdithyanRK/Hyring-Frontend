import BoxTheme from '@/element/landing-page/box-theme/box-theme'
import React from 'react'
import PricingSectionAccordian from './pricing-section-accordian'

export default function PricingAccordian({className,hoverChange}) {
  return (
    <BoxTheme
    top="11px"
    left="9px"
        className={`${className} h-fit md:h-[720px] lg:h-[920px]   w-full cursor-pointer `}
        boxStyle={
          "h-full  w-full border-2 bg-white rounded-[23px] border-primary-brown"
        }
        bgBoxStyle={
          " w-full h-full  rounded-[23px]  bg-primary-brown "
        }
      >
         <div className='w-full h-full p-3 md:px-5 lg:px-5 md:py-6'>
            <PricingSectionAccordian hoverChange={hoverChange} />
         </div>
      </BoxTheme>
  )
}
