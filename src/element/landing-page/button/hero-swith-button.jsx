import React, { useState } from "react";
import BoxTheme from "../box-theme/box-theme";
import { MaterialUISwitch1, MaterialUISwitch2 } from "@/element/landing-page/button/home-switch-element";

export default function HeroAwitchButton({ className }) {
  const [switchValue, SetSwitchValue] = useState(true);
  return (
    <BoxTheme
    top="5px"
      left="4px"
      className={`h-fit ${className} w-fit cursor-pointer text-xl  md:text-2xl font-primaryMedium   `}
      boxStyle={
        "w-fit h-[47px] md:h-[57px] border bg-white rounded-[8px] border-primary-brown"
      }
      bgBoxStyle={
        "w-full h-[47px] md:h-[57px] rounded-[8px]  bg-primary-brown "
      }
    >
      <div className=" pl-[21px] pr-4 flex justify-between items-center gap-2">
        <div
          className={` ${
            !switchValue ? "text-secondary-orange" : "text-custom-grey"
          } `}
        >
          Job
        </div>
       <div className="md:block hidden">
       <MaterialUISwitch1
          onChange={(e) => SetSwitchValue(e.target.checked)}
          defaultChecked
          
        />
       </div>
       <div className="md:hidden">
       <MaterialUISwitch2
          onChange={(e) => SetSwitchValue(e.target.checked)}
          defaultChecked
          
        />
       </div>

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
