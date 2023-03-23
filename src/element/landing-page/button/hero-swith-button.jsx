import React, { useState } from "react";
import BoxTheme from "../box-theme/box-theme";
import { MaterialUISwitch } from "@/element/landing-page/button/home-switch-element";

export default function HeroAwitchButton({ className }) {
  const [switchValue, SetSwitchValue] = useState(true);
  return (
    <BoxTheme
      className={`h-[60px] ${className} w-fit cursor-pointer text-2xl font-primaryMedium   `}
      boxStyle={
        "w-fit h-[57px] border bg-white rounded-[8px] border-primary-brown"
      }
      bgBoxStyle={
        "w-full h-[57px]  rounded-[8px]  bg-primary-brown top-[5px] left-[4px]"
      }
    >
      <div className=" pl-[21px] pr-4 flex gap-2">
        <div
          className={` ${
            !switchValue ? "text-secondary-orange" : "text-custom-grey"
          } `}
        >
          Job
        </div>
        <MaterialUISwitch
          onChange={(e) => SetSwitchValue(e.target.checked)}
          defaultChecked
        />

        <div
          className={` ${
            !switchValue ? "text-custom-grey" : "text-secondary-orange"
          } `}
        >
          Candidates
        </div>
      </div>
    </BoxTheme>
  );
}
