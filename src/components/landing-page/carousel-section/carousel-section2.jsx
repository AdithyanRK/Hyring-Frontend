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
import { useWindowHeight } from "@react-hook/window-size";
import Marquee from "react-fast-marquee";

export default function CarouselSection2() {
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
        ${onlyHeight < 440 ? "pt-7  rounded-t-[60px] " : " "}
      ${onlyHeight >= 440 && onlyHeight < 540 ? "pt-9  rounded-t-[60px] sm:rounded-t-[80px] lg:rounded-t-[120px] xl:rounded-t-[140px] " : " "}
      ${onlyHeight >= 540 && onlyHeight < 640 ? "pt-11   rounded-t-[60px] sm:rounded-t-[100px] lg:rounded-t-[120px] xl:rounded-t-[140px]" : " "}
      ${onlyHeight >= 640 ? "pt-14  rounded-t-[60px] sm:rounded-t-[100px] lg:rounded-t-[120px] xl:rounded-t-[140px]" : " "}
     
      

         border-primary-brown  `}
  >
      <div>
      <div
          className={`flex justify-between 
      
        ${onlyHeight < 440 ? "text-3xl " : " "}
        ${
          onlyHeight >= 440 && onlyHeight < 768
            ? "text-3xl sm:text-4xl lg:text-[46px] "
            : " "
        }
        ${
          onlyHeight >= 768
            ? "text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[54px] "
            : " "
        }

        font-primaryMedium  `}
        >
        <h1>Seamless Portal</h1> <p>02</p>
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
           :  " "
       }
      
      border sm:border-2 border-primary-brown  `}
        ></div>


      <div className="xxs:px-[40px] md:px-[30px] xs:px-[45px] sm:px-[50px]   ">
        <Slider {...settings} ref={sliderRef}>
          <CarouselSectionCard
            text={"AI with human touch"}
            subText={
              "Intelligent technology seamlessly combined with personal interaction"
            }
            Svg={<AiSvg />}
            boxStyleColor={"bg-custom-yellow"}
            starColor1={"fill-custom-blue"}
            starColor2={"fill-custom-orange"}
            starColor3={"fill-custom-violet"}
            starColor4={"fill-custom-dark-green"}
           

          />
          <CarouselSectionCard
            text={"Discover HR-vetted Candidates"}
            subText={
              "Find pre-screened, high-quality candidates through HR expertise"
            }
            Svg={<SearchSvg />}
            boxStyleColor={"bg-custom-green"}
            starColor1={"fill-custom-dark-green"}
            starColor2={"fill-custom-yellow"}
            starColor3={"fill-custom-sandal"}
            starColor4={"fill-custom-blue"}
          />
          <CarouselSectionCard
            text={"Leave Management"}
            Svg={<CalendarSvg />}
            boxStyleColor={"bg-custom-violet"}
            subText={"Efficiently track and manage employee time-off requests"}
            starColor1={"fill-custom-yellow"}
            starColor2={"fill-custom-green"}
            starColor3={"fill-custom-red"}
            starColor4={"fill-custom-blue"}
          />
          <CarouselSectionCard
            text={"Employee Management"}
            Svg={<EmployeeManagementSvg />}
            subText={"Streamline workforce organization and coordination"}
            boxStyleColor={"bg-custom-red"}
            starColor1={"fill-custom-yellow"}
            starColor2={"fill-custom-blue"}
            starColor3={"fill-custom-violet"}
             starColor4={"fill-custom-dark-green"}
          />
          <CarouselSectionCard
            text={"Monitor Billing"}
            subText={"Track and oversee invoicing and financial transactions"}
            Svg={<BillMonitoring />}
            boxStyleColor={"bg-custom-blue"}
            starColor1={"fill-custom-yellow"}
            starColor2={"fill-custom-orange"}
            starColor3={"fill-custom-red"}
             starColor4={"fill-custom-dark-green"}
          />
          <CarouselSectionCard
            text={"Contract Tracking"}
            subText={"Manage and stay up-to-date on contractual agreements"}
            Svg={<ContractTracking />}
            boxStyleColor={"bg-custom-yellow"}
            starColor1={"fill-custom-violet"}
            starColor2={"fill-custom-dark-green"}
            starColor3={"fill-custom-rose"}
             starColor4={"fill-custom-blue"}
          />
          <CarouselSectionCard
            text={"Interview Management"}
            subText={"Coordinate and facilitate seamless candidate interviews"}
            Svg={<InterviewManagement />}
            boxStyleColor={"bg-custom-green"}
            starColor1={"fill-custom-yellow"}
            starColor2={"fill-custom-orange"}
            starColor3={"fill-custom-blue"}
             starColor4={"fill-custom-dark-green"}
          />
          <CarouselSectionCard
            text={"Timesheet Supervision"}
            subText={"Monitor and review employee work hours and productivity"}
            Svg={<TimeSheet />}
            boxStyleColor={"bg-custom-violet"}
            starColor1={"fill-custom-blue"}
            starColor2={"fill-custom-green"}
            starColor3={"fill-custom-rose"}
             starColor4={"fill-custom-orange"}
          />
          <CarouselSectionCard
            text={"Cyber Security Management"}
            subText={"Monitor and review employee work hours and productivity"}
            Svg={<CyberSecurity />}
            boxStyleColor={"bg-custom-red"}
            starColor1={"fill-custom-yellow"}
            starColor2={"fill-custom-blue"}
            starColor3={"fill-custom-violet"}
             starColor4={"fill-custom-dark-green"}
          />
          <CarouselSectionCard
            text={"Asset Administration"}
            subText={
              "Effectively manage and maintain company resources and inventory"
            }
            Svg={<Assets />}
            boxStyleColor={"bg-custom-blue"}
            starColor1={"fill-custom-red"}
            starColor2={"fill-custom-green"}
            starColor3={"fill-custom-yellow"}
             starColor4={"fill-custom-orange"}
          />
        </Slider>
      </div>

      <Marquee   className={`
       ${onlyHeight < 440 ? "py-2 " : " "}
       ${onlyHeight >= 440 && onlyHeight < 540 ? "py-3 " : " "}
        ${onlyHeight >= 540 && onlyHeight < 640 ? "py-7 " : " "}
        ${onlyHeight >= 640 && onlyHeight < 768 ? "py-9 " : " "}
        ${onlyHeight >= 768 ? "py-16  " : " "}

         `}>
        <div
          onClick={() => {
            sliderRef.current.slickGoTo(0);
          }}
        >
          <CarouselSectionTabs
            text={"AI with human touch"}
            index={1}
            color={5}
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
            color={4}
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
            color={2}
          />
        </div>
        <div
          onClick={() => {
            sliderRef.current.slickGoTo(4);
          }}
        >
          <CarouselSectionTabs text={"Monitor Billing"} index={5} color={1} />
        </div>
        <div
          onClick={() => {
            sliderRef.current.slickGoTo(5);
          }}
        >
          <CarouselSectionTabs text={"Contract Tracking"} index={6} color={5} />
        </div>
        <div
          onClick={() => {
            sliderRef.current.slickGoTo(6);
          }}
        >
          <CarouselSectionTabs
            text={"Interview Management"}
            index={7}
            color={4}
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
            color={2}
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
            color={1}
          />
        </div>
      </Marquee>
      </div>
    </div>
  );
}
