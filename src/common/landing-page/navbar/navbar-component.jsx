import Logo from "@/assets/icons/landing-page/logo";
import BoxTheme from "@/element/landing-page/box-theme/box-theme";
import SignUpButton from "@/element/landing-page/button/sign-up-button";
import Link from "next/link";
import React, { useState } from "react";
import ResponsiveNavbar from "./responsive-nav-component";
import TextMark from "@/assets/icons/landing-page/text-mark";
import NavTextMark from "@/assets/icons/landing-page/nav-text-mark";
import { useRouter } from "next/router";

const NavbarComponent = ({ className }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router =useRouter();
  console.log("router",router.pathname)
  return (
    <div className="pt-[14px]">
      <BoxTheme
        top="6px"
        left="7px"
        className={`${className} h-[67px] md:h-[102px] w-fit mx-auto `}
        boxStyle={`w-[95vw] h-[63px] md:h-[93px] border-2 bg-custom-bg rounded-[10px] border-primary-brown 2xl:max-w-[1800px] 2xl:mx-auto 2xl:my-0`}
        bgBoxStyle={
          "w-full h-[63px] md:h-[93px] rounded-[10px] bg-primary-brown "
        }
      >
        <div className="flex justify-between  px-5 lg:px-10 items-center font-primaryMedium w-full text-[17px] lg:text-xl     ">
          <div className="scale-[0.6] md:scale-[0.8] lg:scale-[1] -ml-7 lg:-ml-0">
            <Link href={"/"} scroll={false}>
              <Logo />
            </Link>
          </div>
          <div className="md:flex gap-8 lg:gap-10 xl3:gap-16 xl4:gap-20 items-center hidden">
            <Link
              href={"/about-us"}
              scroll={false}
              className="navLink"
            >
               <p className="relative inline-block">
                <span className="absolute   -left-[14px] -top-4 lg:-left-1  scale-[0.85] lg:scale-[1.1]  ">
                  {router.pathname == "/about-us" ? <TextMark/> : <NavTextMark />}
                </span>
                
                About Us
              </p>
            </Link>
            <Link
              href={"/why-india"}
              scroll={false}
              className="navLink"
            >
               <p className="relative inline-block ">
                <span className="absolute   -left-[14px] -top-4 lg:-left-1  scale-[0.95] lg:scale-[1.1]  ">
                {router.pathname == "/why-india" ? <TextMark/> : <NavTextMark />}
                </span>
                Why India
              </p>
              
            </Link>
            <Link
              href={"/pricing"}
              scroll={false}
              className="navLink"
            >
              <p className="relative inline-block ">
                <span className="absolute   -left-[22px] -top-4 lg:-left-[18px]  scale-[0.8] lg:scale-[1]  ">
                {router.pathname == "/pricing" ? <TextMark/> : <NavTextMark />}
                </span>
                Pricing
              </p>
             
            </Link>
            <Link
              href={"/contact-us"}
              scroll={false}
              className="navLink"
            >
               <p className="relative inline-block ">
                <span className="absolute   -left-[8px] -top-4 lg:left-[2px]  scale-[1.05] lg:scale-[1.2]  ">
                {router.pathname == "/contact-us" ? <TextMark/> : <NavTextMark />}
                </span>
                Contact Us
              </p>
              
            </Link>
          </div>
          <div className="md:flex gap-1 md:gap-6 items-center hidden">
            {/* <Link href={""} className="text-lg lg:text-xl">
            Login
          </Link> */}
            <Link href={"/#pricing"} scroll={false}>
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
                  ? "rotate-45 delay-[200ms] ease-in-out duration-300"
                  : ""
              }`}
            >
              <span
                className={`w-[17px] h-[2px] bg-primary-brown duration-200 ease-in-out block ${
                  isNavOpen ? "delay-100 translate-y-[6px]" : ""
                }`}
              ></span>
              <span
                className={` h-[2px] bg-primary-brown duration-200 ease-in-out my-1 block origin-center ${
                  isNavOpen ? "w-[0px]" : "w-[17px]"
                }`}
              ></span>
              <span
                className={`w-[17px] h-[2px] bg-primary-brown duration-200 ease-in-out  block ${
                  isNavOpen ? " delay-100  -translate-y-[6px] rotate-90" : ""
                }`}
              ></span>
            </div>
          </div>
        </div>
      </BoxTheme>
      <div className="overflow-hidden">
        <ResponsiveNavbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </div>
    </div>
  );
};

export default NavbarComponent;
