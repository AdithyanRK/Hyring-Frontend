import BoxTheme from "@/element/landing-page/box-theme/box-theme";
import React, { useState, useEffect } from "react";
import PersonGroup from "@/assets/icons/landing-page/person-group";
import PromiseClock from "@/assets/icons/landing-page/promise-clock";
import PromiseBulb from "@/assets/icons/landing-page/promise-bulb";
import PromiseMoney from "@/assets/icons/landing-page/promise-money";
import NewPromiseStepper from "./new-promise-section.stepper";
import NewPromiseMobileSection from "./new-promise-mobile-section.card";
import Star4 from "@/assets/icons/landing-page/star4";
import HeartRed from "@/assets/icons/landing-page/heart-red";
import HeartBrown from "@/assets/icons/landing-page/heart-brown";

const NewPromiseSection = () => {
  const [index, setIndex] = useState(0);

  const data = [
    {
      header: "Explore Indian Talents",
      bg: "bg-[#B8C8FF]",
      content: "IPSUM LOREM LOREM IPSUM ONE",
      icon: <PersonGroup />,
    },
    {
      header: "Fill your open positions within 15 days timeline",
      bg: "bg-[#B6ECCC]",
      content: "IPSUM LOREM LOREM IPSUM TWO",
      icon: <PromiseClock />,
    },
    {
      header: "Save upto 50% on satffing costs without talent compromise",
      bg: "bg-[#FFF5B7]",
      content: "IPSUM LOREM LOREM IPSUM THREE",
      icon: <PromiseMoney />,
    },
    {
      header: "Top 5% of Indian IT Talent",
      bg: "bg-[#FDB2B2]",
      content: "IPSUM LOREM LOREM IPSUM FOUR",
      icon: <PromiseBulb />,
    },
  ];

  useEffect(() => {
    ChangeTimerFunction();
  }, []);

  const ChangeTimerFunction = () => {
    setTimeout(() => {
      setIndex(0);
    }, 0);

    setTimeout(() => {
      setIndex(1);
    }, 5000);

    setTimeout(() => {
      setIndex(2);
    }, 9000);

    setTimeout(() => {
      setIndex(3);
    }, 13000);

    setTimeout(() => {
      ChangeTimerFunction();
    }, 15000);
  };

  return (
    <>
      <div className="hidden md:flex gap-5 lg:gap-10 mb-16 w-full max-w-[1800px] mx-auto my-0 pt-24 pb-24">
        <div className="flex-1 pl-14 ml-3">
          <BoxTheme
            top={5}
            left={5}
            className={"h-full w-full"}
            boxStyle={`w-full h-full px-5 lg:px-10 xl:px-20 relative flex !justify-start border-2 border-primary-brown rounded-3xl ${data[index].bg}`}
            bgBoxStyle={
              "  w-full h-full border-2 border-primary-brown rounded-3xl bg-primary-brown"
            }
          >
            <div className="scale-[.7] lg:scale-[0.9] absolute -top-8 -right-8 ">
              <Star4 className={`fill-[#FFF5B7] animate-spin`} />
            </div>
            <div className="p-3">
              <p> {data[index].icon}</p>
              <p className="text-4xl font-primaryMedium leading-10 mt-4 md:mt-10">
                {data[index].header}
              </p>
              <p className="text-2xl font-primaryLight mt-3">
                {data[index].content}
              </p>
            </div>
          </BoxTheme>
        </div>
        <div className="flex-1 pl-24 -mt-6">
          <NewPromiseStepper index={index} />
        </div>
      </div>
      <div className="flex md:hidden mb-32 md:mb-0">
        <NewPromiseMobileSection />
      </div>
    </>
  );
};

export default NewPromiseSection;
