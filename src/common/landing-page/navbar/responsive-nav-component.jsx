import SignUpButton from "@/element/landing-page/button/sign-up-button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function ResponsiveNavbar({ isNavOpen,setIsNavOpen }) {
    
  return (
    <div 
    
    className={`bg-custom-bg   w-[95vw] rounded-[10px] mx-auto  border-primary-brown px-6  mt-4 ${!isNavOpen ? " py-0 border-0 opacity-0" : " py-8  border-2 opacity-100"} duration-700 delay-3300  md:hidden`}>
      <div className={`${isNavOpen ? "flex flex-col gap-4 " :"hidden"} duration-700 font-primaryMedium   text-lg` } >
      <Link href={"/#whyIndia"} scroll={false} onClick={()=>{setIsNavOpen(false)}}>
        Why India
      </Link>
      <Link href={"/#pricing"} scroll={false} onClick={()=>{setIsNavOpen(false)}}>
        Pricing
      </Link>
      <Link href={"/contact-us"} scroll={false} onClick={()=>{setIsNavOpen(false)}}>
        Contact Us
      </Link>
      <Link href={""} className=" text-lg" onClick={()=>{setIsNavOpen(false)}}>
        Login
      </Link>
      <Link href={""} onClick={()=>{setIsNavOpen(false)}}>
        <SignUpButton />
      </Link>
      </div>
    </div>
  );
}
