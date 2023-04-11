import MeshSvg from "@/assets/icons/landing-page/mesh";
import Star4 from "@/assets/icons/landing-page/star4";
import { useScroll, useTransform } from "framer-motion";
import React, { useState } from "react";
import BoxTheme from "../box-theme/box-theme";
import GetStartedButton from "../button/get-started-button";

export default function PricingSectionCard({
  className,
  svg,
  title,
  price,
  subText,
  starColor,
  boxColor,
  jobSeekerHover,
  setJobSeekerHover,
  employerHover,
  setEmployerHover,
  hoverChange,
  setHoverChange,
}) {
  return title === "Job Seekers" ? (
    <BoxTheme
      disableAnimate={true}
      className={`${className} h-fit w-fit cursor-pointer  `}
      boxStyle={`w-[240px]  lg:w-[344px] h-fit  border-2 bg-white rounded-[20px] border-primary-brown    `}
      bgBoxStyle={`w-full h-full rounded-[20px] ${
        jobSeekerHover ? "bg-primary-brown animate-circleFill" : ""
      }   top-[13px] left-[9px] `}
    >
      <div
        className="w-full h-full px-7 lg:pl-11 lg:pr-6 py-7 lg:py-11 flex flex-col font-primaryMedium   gap-4 justify-center items-center md:items-start"
        onMouseEnter={() => {
          setEmployerHover(false);
          setJobSeekerHover(true);
          setHoverChange(true);
        }}
        // onMouseLeave={() => setJobSeekerHover(false)}
      >
        <div>{svg}</div>
        <div className="text-lg md:text-2xl lg:text-[26px] text-medium ">
          {title}
        </div>
        <div className="text-2xl   md:text-3xl lg:text-[40px] text-medium text-center md:text-left">
          ${price} <span className="text-base ">{subText}</span>
        </div>

        <GetStartedButton
        role="1"
          className="md:mt-5 lg:mt-[70px] "
          hover={jobSeekerHover}
          boxColor="bg-primary-orange"
        />
      </div>
      <div className="scale-[.7] lg:scale-[0.9] absolute -top-8 -left-8 ">
        <Star4
          className={` ${
            jobSeekerHover ? "block" : "hidden"
          } fill-${starColor} animate-spin`}
        />
      </div>
      <div
        className={`overflow-hidden absolute top-0 rounded-[20px] w-full h-full   -z-1   ${
          jobSeekerHover ? "animate-circleFill" : "hidden"
        }`}
      >
        <MeshSvg
          className={`scale-[1.9] ${`bg-${boxColor}`} mt-8 opacity-50 `}
        />
      </div>
    </BoxTheme>
  ) : (
    <BoxTheme
      disableAnimate={true}
      className={`${className} h-fit w-fit cursor-pointer  `}
      boxStyle={`w-[240px]  lg:w-[344px] h-fit  border-2 bg-white rounded-[20px] border-primary-brown    `}
      bgBoxStyle={`w-full h-full rounded-[20px] ${
        employerHover ? "bg-primary-brown animate-circleFill" : ""
      }   top-[13px] left-[9px] `}
    >
      <div
        className="w-full h-full px-7 lg:pl-11 lg:pr-6 py-7 lg:py-11 flex flex-col font-primaryMedium   gap-4 justify-center items-center md:items-start"
        onMouseEnter={() => {
          setJobSeekerHover(false);
          setEmployerHover(true);
          setHoverChange(false);
        }}
        // onMouseLeave={() => setEmployerHover(false)}
      >
        <div>{svg}</div>
        <div className="text-lg md:text-2xl lg:text-[26px] text-medium ">
          {title}
        </div>
        <div className="flex gap-3 items-center ">
          <div className="text-2xl   md:text-3xl lg:text-[40px] text-medium text-center md:text-left">
            ${price}
          </div>
          <div className="text-base ">{subText}</div>
        </div>

        <GetStartedButton
        role="2"
          className="md:mt-5 lg:mt-[70px] "
          hover={employerHover}
          boxColor="bg-primary-orange"
        />
      </div>
      <div className="scale-[.7] lg:scale-[0.9] absolute -top-8 -left-8 ">
        <Star4
          className={` ${
            employerHover ? "block" : "hidden"
          } fill-${starColor} animate-spin`}
        />
      </div>
      <div
        className={`overflow-hidden absolute top-0 rounded-[20px] w-full h-full   -z-1   ${
          employerHover ? "animate-circleFill" : "hidden"
        }`}
      >
        <MeshSvg
          className={`scale-[1.9] ${`bg-${boxColor}`} mt-8 opacity-50 `}
        />
      </div>
    </BoxTheme>
  );
}
