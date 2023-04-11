import HeroList from "@/element/landing-page/home-banner-section/home-banner-section-list";
import React from "react";

export default function HomeListComponent({className}) {
  return (
   <div className={`${className} flex justify-center my-4 lg:max-w-[640px] xl:max-w-[710px] xl3:max-w-[860px]`}>
     <div className={`sm:grid  sm:grid-cols-2 items-start  `}>
      <div className="">
        <HeroList>AI-Powered Hyring App </HeroList>
        <HeroList>Salaries up to ₹1 Crore</HeroList>
        <HeroList>Health Insurance for the Entire Family</HeroList>
      </div>
      <div className="">
        <HeroList>Transparent Salary Info. - No Hanky-Panky</HeroList>
        <HeroList>Indian Taxation & Compliance Covered</HeroList>
        <HeroList>Cool Office Spaces Located Across India</HeroList>
      </div>
    </div>
   </div>
  );
}
