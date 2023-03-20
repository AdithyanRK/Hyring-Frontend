import Arrow from "@/assets/icons/landing-page/arrow";
import BoxTheme from "../box-theme/box-theme";

export default function SliderButton({IconRotate,className}) {
  return (
    <BoxTheme
        className={`${className} h-[54px] w-[55px] cursor-pointer`}
        boxStyle={
          "w-[52px] h-[52px] border bg-primary-orange rounded-[44px] border-primary-brown"
        }
        bgBoxStyle={
          "w-[52px] h-[52px]  rounded-[44px]  bg-primary-brown top-[2px] left-[3px]"
        }
      >
          <Arrow className={IconRotate}/>
      </BoxTheme>
  )
}
