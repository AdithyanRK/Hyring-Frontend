import Arrow from "@/assets/icons/landing-page/arrow";
import BoxTheme from "../box-theme/box-theme";

export default function SliderButton({IconRotate,className}) {
  return (
    <BoxTheme
    top="2px"
      left="3px"
        className={`${className} h-[54px] w-[55px] cursor-pointer xxxl:h-[64px] xxxl:w-[64px]`}
        boxStyle={
          "w-[52px] h-[52px] border bg-primary-orange rounded-[44px] border-primary-brown 2xl:w-[64px] 2xl:h-[64px] xxxl:h-[61px] xxxl:w-[61px]"
        }
        bgBoxStyle={
          "w-[52px] h-[52px]  rounded-[44px]  bg-primary-brown 2xl:w-[64px] 2xl:h-[64px] xxxl:h-[61px] xxxl:w-[61px]"
        }
      >
          <Arrow className={IconRotate}/>
      </BoxTheme>
  )
}
