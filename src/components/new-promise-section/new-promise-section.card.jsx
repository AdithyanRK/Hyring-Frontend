import BoxTheme from "@/element/landing-page/box-theme/box-theme";
import React, { useState, useEffect } from "react";
import PersonGroup from "@/assets/icons/landing-page/person-group";
import PromiseClock from "@/assets/icons/landing-page/promise-clock";
import PromiseBulb from "@/assets/icons/landing-page/promise-bulb";
import PromiseMoney from "@/assets/icons/landing-page/promise-money";
import NewPromiseStepper from "./new-promise-section.stepper";

const NewPromiseSection = () => {
  const [index, setIndex] = useState(0);

  const data = [
    {
      header: "ONE",
      bg: "bg-[#EAA24B]",
      content: "IPSUM LOREM LOREM IPSUM ONE",
      icon: <PersonGroup />,
    },
    {
      header: "TWO",
      bg: "bg-[#B6ECCC]",
      content: "IPSUM LOREM LOREM IPSUM TWO",
      icon: <PromiseClock />,
    },
    {
      header: "THREE",
      bg: "bg-[#B9C8FF]",
      content: "IPSUM LOREM LOREM IPSUM THREE",
      icon: <PromiseMoney />,
    },
    {
      header: "FOUR",
      bg: "bg-[#61E396]",
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
      <div className="grid grid-cols-2">
        <BoxTheme
          className={"h-fit w-fit "}
          boxStyle={`w-[300px] sm:w-[500px] h-[350px] 2xl:h-[400px]  md:w-[600px] 2xl:w-[800px] relative border-2 border-primary-brown rounded-3xl ${data[index].bg}`}
          bgBoxStyle={
            "  w-full h-full border-2 border-primary-brown -z-1  rounded-3xl bg-primary-brown"
          }
        >
          <div className="flex flex-col">
            {data[index].icon}

            <p className="text-2xl   md:text-3xl  lg:text-[40px] font-primaryMedium leading-10 mt-4 md:mt-10">
              {data[index].header}
            </p>
            <p className="">{data[index].content}</p>
          </div>
        </BoxTheme>
        <div>
        <NewPromiseStepper index={index}/>
        </div>
        {/* <div className={` h-40 animate-circleFill`}>
          <p>{data[index].header}</p>
          <p>{data[index].content}</p>
        </div> */}
      </div>
    </>
  );
};

export default NewPromiseSection;
