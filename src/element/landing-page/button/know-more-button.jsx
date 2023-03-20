import Arrow1 from "@/assets/icons/landing-page/arrow1";
import React from "react";
import BoxTheme from "../box-theme/box-theme";

export default function KnowMoreButton() {
  return (
     <BoxTheme
        className={` h-[65px] w-[205px] cursor-pointer`}
     
      boxStyle={
        `w-[200px] h-[62px] border-[3px] bg-primary-brown   rounded-[5px] border-custom-sandal`
      }
      bgBoxStyle={
        "w-[200px] h-[62px] rounded-[5px] bg-primary-brown border-2  top-[8px] left-[7px] border-custom-sandal"
      }
    >
      <div className="flex items-center gap-1  ">
        <div className="font-medium text-xl text-custom-sandal">Know More</div>
        <Arrow1 className="fill-custom-sandal" />
      </div>
    </BoxTheme>
  );
}
