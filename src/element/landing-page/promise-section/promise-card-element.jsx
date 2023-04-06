import React from "react";
import BoxTheme from "../box-theme/box-theme";

export default function PromiseCardElement({ item }) {
  return (
    <div className="absolute -translate-y-2/4 top-[55%] lg:top-2/4 lg:translate-x-1/4">
      <BoxTheme
      top="12px"
      left="12px"
      className={"h-fit w-fit "}
      boxStyle={`w-[300px] sm:w-[500px] h-[350px] 2xl:h-[400px]  md:w-[600px] 2xl:w-[800px] relative border-2 border-primary-brown rounded-3xl bg-[${item.bgColor}]  promise_animate-glow`}
      bgBoxStyle={
        "  w-full h-full   border-2 border-primary-brown -z-1  rounded-3xl bg-[#E0E0E0]"
      }
    >
      <div className="p-4 lg:p-12 md:p-10 2xl:p-20  flex flex-col justify-center items-center sm:items-start">
        <p className="">{item.icon}</p>
        <p className="text-2xl   md:text-3xl  lg:text-[40px] font-primaryMedium leading-10 mt-4 md:mt-10">
          {item.header}
        </p>
        <p className="text-lg md:text-2xl lg:text-[26px] font-primaryLight mt-3">{item.message}</p>
      </div>
    </BoxTheme>
    </div>
  );
}
