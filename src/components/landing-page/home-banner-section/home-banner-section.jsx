import React, { useState } from "react";
import HeroAutocompleteButton from "@/element/landing-page/button/hero-autocomplete-button";
import HeroSubmitButton from "@/element/landing-page/button/hero-submit-button";
import HeroAwitchButton from "@/element/landing-page/button/hero-swith-button";
import HeroList from "@/element/landing-page/home-banner-section/home-banner-section-list";
import Lottie from "react-lottie";
import HomeBannerAnimation from "/public/home_banner.json";
import Slider from "react-slick";
import { FaPlay } from "react-icons/fa/";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Union from "@/assets/icons/landing-page/union";
import Diamond from "@/assets/icons/landing-page/diamond";
import Circle from "@/assets/icons/landing-page/circle";
import Rectangle from "@/assets/icons/landing-page/rectangle";
import Triangle from "@/assets/icons/landing-page/triangle";
import Star6 from "@/assets/icons/landing-page/star6";
import Polygon from "@/assets/icons/landing-page/polygon";
import TextMark from "@/assets/icons/landing-page/text-mark";
import PlayVideoIcon from "@/assets/icons/landing-page/play_video";
import HomeListComponent from "./home-list-items-component/home-list-items-component";
import HomeBannerModal from "./home-modal-section";

const HomeBannerSection = () => {
  const [open, setOpen] = useState(false);
  const lottieOptions = {
    animationData: HomeBannerAnimation,
    loop: true,
    autoplay: true,
  };

  const settings1 = {
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: "linear",
    rtl: false,
    variableWidth: true,
    adaptiveHeight: true,
    infinte: true,
    swipeToSlide: true,
  };

  const RunnerList = ({ text, icon }) => {
    return (
      <div className=" flex w-fit items-center text-white gap-2 font-primary font-lg font-normal ">
        {icon} {text}
      </div>
    );
  };

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="w-[100vw] overflow-hidden mt-3 md:mt-20">
      <div className="mx-auto w-[92vw] mb-20">
        <div className="flex flex-col lg:flex-row max-w-[1800px] mx-auto my-0">
          <div className="basis-3/5 ">
            <h1 className="font-primaryBold  text-4xl  lg:text-6xl text-center lg:text-start">
              Meet The New Gold Standard In{" "}
              <span className="text-secondary-orange">Remote Hyring</span>
            </h1>
            <div className="font-normal font-primary text-xl lg:text-3xl mt-5 lg:mt-[40px] mb-8 lg:mb-[60px] text-center lg:text-start">
              Hire from a pool of
              <p className="relative inline-block mx-2 lg:mx-3">
                <span className="absolute -left-[22px] -top-4 lg:-left-1 lg:-top-3 scale-[0.7] lg:scale-[1]  ">
                  <TextMark />
                </span>
                vetted
              </p>
              candidates.
            </div>
            <div className="text-lg xl:text-2xl font-primaryMedium   flex flex-wrap gap-4 items-center mb-6 sm:mb-[50px] justify-center lg:justify-start">
              I Need <HeroAwitchButton />
              in <HeroAutocompleteButton  />
              <HeroSubmitButton  />
            </div>
            <HomeListComponent className="hidden lg:block" />
          </div>
          <div className="relative flex basis-2/5  lg:scale-[1.3] ">
            <Lottie options={lottieOptions} isClickToPauseDisabled={true} />
            <div
              onClick={() => handleOpen()}
              className="absolute bottom-[1%] left-[10%] xl:bottom-[13%] xl:left-[17%] lg:bottom-[20%] lg:left-[15%] md:bottom-[14%] md:left-[18%] sm:bottom-[10%] sm:left-[16%] cursor-pointer"
            >
              {/* <div className="absolute bottom-[13%] left-[17%] "> */}
              <div className="relative bg-transparent">
                <PlayVideoIcon />
                <div className="absolute bottom-[39%] left-[43%] z-90  ">
                  <FaPlay color={"#FFB65E"} size={22} />
                </div>
              </div>
            </div>
          </div>
          <HomeListComponent className=" lg:hidden" />
        </div>
      </div>

      <div className="w-[102vw] mt-10  -rotate-3 border border-primary-brown flex items-center -ml-2 mb-20 2xl:mb-[130px]">
        <div className="h-[71px] bg-primary-brown w-full">
          <Slider {...settings1} className="py-5 ">
            {[
              { text: "UI UX Designer", icon: <Union /> },
              { text: "Frontend Developer", icon: <Diamond /> },
              { text: "Data Analyst", icon: <Circle /> },
              { text: "Azure Cloud Engineer", icon: <Rectangle /> },
              { text: "Graphics Designer", icon: <Triangle /> },
              { text: "Product Designer", icon: <Star6 /> },
              { text: "System Architect", icon: <Polygon /> },
            ].map((data, index) => (
              <RunnerList text={data.text} icon={data.icon} key={index} />
            ))}
          </Slider>
        </div>
      </div>
      <HomeBannerModal open={open} handleOpen={handleOpen} />
    </div>
  );
};

export default HomeBannerSection;
