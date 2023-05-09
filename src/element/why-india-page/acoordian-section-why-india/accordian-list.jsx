import Star7 from "@/assets/icons/landing-page/star7";
import React from "react";

export default function AccordianListWhyIndia({ children }) {
  return (
    <div className="text-xs pr-4 flex gap-[6px] text-justify md:text-base font-primary font-normal">
      <div className="scale-50">
        <Star7 />
      </div>
      <div>{children}</div>
    </div>
  );
}
