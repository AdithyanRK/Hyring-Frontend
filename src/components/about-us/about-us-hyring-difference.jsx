import React from "react";
import TickLottie from "/public/tick-lottie.json";
import Lottie from "react-lottie";

const AboutUsHyringDifference = () => {
  const lottieOptions = {
    animationData: TickLottie,
    loop: true,
    autoplay: true,
  };

  return (
    <div className="max-w-[1800px] mx-auto my-0">

    <div className="flex flex-wrap flex-col md:flex-row md:flex-nowrap w-full min-h-[40vh] font-primary">
      <div className="flex-1 bg-[#462B34] text-[#FAFAFA] p-5 md:p-14 flex justify-center md:justify-start items-center flex-col xl:justify-center min-h-[250px]">
        <p className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl mb-5 text-left">
          The Hyring Difference
        </p>
        <p className="text-md md:text-lg lg:text-lg xl:text-xl">
          Hyring is here to transform the{" "}
          <span className="font-semibold">staff augmentation</span> landscape by
          providing access to the <span className="font-semibold">top 5%</span>{" "}
          of rigorously vetted IT professionals, ensuring a{" "}
          <span className="font-semibold">fixed commission</span> with{" "}
          <span className="font-semibold">complete transparency</span> on salary
          information for both parties, delivering clear and straightforward
          contracts, and offering state-of-the-art{" "}
          <span className="font-semibold">AI-powered</span> portals.
        </p>
      </div>
      <div className="flex-1 bg-[#361C24] text-[#FAFAFA] p-5 md:p-14 flex">
        <div className="flex h-[330px] md:w-[50px] w-[42px] mt-2 tick_svg_dynamic_height">
          <Lottie options={lottieOptions} isClickToPauseDisabled={true} />
        </div>
        <div className="flex  flex-col gap-9 tick_text_dynamic_height">
          <p className="text-md md:text-lg lg:text-xl xl:text-2xl">
            Top 5% of vetted IT professionals
          </p>
          <p
            className="text-md md:text-lg lg:text-xl xl:text-2xl tick_lottie_text_opacity"
            style={{ "--d": "0s" }}
          >
            Fixed Commission
          </p>
          <p
            className="text-md md:text-lg lg:text-xl xl:text-2xl tick_lottie_text_opacity"
            style={{ "--d": "1s" }}
          >
            Transparent Salary Information
          </p>
          <p
            className="text-md md:text-lg lg:text-xl xl:text-2xl tick_lottie_text_opacity"
            style={{ "--d": "2s" }}
          >
            Straightforward contracts
          </p>
          <p
            className="text-md md:text-lg lg:text-xl xl:text-2xl tick_lottie_text_opacity"
            style={{ "--d": "3s" }}
          >
            AI-powered portals
          </p>
        </div>
      </div>
    </div>
    </div>

  );
};

export default AboutUsHyringDifference;
