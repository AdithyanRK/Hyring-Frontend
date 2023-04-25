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
import EpfSvg from "@/assets/icons/landing-page/epfSvg";
import EsiSvg from "@/assets/icons/landing-page/esiSvg";
import ProfessionalTax from "@/assets/icons/landing-page/professionalTax";
import GstSvg from "@/assets/icons/landing-page/gst";
import TdsSvg from "@/assets/icons/landing-page/tds";
import PayrollSvg from "@/assets/icons/landing-page/payroll";
import DangerSvg from "@/assets/icons/landing-page/danger";
import LabourSvg from "@/assets/icons/landing-page/labourAct";
import MoneySvg from "@/assets/icons/landing-page/moneySvg";

export default function CarouselSection3() {
  const sliderRef = useRef(null);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} !top-[215px] !right-[40%] xxs:!top-2/4 xxs:!-right-[10px] xxs:!-mt-5`}
        style={{ ...style, display: "block" }}
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
        style={{ ...style, display: "block" }}
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
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
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
    <div>
      <div className="w-full h-[100vh] bg-white border-2 mt-20 border-primary-brown rounded-t-[60px] lg:rounded-t-[140px] px-[10px] xs:px-[20px] md:px-10 lg:px-[80px]  pt-[50px] lg:pt-[60px] md:pb-[36px] !border-b-0">
        <div className="flex justify-between text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-primaryMedium  ">
          <h1>Compliance Covered</h1> <p>03</p>
        </div>
        <div className=" border sm:border-2 border-primary-brown mt-[22px] mb-[20px] lg:mt-[34px] xxxl:mt-[45px] xxxl:mb-[55px]"></div>

        <div className="px-0 xxs:px-[40px] md:px-[30px] xs:px-[45px] sm:px-[65px] xxxl:pt-28 py-10 md:pt-8 md:pb-0 lg:py-14">
          <Slider {...settings} ref={sliderRef}>
            <CarouselSectionCard
              text={"Income Tax"}
              Svg={<PercentageSvg />}
              boxStyleColor={"bg-custom-blue"}
              starColor1={"fill-custom-yellow"}
              starColor2={"fill-custom-green"}
              starColor3={"fill-custom-yellow"}
            />
            <CarouselSectionCard
              text={"Employee Provident Fund (EPF)"}
              Svg={<EpfSvg />}
              boxStyleColor={"bg-custom-red"}
              starColor1={"fill-custom-red"}
              starColor2={"fill-custom-yellow"}
              starColor3={"fill-custom-red"}
            />
            <CarouselSectionCard
              text={"Employee State Insurance (ESI)"}
              Svg={<EsiSvg />}
              boxStyleColor={"bg-custom-violet"}
              starColor1={"fill-custom-yellow"}
              starColor2={"fill-custom-green"}
              starColor3={"fill-custom-red"}
            />
            <CarouselSectionCard
              text={"Professional Tax"}
              Svg={<ProfessionalTax />}
              boxStyleColor={"bg-custom-green"}
              starColor1={"fill-custom-blue"}
              starColor2={"fill-custom-yellow"}
              starColor3={"fill-custom-yellow"}
            />
            <CarouselSectionCard
              text={"Goods and Services Tax (GST)"}
              Svg={<GstSvg />}
              boxStyleColor={"bg-custom-yellow"}
              starColor1={"fill-custom-yellow"}
              starColor2={"fill-custom-green"}
              starColor3={"fill-custom-yellow"}
            />
            <CarouselSectionCard
              text={"Tax Deducted at Source (TDS)"}
              Svg={<TdsSvg />}
              boxStyleColor={"bg-custom-blue"}
              starColor1={"fill-custom-yellow"}
              starColor2={"fill-custom-green"}
              starColor3={"fill-custom-yellow"}
            />
            <CarouselSectionCard
              text={"Payroll Compliance"}
              Svg={<PayrollSvg />}
              boxStyleColor={"bg-custom-red"}
              starColor1={"fill-custom-blue"}
              starColor2={"fill-custom-green"}
              starColor3={"fill-custom-blue"}
            />
            <CarouselSectionCard
              text={"Sexual Harassment Prevention"}
              Svg={<DangerSvg />}
              boxStyleColor={"bg-custom-violet"}
              starColor1={"fill-custom-blue"}
              starColor2={"fill-custom-green"}
              starColor3={"fill-custom-blue"}
            />
            <CarouselSectionCard
              text={"Contract Labour Regulations"}
              Svg={<LabourSvg />}
              boxStyleColor={"bg-custom-green"}
              starColor1={"fill-custom-yellow"}
              starColor2={"fill-custom-green"}
              starColor3={"fill-custom-blue"}
            />
            <CarouselSectionCard
              text={"Equal Remuneration"}
              Svg={<MoneySvg />}
              boxStyleColor={"bg-custom-yellow"}
              starColor1={"fill-custom-yellow"}
              starColor2={"fill-custom-green"}
              starColor3={"fill-custom-yellow"}
            />
          </Slider>
        </div>

        <Slider {...settings1} className="py-4 md:py-2 xxxl:pt-20">
          <div
            onClick={() => {
              sliderRef.current.slickGoTo(0);
            }}
          >
            <CarouselSectionTabs text={"Income Tax"} index={1} color={1} />
          </div>
          <div
            onClick={() => {
              sliderRef.current.slickGoTo(1);
            }}
          >
            <CarouselSectionTabs
              text={"Employee Provident Fund (EPF)"}
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
              text={"Employee State Insurance (ESI)"}
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
              text={"Professional Tax"}
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
              text={"Goods and Services Tax (GST)"}
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
              text={"Tax Deducted at Source (TDS)"}
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
              text={"Payroll Compliance"}
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
              text={"Sexual Harassment Prevention"}
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
              text={"Contract Labour Regulations"}
              index={9}
              color={4}
            />
          </div>
          <div
            onClick={() => {
              sliderRef.current.slickGoTo(9);
            }}
          >
            <CarouselSectionTabs
              text={"Equal Remuneration"}
              index={10}
              color={5}
            />
          </div>
        </Slider>
      </div>
      <div className="promise_bg_image">
        <div className="carousel_zigzag h-20 overflow-hidden"> </div>
      </div>
    </div>
  );
}
