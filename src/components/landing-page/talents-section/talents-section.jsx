import KnowMoreButton from "@/element/landing-page/button/know-more-button";
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import SlotMachine from "/public/Slot_machine.json";
import { useInView } from "react-intersection-observer";
export default function TalentSection() {
  const [play, setPlay] = useState(false);

  const { ref, inView, entry } = useInView({
    trackVisibility: true,
    delay: 100,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      setPlay(true);
      console.log("RUNNING",play);
    }
  }, [entry?.isIntersecting]);

  const lottieOptions = {
    animationData: SlotMachine,
    loop: true,
    autoPlay: true,
  };


  return (
    <div
      ref={ref}
      className={`w-screen py-[5vh] md:py-[8vh] flex flex-col gap-8 sm:gap-0 justify-center items-center  h-screen bg-[url('../../public/bgtheme.svg')] overflow-hidden`}
      id="whyIndia"
    >
      <div
        className="text-center text-[2rem] sm:text-[2.25rem] md:text-[2.5rem]  lg:text-5xl  leading-[50px] 
        text-white  font-primaryBold px-5 "
      >
        Why Hire Indian Talents
      </div>

      <div className=" select-none  scale-[1.5] xs:scale-[1.4] sm:scale-[1.25] md:scale-[1.1]  h-[70vh]">
        <Lottie options={lottieOptions} isClickToPauseDisabled={true} />
      </div>
      <div
        className="flex justify-center "
      >
        <KnowMoreButton />
      </div>
    </div>
  );
}
