import HeroAutocompleteButton from "@/element/landing-page/button/hero-autocomplete-button";
import HeroSubmitButton from "@/element/landing-page/button/hero-submit-button";
import HeroAwitchButton from "@/element/landing-page/button/hero-swith-button";
import HeroList from "@/element/landing-page/home-banner-section/home-banner-section-list";
import React, { useState } from "react";
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
import { MaterialUISwitch } from "@/element/landing-page/button/home-switch-element";
import PlayVideoIcon from "@/assets/icons/landing-page/play_video";

const HomeBannerSection = () => {

  const lottieOptions = {
    animationData: HomeBannerAnimation,
    loop: true,
    autoplay: true,
  };
  const settings1 = {
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: 'linear',
    rtl: false,
    variableWidth: true,
    adaptiveHeight: true,
    infinte:true,
    swipeToSlide: true,
    
  };

  const RunnerList =({text,icon})=>{
    return(
      <div className=" flex w-fit items-center text-white gap-2 "> {icon} {text}</div>
      
    )
  }
 

  return (
    <div className="w-[100vw] overflow-hidden ">
      <div className="mx-auto w-[92vw] mb-20">
        <div className="flex flex-col lg:flex-row">
          <div className="basis-3/5 ">
            <h1 className="font-primary text-4xl lg:text-6xl font-bold text-center lg:text-start">
              Meet The New Gold Standard In{" "}
              <span className="text-secondary-orange">Remote Hyring</span>
            </h1>
            <p className=" text-xl xl:text-3xl mt-5 xl:mt-[40px] mb-8 xl:mb-[60px] text-center lg:text-start">
              Hire from a pool of 
              <span className="relative mx-2 xl:mx-3" >
              <span className="absolute -left-[18px] -top-4 xl:-left-1 xl:-top-3 scale-[0.75] xl:scale-[1.1]  "><TextMark id={"text-mark"} /></span>
                vetted 
              </span>candidates.
            </p>
            <div className="text-lg xl:text-2xl font-medium flex flex-wrap gap-0 md:gap-2 items-center mb-6 sm:mb-[50px] justify-center lg:justify-start">
              I Need <HeroAwitchButton className="scale-[0.8] md:scale-[1]" /> in <HeroAutocompleteButton className="scale-[0.8] md:scale-[1]" />{" "}
              <HeroSubmitButton className="scale-[0.8] md:scale-[1]" />
            </div>
            <div className="sm:flex gap-10 items-center">
              <div>
                <HeroList>AI powered Hyring app</HeroList>
                <HeroList>Top 5% vetted candidates</HeroList>
                <HeroList>Robust Payroll</HeroList>
              </div>
              <div>
                <HeroList>Transparent salary info - No Hanky-Panky</HeroList>
                <HeroList>Cool Indian office space</HeroList>
                <HeroList>Indian Taxation & Compliances</HeroList>
              </div>
            </div>
          </div>
          <div className="relative flex basis-2/5  lg:scale-[1.3] ">
            <Lottie options={lottieOptions}   />
            <div className="absolute bottom-[1%] left-[10%] xl:bottom-[13%] xl:left-[17%] lg:bottom-[20%] lg:left-[15%] md:bottom-[14%] md:left-[18%] sm:bottom-[10%] sm:left-[16%]">
              {/* <div className="absolute bottom-[13%] left-[17%] "> */}
              <div className="relative">
                <PlayVideoIcon />
                <div className="absolute bottom-[39%] left-[43%] z-10  ">
                  <FaPlay style={{color:"red"}}  color={"#46574d"} size={22} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[102vw] -rotate-3 border border-primary-brown h-[82px] flex items-center -ml-2 mb-20">
        <div className="h-[71px] bg-primary-brown w-full">
        
        <Slider {...settings1} className="py-5 ">
          {
            [{text:"UI UX Designer",icon:<Union/>},
             {text:"Frontend Developer",icon:<Diamond/>},
             {text:"Data Analyst",icon:<Circle/>},
             {text:"Azure Cloud Engineer",icon:<Rectangle/>},
             {text:"Graphics Designer",icon:<Triangle/>},
             {text:"Product Designer",icon:<Star6/>},
             {text:"System Architect",icon:<Polygon/>},
            ].map((data,index)=>(
              <RunnerList text={data.text} icon={data.icon} key={index} />
            ))
          }
        </Slider>
        </div>
      </div>

         

    </div>
  );
};

export default HomeBannerSection;


