import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderButton from "@/element/landing-page/button/slider-button";
import CarouselSectionTabs from "@/element/landing-page/carousel-section/carousel-section-tabs";
import CarouselSectionCard from "@/element/landing-page/carousel-section/carousel-section-card";
import AwardWithCheckSvg from "@/assets/icons/landing-page/AwardWithCheckSvg";
import MackBookSvg from "@/assets/icons/landing-page/macbookSvg";
import RetreatSvg from "@/assets/icons/landing-page/retreatSvg";
import RewardSvg from "@/assets/icons/landing-page/rewardSvg";
import BonusSvg from "@/assets/icons/landing-page/bonusSvg";
import FlexibleSvg from "@/assets/icons/landing-page/flexibleDaysSvg";
import GiftSvg from "@/assets/icons/landing-page/giftSvg";
import OfficeSvg from "@/assets/icons/landing-page/officeSvg";
import MerchandiseSvg from "@/assets/icons/landing-page/merchandiseSvg";
import { useWindowHeight } from "@react-hook/window-size";
import Marquee from "react-fast-marquee";

export default function CarouselSection1() {
  const sliderRef = useRef(null);
  let onlyHeight = useWindowHeight();

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const settings1 = {
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    pauseOnFocus: false,
    pauseOnHover: false,
    rtl: false,
    variableWidth: true,
    adaptiveHeight: true,
    infinte: true,
    swipeToSlide: true,
    arrows: false,
  };

  if (onlyHeight == 0) {
    return " ";
  }

  return (
    <div
      className={`w-full h-[100vh] grid grid-cols-1 justify-center   
            px-2   bg-white border-2  xs:px-[20px] md:px-10 lg:px-16 xl:px-[80px]
          ${onlyHeight < 440 ? "pt-7 rounded-t-[60px] " : " "}
        ${onlyHeight >= 440 && onlyHeight < 540 ? "pt-9 rounded-t-[60px] sm:rounded-t-[80px] lg:rounded-t-[120px] xl:rounded-t-[140px] " : " "}
        ${onlyHeight >= 540 && onlyHeight < 640 ? "pt-14 rounded-t-[60px] sm:rounded-t-[100px] lg:rounded-t-[120px] xl:rounded-t-[140px] " : " "}
        ${onlyHeight >= 640 ? "pt-16 rounded-t-[60px] sm:rounded-t-[100px] lg:rounded-t-[120px] xl:rounded-t-[140px] " : " "}

         border-primary-brown   `}
    >
      <div >
        <div
          className={`flex justify-between 
      
        ${onlyHeight < 440 ? "text-3xl " : " "}
        ${
          onlyHeight >= 440 && onlyHeight < 768
            ? "text-3xl sm:text-4xl lg:text-[46px]  "
            : " "
        }
        ${
          onlyHeight >= 768
            ? "text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[54px] "
            : " "
        }

        font-primaryMedium  `}
        >
          <h1>Employee Retention</h1> <p>01</p>
        </div>
        <div
          className={`
       ${
         onlyHeight < 440
           ? "mt-[10px] mb-[15px] "
           : onlyHeight >= 440 && onlyHeight < 540
           ? "mt-[20px] mb-[30px] "
           : onlyHeight >= 540 && onlyHeight < 640
           ? "mt-[30px] mb-[40px] "
           : onlyHeight >= 640
           ? "mt-[40px] mb-[60px]  "
           : " "
       }
      
      border sm:border-2 border-primary-brown  `}
        ></div>

        <div className=" xxs:px-[40px] md:px-[30px] xs:px-[45px] sm:px-[50px]   ">
          <Slider {...settings} ref={sliderRef}>
            <CarouselSectionCard
              text={"Apple Laptop Benefits"}
              Svg={<MackBookSvg />}
              subText={"MacBook for most employees post probationary period"}
              boxStyleColor={"bg-custom-blue"}
              starColor1={"fill-custom-yellow"}
              starColor2={"fill-custom-red"}
              starColor3={"fill-custom-sandal"}
              starColor4={"fill-custom-dark-green"}
            />
            <CarouselSectionCard
              text={"Luxurious Retreat Parties"}
              subText={
                "Featuring team building activities, entertainment, food & drinks"
              }
              Svg={<RetreatSvg />}
              boxStyleColor={"bg-custom-red"}
              starColor1={"fill-custom-sandal"}
              starColor2={"fill-custom-violet"}
              starColor3={"fill-custom-blue"}
              starColor4={"fill-custom-green"}

            />
            <CarouselSectionCard
              text={"Monthly Gold Coin Awards"}
              subText={"For the extra-milers and top performers on the team"}
              Svg={<RewardSvg />}
              boxStyleColor={"bg-custom-violet"}
              starColor1={"fill-custom-yellow"}
              starColor2={"fill-custom-green"}
              starColor3={"fill-custom-red"}
              starColor4={"fill-custom-orange"}

            />
            <CarouselSectionCard
              text={"Substantial Annual Bonuses"}
              subText={"Significant performance-based incentives for employees"}
              Svg={<BonusSvg />}
              boxStyleColor={"bg-custom-green"}
              starColor1={"fill-custom-blue"}
              starColor2={"fill-custom-yellow"}
              starColor3={"fill-custom-rose"}
              starColor4={"fill-custom-dark-green"}

            />
            <CarouselSectionCard
              text={"Health Insurance"}
              subText={
                "Not only for you, but also for your spouse, children, & parents too!"
              }
              Svg={<AwardWithCheckSvg />}
              boxStyleColor={"bg-custom-yellow"}
              starColor1={"fill-custom-violet"}
              starColor2={"fill-custom-dark-green"}
              starColor3={"fill-custom-sandal"}
              starColor4={"fill-custom-rose"}

            />
            <CarouselSectionCard
              text={"Grand Diwali Presents"}
              subText={"Embrace the festive spirit with special Diwali gifts"}
              Svg={<GiftSvg />}
              boxStyleColor={"bg-custom-blue"}
              starColor1={"fill-custom-yellow"}
              starColor2={"fill-custom-green"}
              starColor3={"fill-custom-orange"}
              starColor4={"fill-custom-dark-green"}

            />
            <CarouselSectionCard
              text={"Flexible 4/5-Day Work Week"}
              subText={
                "Based on the client, a 4 or 5-day work setup will be planned"
              }
              Svg={<FlexibleSvg />}
              boxStyleColor={"bg-custom-red"}
              starColor1={"fill-custom-blue"}
              starColor2={"fill-custom-green"}
              starColor3={"fill-custom-yellow"}
              starColor4={"fill-custom-dark-green"}

            />
            <CarouselSectionCard
              text={"Trendy Offices Located Across India"}
              subText={
                "With tie-ups around the nation, work from the comfort of an office"
              }
              Svg={<OfficeSvg />}
              boxStyleColor={"bg-custom-violet"}
              starColor1={"fill-custom-blue"}
              starColor2={"fill-custom-green"}
              starColor3={"fill-custom-yellow"}
              starColor4={"fill-custom-rose"}

            />
            <CarouselSectionCard
              text={"Exclusive Co-Branded Merchandise"}
              subText={
                "Merchandise throughout the year from t-shirts to AirPods"
              }
              Svg={<MerchandiseSvg />}
              boxStyleColor={"bg-custom-green"}
              starColor1={"fill-custom-yellow"}
              starColor2={"fill-custom-red"}
              starColor3={"fill-custom-blue"}
              starColor4={"fill-custom-dark-green"}

            />
          </Slider>
        </div>
        <Marquee
          className={`
       ${onlyHeight < 440 ? "py-2 " : " "}
       ${onlyHeight >= 440 && onlyHeight < 540 ? "py-3 " : " "}
        ${onlyHeight >= 540 && onlyHeight < 640 ? "py-7 " : " "}
        ${onlyHeight >= 640 && onlyHeight < 768 ? "py-12 " : " "}
        ${onlyHeight >= 768 ? "py-16  " : " "}

         `}
        >
          <div
            onClick={() => {
              sliderRef.current.slickGoTo(0);
            }}
          >
            <CarouselSectionTabs
              text={"Apple Laptop Benefits"}
              index={1}
              color={1}
            />
          </div>
          <div
            onClick={() => {
              sliderRef.current.slickGoTo(1);
            }}
          >
            <CarouselSectionTabs
              text={"Luxurious Retreat Parties"}
              index={2}
              color={2}
            />
          </div>
          <div
            onClick={() => {
              sliderRef.current.slickGoTo(2);
            }}
          >
            <CarouselSectionTabs
              text={"Monthly Gold Coin Awards"}
              index={3}
              color={3}
            />
          </div>

          <div
            onClick={() => {
              sliderRef.current.slickGoTo(3);
            }}
          >
            <CarouselSectionTabs
              text={"Substantial Annual Bonuses"}
              index={4}
              color={4}
            />
          </div>
          <div
            onClick={() => {
              sliderRef.current.slickGoTo(4);
            }}
          >
            <CarouselSectionTabs
              text={"Health insurance for family members"}
              index={5}
              color={5}
            />
          </div>
          <div
            onClick={() => {
              sliderRef.current.slickGoTo(5);
            }}
          >
            <CarouselSectionTabs
              text={"Grand Diwali Presents"}
              index={6}
              color={1}
            />
          </div>
          <div
            onClick={() => {
              sliderRef.current.slickGoTo(6);
            }}
          >
            <CarouselSectionTabs
              text={"Flexible 4/5-Day Work Week"}
              index={7}
              color={2}
            />
          </div>
          <div
            onClick={() => {
              sliderRef.current.slickGoTo(7);
            }}
          >
            <CarouselSectionTabs
              text={"Trendy Offices Located Across India"}
              index={8}
              color={3}
            />
          </div>
          <div
            onClick={() => {
              sliderRef.current.slickGoTo(8);
            }}
          >
            <CarouselSectionTabs
              text={"Exclusive Co-Branded Merchandise"}
              index={9}
              color={4}
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
}
