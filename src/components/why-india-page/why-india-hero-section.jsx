import TextMark3 from '@/assets/icons/landing-page/text-mark-3'
import WhyIndiaHeroSectionCard from '@/element/why-india-page/hero-section-why-india/card'
import React from 'react'

export default function WhyIndiaHeroSection() {


   
  return (
    <div className=' lg:w-[90vw] mx-auto mt-10 xl:mt-20 xl4:my-40 max-w-[1800px] my-0'>
      <h1 className="font-primaryMedium   justify-center text-[33px] md:text-[48px] lg:text-[58px] flex mx-auto  items-center flex-wrap ">
        <span className="whitespace-nowrap">Why</span>
        <span className="relative mx-[12px] xs:mx-[12px] md:mx-[20px]  lg:mx-[24px]">
          <span className="absolute -left-[48px]   -top-[18px] md:-left-[30px] md:-top-[5px]
           lg:-left-[13px] lg:-top-[2px] scale-[0.58] md:scale-[0.8] lg:scale-[1]  ">
            <TextMark3 />
          </span>
          India
        </span>

      </h1>
      <p className='text-center px-4 font-primary font-base  md:text-lg lg:text-xl xl:text-2xl max-w-[900px] my-5 mx-auto'>
      Hiring IT talent from India offers companies a unique combination of skilled professionals, cost-effective solutions, and global adaptability
      </p>




      <WhyIndiaHeroSectionCard />
    </div>
  )
}
