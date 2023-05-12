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
import { useWindowHeight } from "@react-hook/window-size";
import Marquee from "react-fast-marquee";

export default function CarouselSection3() {
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
    <div>
       <div
      className={`w-full h-[100vh] grid grid-cols-1 justify-center 
            px-2   bg-white border-2  xs:px-[20px] md:px-10 lg:px-16 xl:px-[80px]
          ${onlyHeight < 440 ? "pt-6 rounded-t-[60px]  " : " "}
        ${onlyHeight >= 440 && onlyHeight < 540 ? "pt-9 rounded-t-[60px] sm:rounded-t-[80px] lg:rounded-t-[120px] xl:rounded-t-[140px] " : " "}
        ${onlyHeight >= 540 && onlyHeight < 640 ? "pt-11 rounded-t-[60px] sm:rounded-t-[100px] lg:rounded-t-[120px] xl:rounded-t-[140px]  " : " "}
        ${onlyHeight >= 640  ? "pt-14 rounded-t-[60px] sm:rounded-t-[100px] lg:rounded-t-[120px] xl:rounded-t-[140px] " : " "}
       
       

         border-primary-brown !border-b-0  `}
    > 
         <div>
         <div
          className={`flex justify-between 
      
        ${onlyHeight < 440 ? "text-3xl " : " "}
        ${
          onlyHeight >= 440 && onlyHeight < 768
            ? "text-3xl sm:text-4xl lg:text-[46px]"
            : " "
        }
        ${
          onlyHeight >= 768
            ? "text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[54px] "
            : " "
        }

        font-primaryMedium  `}
        >
          <h1>Compliance Covered</h1> <p>03</p>
        </div>
        <div
          className={`
       ${
         onlyHeight < 440
           ? "mt-[10px] mb-[15px] "
           : onlyHeight >= 440 && onlyHeight < 540
           ? "mt-[20px] mb-[30px] "
           : onlyHeight >= 540 && onlyHeight < 640
           ? "mt-[30px] mb-[30px] "
           : onlyHeight >= 640
           ? "mt-[30px] mb-[50px]  "
           : " "
       }
      
      border sm:border-2 border-primary-brown  `}
        ></div>


        <div className=" xxs:px-[40px] md:px-[30px] xs:px-[45px] sm:px-[50px]   ">
          <Slider {...settings} ref={sliderRef}>
            <CarouselSectionCard
              text={"Employee Provident Fund (EPF)"}
              subText={"Managing EPF contributions and regulations"}
              Svg={<EpfSvg />}
              boxStyleColor={"bg-custom-red"}
              starColor1={"fill-custom-violet"}
              starColor2={"fill-custom-yellow"}
              starColor3={"fill-custom-blue"}
               starColor4={"fill-custom-dark-green"}
            />
            <CarouselSectionCard
              text={"Employee State Insurance (ESI)"}
              subText={"Overseeing ESI coverage and related obligations"}
              Svg={<EsiSvg />}
              boxStyleColor={"bg-custom-violet"}
              starColor1={"fill-custom-yellow"}
              starColor2={"fill-custom-green"}
              starColor3={"fill-custom-red"}
               starColor4={"fill-custom-blue"}
            />
            <CarouselSectionCard
              text={"Professional Tax"}
              subText={"Handling professional tax requirements and filings"}
              Svg={<ProfessionalTax />}
              boxStyleColor={"bg-custom-green"}
              starColor1={"fill-custom-blue"}
              starColor2={"fill-custom-yellow"}
              starColor3={"fill-custom-red"}
               starColor4={"fill-custom-dark-green"}
            />
            <CarouselSectionCard
              text={"Goods and Services Tax (GST)"}
              subText={"Maintaining compliance with GST regulations"}
              Svg={<GstSvg />}
              boxStyleColor={"bg-custom-yellow"}
              starColor1={"fill-custom-orange"}
              starColor2={"fill-custom-dark-green"}
              starColor3={"fill-custom-violet"}
               starColor4={"fill-custom-red"}
            />
            <CarouselSectionCard
              text={"Tax Deducted at Source (TDS)"}
              subText={"Safeguarding TDS adherence and proper deductions"}
              Svg={<TdsSvg />}
              boxStyleColor={"bg-custom-blue"}
              starColor1={"fill-custom-yellow"}
              starColor2={"fill-custom-orange"}
              starColor3={"fill-custom-green"}
               starColor4={"fill-custom-rose"}
            />
            <CarouselSectionCard
              text={"Payroll Compliance"}
              subText={" Upholding payroll standards and legal requirements"}
              Svg={<PayrollSvg />}
              boxStyleColor={"bg-custom-red"}
              starColor1={"fill-custom-blue"}
              starColor2={"fill-custom-green"}
              starColor3={"fill-custom-yellow"}
               starColor4={"fill-custom-violet"}
            />
            <CarouselSectionCard
              text={"Sexual Harassment Prevention"}
              subText={
                "Implementing prevention measures and addressing incidents"
              }
              Svg={<DangerSvg />}
              boxStyleColor={"bg-custom-violet"}
              starColor1={"fill-custom-orange"}
              starColor2={"fill-custom-green"}
              starColor3={"fill-custom-rose"}
               starColor4={"fill-custom-yellow"}
            />
            <CarouselSectionCard
              text={"Contract Labour Regulations"}
              subText={"Administering regulations for contract workers"}
              Svg={<LabourSvg />}
              boxStyleColor={"bg-custom-green"}
              starColor1={"fill-custom-yellow"}
              starColor2={"fill-custom-orange"}
              starColor3={"fill-custom-blue"}
               starColor4={"fill-custom-red"}
            />
            <CarouselSectionCard
              text={"Equal Remuneration"}
              subText={"Ensuring fair pay practices and equal compensation"}
              Svg={<MoneySvg />}
              boxStyleColor={"bg-custom-yellow"}
              starColor1={"fill-custom-orange"}
              starColor2={"fill-custom-dark-green"}
              starColor3={"fill-custom-rose"}
               starColor4={"fill-custom-blue"}
            />
          </Slider>
        </div>

        <Marquee  className={`
       ${onlyHeight < 440 ? "py-2 " : " "}
       ${onlyHeight >= 440 && onlyHeight < 540 ? "py-3 " : " "}
        ${onlyHeight >= 540 && onlyHeight < 640 ? "py-6 " : " "}
        ${onlyHeight >= 640 && onlyHeight < 768 ? "py-9 " : " "}
        ${onlyHeight >= 768 ? "py-16  " : " "}

         `}>
          {/* <div
            onClick={() => {
              sliderRef.current.slickGoTo(0);
            }}
          >
            <CarouselSectionTabs text={"Income Tax"} index={1} color={1} />
          </div> */}
          <div
            onClick={() => {
              sliderRef.current.slickGoTo(0);
            }}
          >
            <CarouselSectionTabs
              text={"Employee Provident Fund (EPF)"}
              index={1}
              color={2}
            />
          </div>
          <div
            onClick={() => {
              sliderRef.current.slickGoTo(1);
            }}
          >
            <CarouselSectionTabs
              text={"Employee State Insurance (ESI)"}
              index={2}
              color={3}
            />
          </div>
          <div
            onClick={() => {
              sliderRef.current.slickGoTo(2);
            }}
          >
            <CarouselSectionTabs
              text={"Professional Tax"}
              index={3}
              color={4}
            />
          </div>
          <div
            onClick={() => {
              sliderRef.current.slickGoTo(3);
            }}
          >
            <CarouselSectionTabs
              text={"Goods and Services Tax (GST)"}
              index={4}
              color={5}
            />
          </div>
          <div
            onClick={() => {
              sliderRef.current.slickGoTo(4);
            }}
          >
            <CarouselSectionTabs
              text={"Tax Deducted at Source (TDS)"}
              index={5}
              color={1}
            />
          </div>
          <div
            onClick={() => {
              sliderRef.current.slickGoTo(5);
            }}
          >
            <CarouselSectionTabs
              text={"Payroll Compliance"}
              index={6}
              color={2}
            />
          </div>
          <div
            onClick={() => {
              sliderRef.current.slickGoTo(6);
            }}
          >
            <CarouselSectionTabs
              text={"Sexual Harassment Prevention"}
              index={7}
              color={3}
            />
          </div>
          <div
            onClick={() => {
              sliderRef.current.slickGoTo(7);
            }}
          >
            <CarouselSectionTabs
              text={"Contract Labour Regulations"}
              index={8}
              color={4}
            />
          </div>
          <div
            onClick={() => {
              sliderRef.current.slickGoTo(8);
            }}
          >
            <CarouselSectionTabs
              text={"Equal Remuneration"}
              index={9}
              color={5}
            />
          </div>
        </Marquee>
      </div>
         </div>
      <div className="promise_bg_image">
        <div className="carousel_zigzag h-20 overflow-hidden"> </div>
      </div>
    </div>
  );
}
