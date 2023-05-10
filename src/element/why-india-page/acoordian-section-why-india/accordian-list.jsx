import Star1 from '@/assets/icons/landing-page/star1'
import React from 'react'

export default function AccordianListWhyIndia({ children }) {
  return (
    <div className='text-[14px] sm:text-base pr-4 flex gap-[6px] md:gap-[18px] text-justify leading-7   font-primary font-normal my-4 '>

      <div>
      <Star1/>
      </div>
      <div>{children}</div>
    </div>
  );
}
