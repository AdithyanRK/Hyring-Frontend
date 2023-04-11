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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
      className={`${className} !top-[310px] !right-[140px] xxs:!top-2/4 xxs:!-right-[10px] xxs:!-mt-5 `}
        style={{ ...style, display: "block", }}
        onClick={onClick}
      >
        <SliderButton className="scale-[0.6] sm:scale-[0.7] md:scale-[0.8] lg:scale-[1] -mr-18" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} !top-[310px] !left-[120px] xxs:!top-2/4 xxs: xxs:!-left-[45px] xxs:!-mt-5 `}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <SliderButton
          IconRotate={"rotate-180"}
          className=" scale-[0.6] sm:scale-[0.7] md:scale-[0.8] lg:scale-[1]"
        />
      </div>
    );
  }
  return (
    <>
      <div className="m-3 max-w-[360px] mx-auto my-0 xs:max-w-[400px] sm:max-w-[500px]  ">
        <Slider {...settings} ref={sliderRef}>
          <CarouselSectionMobileCard
            text={"Explore Indian Talents"}
            content="Uncover top-notch skilled professionals from India."
            Svg={<PersonGroup />}
            boxStyleColor={"bg-custom-green"}
            starColor={"fill-custom-yellow"}
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
            boxStyleColor={"bg-custom-green"}
            starColor={"fill-custom-yellow"}
            content="Reduce expenses without compromising on resource quality."
          />
          <CarouselSectionMobileCard
            text={"Access the Top 5% of Indian Resources"}
            Svg={<PromiseMoney />}
            starColor={"fill-custom-yellow"}
            boxStyleColor={"bg-custom-yellow"}
            content="Rest assured that your projects are in capable hands with our elite professionals."
          />
          
        </Slider>
      </div>
    </>
  );
};

export default NewPromiseMobileSection;
