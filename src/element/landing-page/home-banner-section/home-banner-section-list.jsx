import Star5 from '@/assets/icons/landing-page/star5'
import React from 'react'

export default function HeroList({children,className}) {
  return (
    <div className={`font-primaryMedium ${className} text-base sm:text-[13px] md:text-[18px] lg:text-[18px]  xl:text-[18px] xl3:text-[19px]   flex items-center gap-1 my-5 xl:my-8`}><Star5 className="fill-custom-green"/> {children}</div>
  )
}
