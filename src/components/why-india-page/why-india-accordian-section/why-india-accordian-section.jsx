import React from 'react'
import WhyIndiaAccordian from './why-india-accordian'

export default function WhyIndiaAccordianSection() {
  return (
    <div className='mx-3 sm:mx-4 md:mx-6 lg:mx-8 pb-20'  >
        <div
        className="text-center text-[2rem] sm:text-[2.25rem] md:text-[2.5rem] my-16  lg:text-5xl  leading-[50px] 
        font-primaryBold px-5 "
      >
        Get It Done
      </div>
      <WhyIndiaAccordian/>
    </div>
  )
}
