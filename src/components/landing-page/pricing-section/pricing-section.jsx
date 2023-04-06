import EmployerPriceSvg from "@/assets/icons/landing-page/emploer-pice-svg";
import JobPriceSvg from "@/assets/icons/landing-page/job-price-svg";
import PricingSectionCard from "@/element/landing-page/pricing-section/pricing-section-card";
import React from "react";
import CustomizedAccordions from "./acordian";
import PricingAccordian from "./pricing-section-accordian-wrapper";

export default function PricingSection() {
  return (
    <div className="mt-5 lg:mt-20 mx-auto flex w-[85vw] xl:w-[80vw] 2xl:w-[75vw] flex-col items-center  max-w-[1800px]  my-0" id="pricing" >
      <div className="text-center my-5 md:my-10 w-full text-3xl md:text-4xl lg:text-[58px]  font-primaryBold pb-3">Pricing</div>

      <div className="flex gap-5 flex-col w-full  md:flex-row">
        <div className="flex gap-7 md:gap-3 basis-1/4 items-center flex-col xs:justify-around md:justify-between xs:flex-row md:flex-col">
          <PricingSectionCard
            title={"Job Seekers"}
            svg={<JobPriceSvg />}
            price={0}
            subText={<div className="invisible text-base font-normal pt-3 md:hidden">  text dummy text</div>}
            starColor={"custom-yellow"}
            boxColor={"custom-blue"}
          />
          <PricingSectionCard
            title={"Employers"}
            svg={<EmployerPriceSvg />}
            price={750}
            subText={"per candidate/month"}
            starColor={"custom-green"}
            boxColor={"custom-yellow"}
          />
        </div>
        <div className="basis-3/4 " >
            <PricingAccordian/>
        </div>
      </div>
    </div>
  );
}
