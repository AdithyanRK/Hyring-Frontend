import Star5 from '@/assets/icons/landing-page/star5'
import React from 'react'

export default function HeroList({children}) {
  return (
    <div className='font-primaryMedium font-medium text-base sm:text-lg flex items-center gap-3  my-5'><Star5 className="fill-custom-green"/> {children}</div>
  )
}
