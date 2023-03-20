import React from "react";
import PromiseFramer from "@/element/landing-page/promise-section/promise-framer";
import HeartRed from "@/assets/icons/landing-page/heart-red";
import HeartBrown from "@/assets/icons/landing-page/heart-brown";

const PromiseSection = () => {
  return (
    <div className="my-10">
      <div className="flex justify-center items-center gap-1 flex-nowrap">
        <div className="flex justify-center items-center font-primaryMedium text-primary-brown text-[50px]">
          Our Promises
        </div>
        <div className="relative -top-2">
          <HeartRed className="z-1" />
          <HeartBrown className="absolute left-1 top-[3px] -z-1" />
        </div>
      </div>
      <PromiseFramer />
    </div>
  );
};

export default PromiseSection;
