import Star7 from '@/assets/icons/landing-page/star7'
import React from 'react'

export default function AccordianListWhyIndia({children}) {
  return (
    <div className='text-[14px] sm:text-base pr-4 flex gap-[6px] md:gap-[18px] text-justify md:text-lg lg:text-xl  xl:text-[22px] leading-7   font-primary font-normal my-4 lg:my-8'>

      <div>
      <Star7/>
      </div>
      <div>
      {children}

      </div>
      
      </div>
  )
}
