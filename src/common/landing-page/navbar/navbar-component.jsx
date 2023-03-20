


import Logo from "@/assets/icons/landing-page/logo";
import BoxTheme from "@/element/landing-page/box-theme/box-theme";
import SignUpButton from "@/element/landing-page/button/sign-up-button";
import Link from "next/link";
import React from "react";

const NavbarComponent = ({className}) => {
  return (
    <BoxTheme
    className={`${className} h-[102px] w-fit mt-[14px] mx-auto mb-3 md:mb-20`}
 
  boxStyle={
    `w-[95vw] h-[63px] md:h-[93px] border-2 bg-custom-bg rounded-[10px] border-primary-brown`
  }
  bgBoxStyle={
    "w-full h-[63px] md:h-[93px] rounded-[10px] bg-primary-brown top-[5px] left-[6px]  md:top-[9px] md:left-[10px]"
  }
>
  <div className="flex justify-between md:px-10 items-center w-full text-xl font-medium   ">
    <div className="scale-[0.6] xl:scale-[1]" >
      <Logo />
    </div>
    <div className="md:flex gap-10 items-center hidden">
      <Link href={"#whyIndia"} scroll={false} >Why India</Link>
      <Link href={""}>Pricing</Link>
      <Link href={"/contact-us"}>Contact Us</Link>
    </div>
    <div className="flex gap-1 md:gap-6 items-center">
    <Link href={""} className="text-base md:text-xl">Login</Link>
    <Link href={""} className="scale-[0.6] md:scale-[1]"><SignUpButton /></Link>

    </div>
  </div>
</BoxTheme> 
  );
};

export default NavbarComponent;
