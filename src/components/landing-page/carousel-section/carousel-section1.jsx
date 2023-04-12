import React, { useRef } from "react";
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
import { useWindowSize } from 'react-use';

export default function CarouselSection1() {
  const sliderRef = useRef(null);
  const { height: windowHeight } = useWindowSize();
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} !top-[215px] !right-[40%] xxs:!top-2/4 xxs:!-right-[10px] xxs:!-mt-5`}
        // style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <SliderButton className="scale-[0.5] xs:scale-[0.6] sm:scale-[0.7] md:scale-[0.8] lg:scale-[1]" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} !top-[215px] !left-[30%] xxs:!top-2/4 xxs: xxs:!-left-[45px] xxs:!-mt-5`}
        // style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <SliderButton
          IconRotate={"rotate-180"}
          className="scale-[0.5] xs:scale-[0.6] sm:scale-[0.7] md:scale-[0.8] lg:scale-[1]"
        />
      </div>
    );
  }

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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

  return (
    <div className="w-full h-[100vh] overflow-y-auto bg-white border-2 mt-20 border-primary-brown rounded-t-[60px] lg:rounded-t-[140px] px-[10px] xs:px-[20px] md:px-10 lg:px-[80px]  pt-[50px] lg:pt-[60px] pb-[36px] ">
      <div className="flex justify-between text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-primaryMedium  ">
        <h1>Employee Retention</h1> <p>01</p>
      </div>
      <div className=" border sm:border-2 border-primary-brown mt-[22px] mb-[20px] lg:mt-[34px] xxxl:mt-[45px] xxxl:mb-[55px]"></div>

      <div className="px-0 xxs:px-[40px] md:px-[30px] xs:px-[45px] sm:px-[65px] xxxl:pt-28 py-10 md:pt-8 md:pb-0 lg:py-14">
        <Slider {...settings} ref={sliderRef}>
          <CarouselSectionCard
            text={"Apple Laptop Benefits"}
            Svg={<MackBookSvg />}
            boxStyleColor={"bg-custom-blue"}
            starColor1={"fill-custom-yellow"}
            starColor2={"fill-custom-green"}
            starColor3={"fill-custom-yellow"}
          />
          <CarouselSectionCard
            text={"Luxurious Retreat Parties"}
            Svg={<RetreatSvg />}
            boxStyleColor={"bg-custom-red"}
            starColor1={"fill-custom-red"}
            starColor2={"fill-custom-yellow"}
            starColor3={"fill-custom-red"}
          />
          <CarouselSectionCard
            text={"Monthly Gold Coin Awards"}
            Svg={<RewardSvg />}
            boxStyleColor={"bg-custom-violet"}
            starColor1={"fill-custom-yellow"}
            starColor2={"fill-custom-green"}
            starColor3={"fill-custom-red"}
          />
          <CarouselSectionCard
            text={"Substantial Annual Bonuses"}
            Svg={<BonusSvg />}
            boxStyleColor={"bg-custom-green"}
            starColor1={"fill-custom-blue"}
            starColor2={"fill-custom-yellow"}
            starColor3={"fill-custom-yellow"}
          />
          <CarouselSectionCard
            text={"Health Insurance Covering Self, Spouse, Children & Parents"}
            Svg={<AwardWithCheckSvg />}
            boxStyleColor={"bg-custom-yellow"}
            starColor1={"fill-custom-yellow"}
            starColor2={"fill-custom-green"}
            starColor3={"fill-custom-yellow"}
          />
          <CarouselSectionCard
            text={"Grand Diwali Presents"}
            Svg={<GiftSvg />}
            boxStyleColor={"bg-custom-blue"}
            starColor1={"fill-custom-yellow"}
            starColor2={"fill-custom-green"}
            starColor3={"fill-custom-yellow"}
          />
          <CarouselSectionCard
            text={"Flexible 4/5-Day Work Week"}
            Svg={<FlexibleSvg />}
            boxStyleColor={"bg-custom-red"}
            starColor1={"fill-custom-blue"}
            starColor2={"fill-custom-green"}
            starColor3={"fill-custom-blue"}
          />
          <CarouselSectionCard
            text={"Trendy Offices Located Across India"}
            Svg={<OfficeSvg />}
            boxStyleColor={"bg-custom-violet"}
            starColor1={"fill-custom-blue"}
            starColor2={"fill-custom-green"}
            starColor3={"fill-custom-blue"}
          />
          <CarouselSectionCard
            text={"Exclusive Co-Branded Merchandise"}
            Svg={<MerchandiseSvg />}
            boxStyleColor={"bg-custom-green"}
            starColor1={"fill-custom-yellow"}
            starColor2={"fill-custom-green"}
            starColor3={"fill-custom-blue"}
          />
        </Slider>
      </div>

      <Slider {...settings1} className="py-4 md:py-2 xxxl:pt-20">
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
      </Slider>
    </div>
  );
}
