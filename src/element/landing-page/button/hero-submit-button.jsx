import RocketIcon from '@/assets/icons/landing-page/rocket'
import React from 'react'
import BoxTheme from '../box-theme/box-theme'
import { createPopup } from "@typeform/embed";
import "@typeform/embed/build/css/popup.css";


export default function HeroSubmitButton({className,switchValue}) {

  const openPopup = (event) => {
    if (!switchValue) {
      createPopup("FDcDS1yK").open();
    } else {
      createPopup("LIowQUFE").open();
    }
  };

  return (
    <BoxTheme
    top="5px"
      left="4px"
    className={`h-fit ${className} w-fit cursor-pointer`}
    boxStyle={
      "w-[46px] md:w-[56px] h-[45px] md:h-[57px] border bg-primary-orange rounded-[8px] border-primary-brown"
    }
    bgBoxStyle={
      "w-full h-[45px] md:h-[57px]  rounded-[8px]  bg-primary-brown "
    }
    isButton={true}
    onClick={()=>openPopup()}

  >
        <RocketIcon/>
  </BoxTheme>
  )
}
