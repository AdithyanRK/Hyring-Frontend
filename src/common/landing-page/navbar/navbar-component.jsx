import Logo from "@/assets/icons/landing-page/logo";
import BoxTheme from "@/element/landing-page/box-theme/box-theme";
import SignUpButton from "@/element/landing-page/button/sign-up-button";
import Link from "next/link";
import React, { useState } from "react";

const NavbarComponent = ({ className }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <BoxTheme
      className={`${className} h-[102px] w-fit mt-[14px] mx-auto mb-3 md:mb-20`}
      boxStyle={`w-[95vw] h-[63px] md:h-[93px] border-2 bg-custom-bg rounded-[10px] border-primary-brown`}
      bgBoxStyle={
        "w-full h-[63px] md:h-[93px] rounded-[10px] bg-primary-brown top-[5px] left-[6px]  md:top-[9px] md:left-[10px]"
      }
    >
      <div className="flex justify-between  px-5 lg:px-10 items-center w-full md:text-lg lg:text-xl font-medium   ">
        <div className="scale-[0.6] md:scale-[0.8] lg:scale-[1] -ml-7 lg:-ml-0">
          <Link href={"/"} scroll={false}>
            <Logo />
          </Link>
        </div>
        <div className="md:flex gap-10 items-center hidden">
          <Link href={"/#whyIndia"} scroll={false}>
            Why India
          </Link>
          <Link href={"/#pricing"} scroll={false}>
            Pricing
          </Link>
          <Link href={"/contact-us"} scroll={false}>
            Contact Us
          </Link>
        </div>
        <div className="md:flex gap-1 md:gap-6 items-center hidden">
          <Link href={""} className="text-base md:text-xl">
            Login
          </Link>
          <Link href={""}>
            <SignUpButton />
          </Link>
        </div>
        <div
          onClick={() => setIsNavOpen(!isNavOpen)}
          className={`w-8 md:hidden h-8 border border-primary-brown rounded-[2px] bg-custom-green cursor-pointer flex justify-center items-center  `}
        >
          <div
            className={`${
              isNavOpen
                ? "rotate-45 delay-[600ms] ease-in-out duration-300"
                : ""
            }`}
          >
            <span
              className={`w-[17px] h-[2px] bg-primary-brown duration-300 ease-in-out mt-1 block ${
                isNavOpen ? "delay-300 translate-y-[6px]" : ""
              }`}
            ></span>
            <span
              className={`h-[2px] bg-primary-brown duration-300 ease-in-out mt-1 block ${
                isNavOpen ? "w-[0px]" : "w-[17px]"
              }`}
            ></span>
            <span
              className={`w-[17px] h-[2px] bg-primary-brown duration-300 ease-in-out mt-1 block ${
                isNavOpen ? " delay-300  -translate-y-[6px] rotate-90" : ""
              }`}
            ></span>
          </div>
        </div>
      </div>
    </BoxTheme>
  );
};

export default NavbarComponent;
