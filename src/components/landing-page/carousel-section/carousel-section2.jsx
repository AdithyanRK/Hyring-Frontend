import React, { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderButton from "@/element/landing-page/button/slider-button";
import CarouselSectionTabs from "@/element/landing-page/carousel-section/carousel-section-tabs";
import CarouselSectionCard from "@/element/landing-page/carousel-section/carousel-section-card";
import AwardWithCheckSvg from "@/assets/icons/landing-page/AwardWithCheckSvg";
import AiSvg from "@/assets/icons/landing-page/AiSvg";
import SearchSvg from "@/assets/icons/landing-page/searchSvg";
import CalendarSvg from "@/assets/icons/landing-page/CalendarSvg";
import EmployeeManagementSvg from "@/assets/icons/landing-page/employeeManagementSvg";
import BillMonitoring from "@/assets/icons/landing-page/billMonitoringSvg";
import ContractTracking from "@/assets/icons/landing-page/contractTrackingSvg";
import Assets from "@/assets/icons/landing-page/workspaceSvg";
import InterviewManagement from "@/assets/icons/landing-page/interviewManagementSvg";
import TimeSheet from "@/assets/icons/landing-page/timeSheet";
import CyberSecurity from "@/assets/icons/landing-page/cyberSecurity";

export default function CarouselSection2() {
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

  return (
    <div className="w-full h-[100vh] bg-white border-2 mt-20 border-primary-brown rounded-t-[60px] lg:rounded-t-[140px] px-[10px] xs:px-[20px] md:px-10 lg:px-[80px]  pt-[50px] lg:pt-[60px] pb-[36px] ">
      <div className="flex justify-between text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-primaryMedium  ">
        <h1>Seamless Portal</h1> <p>02</p>
      </div>
      <div className=" border sm:border-2 border-primary-brown mt-[22px] mb-[20px] lg:mt-[34px] xxxl:mt-[45px] xxxl:mb-[55px]"></div>

      <div className="px-0 xxs:px-[40px] md:px-[30px] xs:px-[45px] sm:px-[65px] xxxl:pt-28 py-10 md:pt-8 md:pb-0 lg:py-14">
        <Slider {...settings} ref={sliderRef}>
          <CarouselSectionCard
            text={"AI with human touch"}
            subText={
              "Intelligent technology seamlessly combined with personal interaction"
            }
            Svg={<AiSvg />}
            boxStyleColor={"bg-custom-blue"}
            starColor1={"fill-custom-yellow"}
            starColor2={"fill-custom-green"}
            starColor3={"fill-custom-yellow"}
          />
          <CarouselSectionCard
            text={"Discover HR-vetted Candidates"}
            subText={
              "Find pre-screened, high-quality candidates through HR expertise"
            }
            Svg={<SearchSvg />}
            boxStyleColor={"bg-custom-red"}
            starColor1={"fill-custom-red"}
            starColor2={"fill-custom-yellow"}
            starColor3={"fill-custom-red"}
          />
          <CarouselSectionCard
            text={"Leave Management"}
            Svg={<CalendarSvg />}
            boxStyleColor={"bg-custom-violet"}
            subText={"Efficiently track and manage employee time-off requests"}
            starColor1={"fill-custom-yellow"}
            starColor2={"fill-custom-green"}
            starColor3={"fill-custom-red"}
          />
          <CarouselSectionCard
            text={"Employee Management"}
            Svg={<EmployeeManagementSvg />}
            subText={"Streamline workforce organization and coordination"}
            boxStyleColor={"bg-custom-green"}
            starColor1={"fill-custom-blue"}
            starColor2={"fill-custom-yellow"}
            starColor3={"fill-custom-yellow"}
          />
          <CarouselSectionCard
            text={"Monitor Billing"}
            subText={"Track and oversee invoicing and financial transactions"}
            Svg={<BillMonitoring />}
            boxStyleColor={"bg-custom-yellow"}
            starColor1={"fill-custom-yellow"}
            starColor2={"fill-custom-green"}
            starColor3={"fill-custom-yellow"}
          />
          <CarouselSectionCard
            text={"Contract Tracking"}
            subText={"Manage and stay up-to-date on contractual agreements"}
            Svg={<ContractTracking />}
            boxStyleColor={"bg-custom-blue"}
            starColor1={"fill-custom-yellow"}
            starColor2={"fill-custom-green"}
            starColor3={"fill-custom-yellow"}
          />
          <CarouselSectionCard
            text={"Interview Management"}
            subText={"Coordinate and facilitate seamless candidate interviews"}
            Svg={<InterviewManagement />}
            boxStyleColor={"bg-custom-red"}
            starColor1={"fill-custom-blue"}
            starColor2={"fill-custom-green"}
            starColor3={"fill-custom-blue"}
          />
          <CarouselSectionCard
            text={"Timesheet Supervision"}
            subText={"Monitor and review employee work hours and productivity"}
            Svg={<TimeSheet />}
            boxStyleColor={"bg-custom-violet"}
            starColor1={"fill-custom-blue"}
            starColor2={"fill-custom-green"}
            starColor3={"fill-custom-blue"}
          />
          <CarouselSectionCard
            text={"Cyber Security Management"}
            subText={"Monitor and review employee work hours and productivity"}
            Svg={<CyberSecurity />}
            boxStyleColor={"bg-custom-green"}
            starColor1={"fill-custom-yellow"}
            starColor2={"fill-custom-green"}
            starColor3={"fill-custom-blue"}
          />
          <CarouselSectionCard
            text={"Asset Administration"}
            subText={
              "Effectively manage and maintain company resources and inventory"
            }
            Svg={<Assets />}
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
          <CarouselSectionTabs
            text={"AI with human touch"}
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
            text={"Discover HR-vetted Candidates"}
            index={2}
            color={2}
          />
        </div>
        <div
          onClick={() => {
            sliderRef.current.slickGoTo(2);
          }}
        >
          <CarouselSectionTabs text={"Leave Management"} index={3} color={3} />
        </div>
        <div
          onClick={() => {
            sliderRef.current.slickGoTo(3);
          }}
        >
          <CarouselSectionTabs
            text={"Employee Management"}
            index={4}
            color={4}
          />
        </div>
        <div
          onClick={() => {
            sliderRef.current.slickGoTo(4);
          }}
        >
          <CarouselSectionTabs text={"Monitor Billing"} index={5} color={5} />
        </div>
        <div
          onClick={() => {
            sliderRef.current.slickGoTo(5);
          }}
        >
          <CarouselSectionTabs text={"Contract Tracking"} index={6} color={1} />
        </div>
        <div
          onClick={() => {
            sliderRef.current.slickGoTo(6);
          }}
        >
          <CarouselSectionTabs
            text={"Interview Management"}
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
            text={"Timesheet Supervision"}
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
            text={"Cyber Security Management"}
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
            text={"Asset Administration"}
            index={10}
            color={5}
          />
        </div>
      </Slider>
    </div>
  );
}
