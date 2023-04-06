import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderButton from "@/element/landing-page/button/slider-button";
import CarouselSectionTabs from "@/element/landing-page/carousel-section/carousel-section-tabs";
import CarouselSectionCard from "@/element/landing-page/carousel-section/carousel-section-card";
import AwardWithCheckSvg from "@/assets/icons/landing-page/AwardWithCheckSvg";
import AiSvg from "@/assets/icons/landing-page/AiSvg";
import PercentageSvg from "@/assets/icons/landing-page/percentageSvg";

export default function CarouselSection1() {
  const sliderRef = useRef(null);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} !-right-[10px] !-mt-5 sm:!-right-[40px]`}
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
        className={`${className} !-left-[45px] !-mt-5 sm:!-left-[65px]`}
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
    arrows:false,
  };

  return (
    <div className="w-full h-[80vh] md:h-[100vh] bg-white border-2 mt-20 border-primary-brown rounded-t-[60px] lg:rounded-t-[140px] px-[10px] xs:px-[20px] lg:px-[80px]  pt-[50px] lg:pt-[60px] pb-[36px] ">
      <div className="flex justify-between text-[20px] sm:text-[28px] lg:text-[54px] font-primaryMedium  ">
        <h1>Employee Retention</h1> <p>01</p>
      </div>
      <div className=" border sm:border-2 border-primary-brown mt-[22px] mb-[45px] lg:mt-[34px] xxxl:mt-[45px] xxxl:mb-[55px]"></div>

      <div className="px-[30px] xs:px-[45px] sm:px-[65px] xxxl:pt-28">
        <Slider {...settings} ref={sliderRef}>
          <CarouselSectionCard
            text={"Health Insurance for Family Members"}
            Svg={<AwardWithCheckSvg />}
            boxStyleColor={"bg-custom-green"}
            starColor1={"fill-custom-blue"}
            starColor2={"fill-custom-yellow"}
            starColor3={"fill-custom-yellow"}
          />
          <CarouselSectionCard
            text={"AI Powered Sourcing"}
            Svg={<AiSvg />}
            boxStyleColor={"bg-custom-yellow"}
            starColor1={"fill-custom-blue"}
            starColor2={"fill-custom-green"}
            starColor3={"fill-custom-blue"}
          />
          <CarouselSectionCard
            text={"Indian Taxations"}
            Svg={<PercentageSvg />}
            boxStyleColor={"bg-custom-green"}
            starColor1={"fill-custom-blue"}
            starColor2={"fill-custom-yellow"}
            starColor3={"fill-custom-yellow"}
          />
          <CarouselSectionCard
            text={"Lorem lorem 1"}
            Svg={<PercentageSvg />}
            boxStyleColor={"bg-custom-yellow"}
            starColor1={"fill-custom-yellow"}
            starColor2={"fill-custom-green"}
            starColor3={"fill-custom-yellow"}
          />
          <CarouselSectionCard
            text={"Lorem2 lorem2"}
            Svg={<PercentageSvg />}
            boxStyleColor={"bg-custom-blue"}
            starColor1={"fill-custom-blue"}
            starColor2={"fill-custom-green"}
            starColor3={"fill-custom-blue"}
          />
        </Slider>
      </div>

      <Slider {...settings1} className="py-2 md:py-8 xxxl:pt-28">
        <div
          onClick={() => {
            sliderRef.current.slickGoTo(0);
          }}
        >
          <CarouselSectionTabs text={"New Mackbook"} index={1} color={1} />
        </div>
        <div
          onClick={() => {
            sliderRef.current.slickGoTo(1);
          }}
        >
          <CarouselSectionTabs
            text={"Annual International Retreat"}
            index={2}
            color={2}
          />
        </div>
        <div
          onClick={() => {
            sliderRef.current.slickGoTo(2);
          }}
        >
          <CarouselSectionTabs text={"Big Diwali Gifts"} index={3} color={3} />
        </div>
        <div
          onClick={() => {
            sliderRef.current.slickGoTo(3);
          }}
        >
          <CarouselSectionTabs text={"Monthly Awards"} index={4} color={4} />
        </div>
        <div
          onClick={() => {
            sliderRef.current.slickGoTo(4);
          }}
        >
          <CarouselSectionTabs
            text={"Health Insurance for Family Members"}
            index={5}
            color={5}
          />
        </div>
        <div
          onClick={() => {
            sliderRef.current.slickGoTo(0);
          }}
        >
          <CarouselSectionTabs text={"New Mackbook"} index={1} color={1} />
        </div>
        <div
          onClick={() => {
            sliderRef.current.slickGoTo(1);
          }}
        >
          <CarouselSectionTabs
            text={"Annual International Retreat"}
            index={2}
            color={2}
          />
        </div>
        <div
          onClick={() => {
            sliderRef.current.slickGoTo(2);
          }}
        >
          <CarouselSectionTabs text={"Big Diwali Gifts"} index={3} color={3} />
        </div>
        <div
          onClick={() => {
            sliderRef.current.slickGoTo(3);
          }}
        >
          <CarouselSectionTabs text={"Monthly Awards"} index={4} color={4} />
        </div>
        <div
          onClick={() => {
            sliderRef.current.slickGoTo(4);
          }}
        >
          <CarouselSectionTabs
            text={"Health Insurance for Family Members"}
            index={5}
            color={5}
          />
        </div>
      </Slider>
    </div>
  );
}
