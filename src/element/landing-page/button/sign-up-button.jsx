import Arrow from "@/assets/icons/landing-page/arrow";
import React from "react";
import BoxTheme from "../box-theme/box-theme";

export default function SignUpButton() {
  return (
      <BoxTheme
        className={"h-[57px] w-[160px] cursor-pointer"}
        boxStyle={
          "w-[155px] h-[52px] border bg-custom-green rounded-[4px] border-primary-brown animate-glow"
        }
        bgBoxStyle={
          "w-[155px] h-[52px] border-2 rounded-[4px] bg-custom-bg border-primary-brown top-1 left-[5px]"
        }
      >
        <div className="flex items-center gap-1  ">
          <div className="font-medium text-xl">Sign Up</div>
          <Arrow />
        </div>
      </BoxTheme>
  );
}
