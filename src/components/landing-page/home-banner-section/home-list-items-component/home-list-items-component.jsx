import HeroList from "@/element/landing-page/home-banner-section/home-banner-section-list";
import React from "react";

export default function HomeListComponent({className}) {
  return (
   <div className={`${className}`}>
     <div className={`xs:flex gap-10 items-center `}>
      <div>
        <HeroList>AI powered Hyring app</HeroList>
        <HeroList>Top 5% vetted candidates</HeroList>
        <HeroList>Robust Payroll</HeroList>
      </div>
      <div>
        <HeroList>Transparent salary info - No Hanky-Panky</HeroList>
        <HeroList>Cool Indian office space</HeroList>
        <HeroList>Indian Taxation & Compliances</HeroList>
      </div>
    </div>
   </div>
  );
}
