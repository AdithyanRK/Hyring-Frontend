import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderButton from "@/element/landing-page/button/slider-button";
import PersonGroup from "@/assets/icons/landing-page/person-group";
import PromiseClock from "@/assets/icons/landing-page/promise-clock";
import PromiseBulb from "@/assets/icons/landing-page/promise-bulb";
import PromiseMoney from "@/assets/icons/landing-page/promise-money";
import CarouselSectionMobileCard from "@/element/landing-page/carousel-section/carousel-section.mobile.card";

const NewPromiseMobileSection = () => {
  const sliderRef = useRef(null);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <SliderButton className="scale-[0.5] xs:scale-[0.6] sm:scale-[0.7] md:scale-[0.8] lg:scale-[1] -mr-18" />
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
        <SliderButton
          IconRotate={"rotate-180"}
          className="scale-[0.5] xs:scale-[0.6] sm:scale-[0.7] md:scale-[0.8] lg:scale-[1]"
        />
      </div>
    );
  }
  return (
    <>
      <div className="m-3 max-w-[258px] mx-auto my-0 xxs:max-w-[320px]">
        <Slider {...settings} ref={sliderRef}>
          <CarouselSectionMobileCard
            text={"Explore Indian Talents"}
            content="LOREM IPSUM LOREM IPSUM"
            Svg={<PersonGroup />}
            boxStyleColor={"bg-custom-green"}
            starColor={"fill-custom-yellow"}
          />
          <CarouselSectionMobileCard
            text={"Fill your open positions within 15 days timeline"}
            Svg={<PromiseClock />}
            content="LOREM IPSUM LOREM IPSUM"
            boxStyleColor={"bg-custom-yellow"}
            starColor={"fill-custom-blue"}
          />
          <CarouselSectionMobileCard
            text={"Save upto 50% on satffing costs without talent compromise"}
            Svg={<PromiseBulb />}
            boxStyleColor={"bg-custom-green"}
            starColor={"fill-custom-yellow"}
            content="LOREM IPSUM LOREM IPSUM"
          />
          <CarouselSectionMobileCard
            text={"Top 5% of Indian IT Talent"}
            Svg={<PromiseMoney />}
            starColor={"fill-custom-yellow"}
            boxStyleColor={"bg-custom-yellow"}
            content="LOREM IPSUM LOREM IPSUM"
          />
        </Slider>
      </div>
    </>
  );
};

export default NewPromiseMobileSection;
