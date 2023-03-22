import KnowMoreButton from "@/element/landing-page/button/know-more-button";
import React from "react";
import Lottie from "react-lottie";
import SlotMachine from "/public/Slot_machine.json";

export default function TalentSection() {
  const lottieOptions = {
    animationData: SlotMachine,
    loop: true,
    autoplay: true,
  };
  return (
    <div
      className={`w-[100vw] py-2  h-fit bg-[url('../../public/bgtheme.svg')] overflow-hidden`}
      id="whyIndia"
    >
      <div className="text-center text-[2rem] sm:text-[2.25rem] md:text-[2.5rem]  lg:text-5xl  leading-[50px] 
       sm:-mb-5 md:-mb-10 lg:-mb-20 2xl:-mb-52 text-white w-full  font-primaryBold mt-10">
        Why Hire Indian Talents
      </div>

      <div className=" select-none flex lg:scale-[0.9] xl:scale-[0.8] 2xl:scale-[0.65] ">
        <Lottie options={lottieOptions} />
      </div>
      <div className="flex justify-center scale-[0.7] sm:scale-[0.8] md:scale-[0.9] xl:scale-[1]
       sm:-mt-8 md:-mt-14 lg:-mt-24 2xl:-mt-64 mb-3 xl:mb-10  w-full">
        <KnowMoreButton />
      </div>
    </div>
  );
}
