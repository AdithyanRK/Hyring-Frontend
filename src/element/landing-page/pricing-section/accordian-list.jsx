import Star5 from "@/assets/icons/landing-page/star5";
import React from "react";

export default function AccordianList({className, children }) {
  return (
    <div className="text-base lg:text-[22px] flex items-center gap-3 font-primary font-normal my-4 lg:my-7 ">
      <Star5 /> <div className={`${className}`}>{children}</div>
    </div>
  );
}
