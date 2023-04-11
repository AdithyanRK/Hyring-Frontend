import BoxTheme from "@/element/landing-page/box-theme/box-theme";
import React, { useState, useEffect } from "react";
import PersonGroup from "@/assets/icons/landing-page/person-group";
import PromiseClock from "@/assets/icons/landing-page/promise-clock";
import PromiseBulb from "@/assets/icons/landing-page/promise-bulb";
import PromiseMoney from "@/assets/icons/landing-page/promise-money";
import NewPromiseStepper from "./new-promise-section.stepper";
import Star4 from "@/assets/icons/landing-page/star4";
import HeartRed from "@/assets/icons/landing-page/heart-red";
import HeartBrown from "@/assets/icons/landing-page/heart-brown";

const NewPromiseSectionold = () => {
  const [index, setIndex] = useState(0);
  const [changePromise, setChangePromise] = useState(false);

  const data = [
    {
      header: "Explore Indian Talents",
      bg: "bg-[#B8C8FF]",
      content: "Uncover top-notch skilled professionals from India.",
      icon: <PersonGroup />,
    },
    {
      header: "Fill Open Positions Within 15 Days",
      bg: "bg-[#B6ECCC]",
      content:
        "Ensure minimal disruption to your projects with our swift staffing solutions.",
      icon: <PromiseClock />,
    },
    {
      header: "Save Up to 50% on Staffing Costs",
      bg: "bg-[#FFF5B7]",
      content: "Reduce expenses without compromising on resource quality.",
      icon: <PromiseMoney />,
    },
    {
      header: "Access the Top 5% of Indian Resources",
      bg: "bg-[#FDB2B2]",
      content:
        "Rest assured that your projects are in capable hands with our elite professionals.",
      icon: <PromiseBulb />,
    },
  ];

  useEffect(() => {
    ChangeTimerFunction();
  }, [changePromise]);

  const ChangeTimerFunction = () => {
    console.log(changePromise, "chage");
    if (changePromise) {
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
    } else {
      // const time = [5000, 9000, 13000, 15000, 18000];
      // let temp = index;
      // let timeTemp = 0;
      // if (temp > 3) {
      //   setChangePromise(false);
      // }
      // while (temp >= 0 && temp <= 3) {
      //   temp++;
      //   if (index >= 0 && index <= 3) {
      //     setTimeout(() => {
      //       if (index == 3) {
      //         ++temp;
      //       }
      //       setIndex(index + 1);
      //       timeTemp++;
      //       console.log(time[timeTemp], "time");
      //     }, time[timeTemp]);
      //   } else {
      //     setChangePromise(false);
      //   }
      // }
    }
  };

  return (
    <>
      <div className="flex gap-5 lg:gap-10 mb-16 w-full max-w-[1800px] mx-auto my-0 pt-24 pb-24">
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
              {/* <p className="text-4xl font-primaryMedium leading-10 mt-4 md:mt-10">
                {data[index].header}
              </p> */}
              <p className="text-2xl font-primary mt-3">
                {data[index].content}
              </p>
            </div>
          </BoxTheme>
        </div>
        <div className="flex-1 pl-24 -mt-6">
          <NewPromiseStepper
            index={index}
            setIndex={setIndex}
            setChangePromise={setChangePromise}
            changePromise={changePromise}
          />
        </div>
      </div>
    </>
  );
};

export default NewPromiseSectionold;
