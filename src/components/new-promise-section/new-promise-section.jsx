import React from "react";
import NewPromiseMobileSection from "./new-promise-mobile-section.card";
import NewPromiseDesktopSection from "./new-promise-desktop-section.card ";
import HeartRed from "@/assets/icons/landing-page/heart-red";
import HeartBrown from "@/assets/icons/landing-page/heart-brown";
export default function NewPromiseSection() {
  return (
    <div className="flex  flex-col items-center  mb-10 lg:mt-0 xl4:my-28   justify-center w-screen min-h-[500px] lg:min-h-[700px] h-fit  ">
      <div className="flex justify-center items-center">
        <div className=" font-primaryBold text-primary-brown text-[2rem] sm:text-[2.25rem] md:text-[2.5rem]  lg:text-5xl">
          Our Promises
        </div>
        <div className="relative top-0 lg:top-2 scale-[0.7] lg:scale-[1]">
          <HeartRed className="z-1" />
          <HeartBrown className="absolute left-1 top-[3px] -z-1" />
        </div>
      </div>
      <div className=" flex  items-center w-screen max-w-[1800px] md:my-20 mt-0">
        <NewPromiseDesktopSection />
      </div>
      {/* <div className="block md:hidden mb-20 md:mb-0">
        <NewPromiseMobileSection />
      </div> */}
    </div>
  );
}
