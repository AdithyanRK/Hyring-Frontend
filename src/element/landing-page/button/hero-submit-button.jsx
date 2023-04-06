import RocketIcon from '@/assets/icons/landing-page/rocket'
import React from 'react'
import BoxTheme from '../box-theme/box-theme'

export default function HeroSubmitButton({className}) {
  return (
    <BoxTheme
    top="5px"
      left="4px"
    className={`h-fit ${className} w-fit cursor-pointer`}
    boxStyle={
      "w-[46px] md:w-[56px] h-[47px] md:h-[57px] border bg-primary-orange rounded-[8px] border-primary-brown"
    }
    bgBoxStyle={
      "w-full h-[47px] md:h-[57px]  rounded-[8px]  bg-primary-brown "
    }
    isButton={true}
    

  >
        <RocketIcon/>
  </BoxTheme>
  )
}
