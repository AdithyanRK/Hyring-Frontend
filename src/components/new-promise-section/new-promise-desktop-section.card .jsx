import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderButton from "@/element/landing-page/button/slider-button";
import PersonGroup from "@/assets/icons/landing-page/person-group";
import PromiseClock from "@/assets/icons/landing-page/promise-clock";
import PromiseBulb from "@/assets/icons/landing-page/promise-bulb";
import PromiseMoney from "@/assets/icons/landing-page/promise-money";
import CarouselSectionMobileCard from "@/element/landing-page/carousel-section/carousel-section.mobile.card";
import BoxTheme from "@/element/landing-page/box-theme/box-theme";

const NewPromiseDesktopSection = () => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  console.log("🚀 ~ file: new-promise-desktop-section.card .jsx:16 ~ NewPromiseDesktopSection ~ activeSlide:", activeSlide)
  const values = [
    {
      id: 1,
      header: "Explore Indian Talents",
    },
    {
      id: 2,
      header: "Fill your open positions within 15 days timeline",
    },
    {
      id: 3,
      header: "Save upto 50% on satffing costs without talent compromise",
    },
    {
      id: 4,
      header: "Top 5% of Indian IT Talent",
    },
  ];
  
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows:false,
    centerMode: true,
    centerPadding: "15px",
    vertical: true,
    fade: true,
      verticalSwiping: true,
      beforeChange: (current, next) => setActiveSlide(next),
      // afterChange: current => setActiveSlide(current),
      customPaging: function(index) {
      
        return (
          <div className="flex  gap-5 xl3:gap-7">
          <BoxTheme
            top="2px"
            left="3px"
            boxStyle={`${
                index === 0 ||   index === 1 ||   index === 2
                ? `   before:content-[''] before:border-dashed before:w-[20px] before:left-[35px]  md:before:w-0 md:before:h-[65px]  before:border before:border-black before:absolute
                 md:before:top-[35px] lg:before:top-[50px] xl3:before:top-[60px] xl4:before:top-[70px]  md:before:left-[50%] `
                : ""
            }
              ${
                activeSlide === 0 &&  index === 0 ? "bg-custom-green" :  activeSlide ===1 && index === 1  ? "bg-custom-yellow" : activeSlide ===2 && index === 2  ? "bg-custom-blue" :activeSlide ===3 && index === 3  ? "bg-custom-red" : "bg-[#FFF9F3]"
              }
            w-[35px]  h-[35px]  lg:w-[50px] lg:h-[50px] xl3:w-[60px] xl3:h-[60px] xl4:w-[70px] xl4:h-[70px] transition font-primaryMedium text-lg lg:text-2xl xl4:text-[33px]  duration-500 border    rounded-[44px] border-primary-brown `}
            bgBoxStyle={
              "w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] xl3:w-[60px] xl3:h-[60px] xl4:w-[70px] xl4:h-[70px]    rounded-[44px]  bg-primary-brown "
            }
          >
            {index+1}
          </BoxTheme>

          <div
            className={`
             ${
                activeSlide === 0 &&  index === 0 ? "font-primaryBold" :  activeSlide ===1 && index === 1  ? "font-primaryBold" : activeSlide ===2 && index === 2  ? "font-primaryBold" :activeSlide ===3 && index === 3  ? "font-primaryBold" : ""
              }
          hidden md:block  text-left mt-0.5 lg:mt-1.5 xl3:mt-3.5 transition duration-1000 font-primary text-lg xl:text-xl xl3:text-2xl`}
          >
            {values[index].header}
          </div>
        </div>
        );
      },
      dots: true,
  
      dotsClass: "slick-dots slick-thumb",
  };

 
  
  return (
    <div className="w-screen  flex justify-center  md:-translate-x-[22%] xl:-translate-x-[18%]">
      <div className=" md:max-w-[400px] lg:max-w-[900px] !h-[350px] ">
        <Slider {...settings} ref={sliderRef} className=" " >
          <CarouselSectionMobileCard
            text={"Explore Indian Talents"}
            content="Uncover top-notch skilled professionals from India."
            Svg={<PersonGroup />}
            boxStyleColor={"bg-custom-green"}
            starColor={"fill-custom-red"}
          />
          <CarouselSectionMobileCard
            text={"Fill Open Positions Within 15 Days"}
            Svg={<PromiseClock />}
            content="Ensure minimal disruption to your projects with our swift staffing solutions."
            boxStyleColor={"bg-custom-yellow"}
            starColor={"fill-custom-blue"}
          />
          <CarouselSectionMobileCard
            text={"Save Up to 50% on Staffing Costs"}
            Svg={<PromiseBulb />}
            boxStyleColor={"bg-custom-blue"}
            starColor={"fill-custom-yellow"}
            content="Reduce expenses without compromising on resource quality."
          />
          <CarouselSectionMobileCard
            text={"Access the Top 5% of Indian Resources"}
            Svg={<PromiseMoney />}
            starColor={"fill-custom-green"}
            boxStyleColor={"bg-custom-red"}
            content="Rest assured that your projects are in capable hands with our elite professionals."
          />
          
        </Slider>
      </div>
    

    </div>
  );
};

export default NewPromiseDesktopSection;