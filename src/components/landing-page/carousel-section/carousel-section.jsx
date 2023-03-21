import React, { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderButton from "@/element/landing-page/button/slider-button";
import CarouselSectionCard1 from "./carousel-section-card1";
import CarouselSectionCard2 from "./carousel-section-card2";
import CarouselSectionCard3 from "./carousel-section-card3";
import CarouselSectionTabs from "@/element/landing-page/carousel-section/carousel-section-tabs";


export default function CarouselSection() {
  const [dataIndex, setDataIndex] = useState(0);




  let getDataIndex =()=>{
    setTimeout(()=>{
      let slide = document.querySelector("#main-slider .slick-active .slide-item ");
      setDataIndex(slide.getAttribute("data"));
    },0)
   
  }
  
 

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <div onClick={() =>{  getDataIndex()}}>
          <SliderButton className="scale-[0.5] xs:scale-[0.6] sm:scale-[0.7] md:scale-[0.8] lg:scale-[1]" />
        </div>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <div onClick={() => {getDataIndex()}}>
          <SliderButton IconRotate={"rotate-180"} className="scale-[0.5] xs:scale-[0.6] sm:scale-[0.7] md:scale-[0.8] lg:scale-[1]" />
        </div>
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
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
    rtl: false,
    variableWidth: true,
    adaptiveHeight: true,
    infinte:true,
    swipeToSlide: true,
    
  };


 
  return (
    <div className=" bg-white border-2 mt-20 border-primary-brown rounded-t-[60px] lg:rounded-t-[140px] px-[10px] xs:px-[20px] lg:px-[80px] pt-[50px] lg:pt-[75px] xl:pt-[100px] pb-[36px] ">
      <div className="flex justify-between text-[20px] sm:text-[28px] lg:text-[54px] font-medium">
        {dataIndex == 0 ? (
          <>
            <h1>Employee Retention</h1> <p>01</p>
          </>
        ) : dataIndex == 1 ? (
          <>
            <h1>Web Portal</h1> <p>02</p>
          </>
        ) : (
          <>
            <h1>Compliance</h1> <p>03</p>
          </>
        )}
      </div>
      <div className=" border sm:border-2 border-primary-brown mt-[22px] lg:mt-[44px] mb-6"></div>

      <div className="px-[30px] xs:px-[45px] sm:px-[65px]"  id={"main-slider"}>
        <Slider {...settings}>
            <div className="slide-item" data={0}><CarouselSectionCard1/></div>
            <div className="slide-item" data={1}><CarouselSectionCard2 /></div>
            <div className="slide-item" data={2}><CarouselSectionCard3 /></div>
        </Slider>
      </div>

        <Slider {...settings1} className="py-2 md:py-8 ">
         <CarouselSectionTabs text={"New Mackbook"} index={1} color={1} />
         <CarouselSectionTabs text={"Annual International Retreat"} index={2} color={2} />
         <CarouselSectionTabs text={"Big Diwali Gifts"} index={3} color={3} />
         <CarouselSectionTabs text={"Monthly Awards"} index={4} color={4} />
         <CarouselSectionTabs text={"Health Insurance for Family Members"} index={5} color={5} />
         <CarouselSectionTabs text={"New Mackbook"} index={1} color={1} />
         <CarouselSectionTabs text={"Annual International Retreat"} index={2} color={2} />
         <CarouselSectionTabs text={"Big Diwali Gifts"} index={3} color={3} />
         <CarouselSectionTabs text={"Monthly Awards"} index={4} color={4} />
         <CarouselSectionTabs text={"Health Insurance for Family Members"} index={5} color={5} />
        </Slider>
      
    </div>
  );
}
