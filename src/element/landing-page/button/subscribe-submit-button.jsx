import Arrow from '@/assets/icons/landing-page/arrow'
import React from 'react'
import BoxTheme from '../box-theme/box-theme'


export default function SubscribeSubmitButton() {
  return (
    <BoxTheme
    className={"h-[56px] w-[56px] cursor-pointer"}
    boxStyle={
      "w-[52px] h-[52px] border bg-primary-orange rounded-[4px] border-primary-brown"
    }
    bgBoxStyle={
      "w-[52px] h-[52px]  rounded-[4px]  bg-primary-brown top-[4px] left-[4px]"
    }
  >
        <Arrow/>
  </BoxTheme>
  )
}
