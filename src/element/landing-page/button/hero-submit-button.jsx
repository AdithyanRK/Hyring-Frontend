import RocketIcon from '@/assets/icons/landing-page/rocket'
import React from 'react'
import BoxTheme from '../box-theme/box-theme'

export default function HeroSubmitButton({className}) {
  return (
    <BoxTheme
    className={`h-[60px] ${className} w-[60px] cursor-pointer`}
    boxStyle={
      "w-[56px] h-[57px] border bg-primary-orange rounded-[8px] border-primary-brown"
    }
    bgBoxStyle={
      "w-[56px] h-[57px]  rounded-[8px]  bg-primary-brown top-[5px] left-[4px]"
    }
  >
        <RocketIcon/>
  </BoxTheme>
  )
}
