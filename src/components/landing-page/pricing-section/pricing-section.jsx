import EmployerPriceSvg from "@/assets/icons/landing-page/emploer-pice-svg";
import JobPriceSvg from "@/assets/icons/landing-page/job-price-svg";
import PricingSectionCard from "@/element/landing-page/pricing-section/pricing-section-card";
import React, { useState } from "react";
import CustomizedAccordions from "./acordian";
import PricingAccordian from "./pricing-section-accordian-wrapper";

export default function PricingSection() {
  const [employerHover, setEmployerHover] = useState(false);
  const [jobSeekerHover, setJobSeekerHover] = useState(true);
  const [hoverChange, setHoverChange] = useState(true);
  return (
    <div
      className="mt-5 lg:mt-20 mx-auto flex w-[95vw] flex-col items-center  max-w-[1800px]  my-0"
      id="pricing"
    >
      <div className="text-center my-5 md:my-10 w-full text-3xl md:text-4xl lg:text-[58px]  font-primaryBold pb-3">
        Pricing
      </div>

      <div className="flex gap-5 flex-col w-full   md:flex-row">
        <div className="flex gap-7  basis-[20%] flex-col items-center xs:justify-around md:justify-around xs:flex-row md:flex-col">
          <PricingSectionCard
            title={"Job Seekers"}
            svg={<JobPriceSvg />}
            price={0}
            starColor={"custom-yellow"}
            boxColor={"custom-blue"}
            jobSeekerHover={jobSeekerHover}
            setJobSeekerHover={setJobSeekerHover}
            setEmployerHover={setEmployerHover}
            hoverChange={hoverChange}
            setHoverChange={setHoverChange}
          />
          <PricingSectionCard
            title={"Employers"}
            svg={<EmployerPriceSvg />}
            price={"20%"}
            subText={"per candidate/month"}
            starColor={"custom-green"}
            boxColor={"custom-yellow"}
            employerHover={employerHover}
            setEmployerHover={setEmployerHover}
            setJobSeekerHover={setJobSeekerHover}
            hoverChange={hoverChange}
            setHoverChange={setHoverChange}
          />
        </div>
        <div className="basis-[80%] ">
          <PricingAccordian hoverChange={hoverChange} />
        </div>
      </div>
    </div>
  );
}
