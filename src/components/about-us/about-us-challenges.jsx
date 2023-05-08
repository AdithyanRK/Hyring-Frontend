import ChallengesIcon1 from "@/assets/icons/landing-page/ChallengesIcon1";
import ChallengesIcon2 from "@/assets/icons/landing-page/ChallengesIcon2";
import ChallengesIcon3 from "@/assets/icons/landing-page/ChallengesIcon3";
import ChallengesIcon4 from "@/assets/icons/landing-page/ChallengesIcon4";
import ExclamationBadge from "@/assets/icons/landing-page/ExclamationBadge";
import IntroductionStarGreenIcon from "@/assets/icons/landing-page/IntroductionStarGreenIcon";
import IntroductionStarYellowIcon from "@/assets/icons/landing-page/StarYellowIntroduction";
import HyringLogoCircle from "@/assets/icons/landing-page/hyringLogoCircle";
import LocationIcon from "@/assets/icons/landing-page/location";
import BoxTheme from "@/element/landing-page/box-theme/box-theme";
import React from "react";

const AboutUsChallengesComponent = () => {
  return (
    <div className="h-full max-w-[1400px] mx-auto my-0">
      <div className=" mx-auto">
        <BoxTheme
          top="8px"
          left="7px"
          className={`w-ful`}
          boxStyle={`border-3  w-full !justify-start  bg-white   rounded-[9px] border-primary-brown`}
          bgBoxStyle={
            "w-full h-full lg:h-full  rounded-[9px] bg-primary-brown border-3 border-white"
          }
          isButton={false}
        >
          <div className="p-5 md:p-10 w-full">
            <div className="px-0 flex-wrap-reverse md:px-20 md:flex-nowrap flex  gap-2 justify-between items-center  ">
              <div className="flex flex-col gap-2">
                <div className="text-3xl md:text-5xl flex flex-col   font-primaryBold">
                  <h2>Challenges in</h2>
                  <h2 className="whitespace-nowrap">Staff Augmentation</h2>
                </div>
                <p className="font-[400] text-md md:text-xl  font-primaryLight lg:w-9/12 mt-5 ">
                  Despite the widespread adoption of staff augmentation models,
                  many businesses have encountered obstacles such as
                </p>
              </div>
              <div>
                <ExclamationBadge />
              </div>
            </div>
            <div className="border w-full my-10 border-[#000000] max-w-[1150px] mx-auto" />
            <div className=" grid grid-cols-fluid sm:justify-items-center w-full ">
              <div>
                <div>
                  <ChallengesIcon4 />
                  <div className="flex flex-row sm:flex-col gap-2 my-2 md:text-3xl sm:text-2xl text-xl font[400] font-primary">
                    <h3 className="  ">Subpar</h3>
                    <h3 className=" ">Developers</h3>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <ChallengesIcon1 />
                  <div className="flex flex-row sm:flex-col  gap-2 my-2 md:text-3xl sm:text-2xl text-xl font[400] font-primary">
                    <h3 className=" whitespace-nowrap  ">Hefty</h3>
                    <h3 className=" ">Commission</h3>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <ChallengesIcon2 />
                  <div className="flex flex-row sm:flex-col gap-2 my-2 md:text-3xl sm:text-2xl text-xl font[400] font-primary">
                    <h3 className="  ">Ambiguous</h3>
                    <h3 className=" ">Contracts</h3>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <ChallengesIcon3 />
                  <div className="flex flex-row sm:flex-col gap-2 my-2 md:text-3xl sm:text-2xl text-xl font[400] font-primary">
                    <h3 className="  ">Outdated</h3>
                    <h3 className=" whitespace-nowrap ">Portals</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BoxTheme>
        <div className=" my-20 ">
          <BoxTheme
            top="8px"
            left="7px"
            className={` w-full`}
            boxStyle={`w-full !justify-start  bg-custom-green border border-primary-brown  rounded-full  `}
            bgBoxStyle={
              "w-full h-full lg:h-full  rounded-full bg-primary-brown border-3 border-white"
            }
            isButton={false}
          >
            <div className=" p-20 md:p-8 w-full">
              <div className="flex justify-center flex-wrap items-center gap-10">
                <div>
                  <div className="relative">
                    <div className="absolute   -right-4 -top-3">
                      <IntroductionStarGreenIcon
                        fill="#B9C8FF"
                        className={` animate-scaleOut h-7 w-7 md:w-10 md:h-10`}
                      />
                    </div>
                    <div>
                      <HyringLogoCircle
                        className={` h-40 w-40 md:h-56 md:w-56`}
                      />
                    </div>
                    <div className="absolute -left-6 -bottom-[10px]  ">
                      <IntroductionStarYellowIcon
                        className={` animate-scaleIn h-7 w-7 md:w-10 md:h-10`}
                      />
                    </div>
                  </div>
                </div>
                <div className="font-primary text-center text-2xl md:text-left md:text-3xl  md:w-1/2  ">
                  <h2>
                    With Hyring, you can focus on your core business while we
                    expertly manage your contract employees.
                  </h2>
                </div>
              </div>
            </div>
          </BoxTheme>
        </div>
      </div>
    </div>
  );
};

export default AboutUsChallengesComponent;
