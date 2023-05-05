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

const HomeBannerSection = ({handleOpen}) => {
  const [switchValue, SetSwitchValue] = useState(true);

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
    arrows:false
  };

  const RunnerList = ({ text, icon }) => {
    return (
      <div className=" flex w-fit items-center text-white gap-2 font-primary font-lg font-normal ">
        {icon} {text}
      </div>
    );
  };


  return (
    <div className="w-[100vw]  mt-3 md:mt-20 ">
      <div className="mx-auto w-[92vw] mb-20">
        <div className="flex flex-col lg:flex-row max-w-[1800px] mx-auto my-0">
          <div className="basis-3/5 ">
            <h1 className="font-primaryBold   text-4xl lg:whitespace-nowrap lg:text-[44px] xl:text-5xl  xl3:text-6xl text-center lg:text-start">
              Meet The New Gold Standard <br className="hidden lg:block"/> In 
              <span className="text-secondary-orange"> Contract Hyring</span>
            </h1>
            <div className="font-normal  font-primary text-xl lg:text-3xl mt-5  lg:mt-[40px] mb-8 lg:mb-[60px] text-center lg:text-start">
              Hire from a pool of
              <p className="relative inline-block mx-2 lg:mx-3">
                <span className="absolute -left-[22px] -top-4 lg:-left-1 lg:-top-3 scale-[0.7] lg:scale-[1]  ">
                  <TextMark />
                </span>
                vetted
              </p>
              candidates.
            </div>
            <div className="text-base xl:text-lg font-primaryMedium lg:w-[700px]  flex flex-wrap lg:flex-nowrap gap-4 items-center mb-6 sm:mb-[50px] justify-center lg:justify-start">
              I Need <HeroAwitchButton switchValue={switchValue} SetSwitchValue={SetSwitchValue}/>
              in <div className="whitespace-nowrap flex gap-4 items-center">
              <HeroAutocompleteButton  />
              <HeroSubmitButton  switchValue={switchValue} />
              </div>
            </div>
            <HomeListComponent className="hidden lg:block" />
          </div>
          <div className=" flex basis-2/5 -mt-16 bg-green lg:-mt-20 xl4:-mt-40  justify-center items-center  w-full ">
            <div className="relative h-[400px]  xs:h-[500px] lg:h-auto   xl:h-[500px] xl3:h-[550px] xl4:h-[620px] " >
            <Lottie options={lottieOptions} isClickToPauseDisabled={true}  />
            <div
              onClick={() => handleOpen()}
              className="absolute cursor-pointer -bottom-0 left-[20px]
               xs:bottom-0 xs:left-[40px] lg:-bottom-[10px] lg:left-[3%] xl:bottom-0 xl:left-[40px] xl4:left-[60px] 
                
               scale-[0.7] xs:scale-[1] lg:scale-[0.8] xl:scale-[1] "
            >
              <div className="relative bg-transparent">
                <PlayVideoIcon />
                <div className="absolute bottom-[39%] left-[43%] z-90  ">
                  <FaPlay color={"#FFB65E"} size={22} />
                </div>
              </div>
            </div>
            </div>
           
          </div>
          <HomeListComponent className=" lg:hidden" />
        </div>
      </div>

     <div className="w-screen     " >
        <div className="h-[71px] bg-primary-brown w-[99.2vw] mx-auto -rotate-3 border border-primary-brown ">
          <Slider {...settings1} className="py-5 ">
            {[
              { text: "System Designer", icon: <Union /> },
              { text: "Full-Stack Engineer", icon: <Diamond /> },
              { text: "Front-End Engineer", icon: <Circle /> },
              { text: "Back-End Engineer", icon: <Rectangle /> },
              { text: "Data Engineers", icon: <Triangle /> },
              { text: "DevOps", icon: <Star6 /> },
              { text: "Mobile Engineer", icon: <Polygon /> },
              { text: "QA Engineer", icon: <Union /> },
              { text: "UX/UI Designer", icon:  <Diamond /> },
              { text: "Project Manager", icon: <Circle />  },
              { text: "Business Analyst", icon: <Rectangle /> },
              { text: "Digital Marketing Specialist", icon: <Triangle /> },
              { text: "Social Media Marketer", icon: <Star6 /> },
              { text: "System Designer", icon: <Union /> },
              { text: "Full-Stack Engineer", icon: <Diamond /> },
              { text: "Front-End Engineer", icon: <Circle /> },
              { text: "Back-End Engineer", icon: <Rectangle /> },
              { text: "Data Engineers", icon: <Triangle /> },
              { text: "DevOps", icon: <Star6 /> },
              { text: "Mobile Engineer", icon: <Polygon /> },
              { text: "QA Engineer", icon: <Union /> },
              { text: "UX/UI Designer", icon:  <Diamond /> },
              { text: "Project Manager", icon: <Circle />  },
              { text: "Business Analyst", icon: <Rectangle /> },
              { text: "Digital Marketing Specialist", icon: <Triangle /> },
              { text: "Social Media Marketer", icon: <Star6 /> },
            ].map((data, index) => (
              <RunnerList text={data.text} icon={data.icon} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerSection;
