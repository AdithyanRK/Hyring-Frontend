import React, { useState } from "react";
import GreryStar from "@/assets/icons/landing-page/grey-star";
import MobileLogo from "@/assets/icons/landing-page/mobile-hyring.logo";
const WhyHyringComponentMobile = () => {
  const traditional = [
    { text: "Contractors" },
    { text: "Concealed salary and commission information" },
    { text: "80% to 150% of fees per candidate per month" },
    { text: " Compensation on an hourly basis" },
    { text: "Involvement in multiple clients and projects" },
    {
      text: "Utilization of third-party applications",
    },
    { text: "Payroll partners" },
    { text: "Remote and on-site work" },
    { text: "Limited or no health insurance coverage" },
    { text: "Basic or personal laptop provision" },
    { text: " 60-day delayed payment" },
    { text: "Recognised as contractor in LinkedIn" },
  ];

  const Hyring = [
    { text: "Employees" },
    { text: "Transparent salary information for both parties" },
    { text: "Flat fixed commissions ranging from 20% to 40%" },
    { text: "Monthly compensation" },
    { text: "Engagement with a single client only" },
    { text: "Sophisticated mobile and web app" },
    {
      text: "Comprehensive employee, payroll, benefits, and security partnership",
    },
    { text: "Fully remote" },
    {
      text: "Health insurance for employees, spouses, children, and parents",
    },
    { text: "High-config Apple or equivalent Windows laptop" },
    { text: "Prepaid model for companies" },
    { text: "Recognised as employee of the contracted company in LinkedIn" },
  ];

  return (
    <>
      <div className="flex flex-wrap flex-col mx-5">
        <div className="bg-[#FAFAFA] rounded-xl p-4 mb-4">
          <div className="flex flex-row ">
            <h1 className="text-[20px] text-primary-brown font-bold font-primaryBold pb-4">
              Traditional C2H approach 😐
            </h1>
          </div>
          {traditional.map((each) => (
            <div className="flex flex-row items-center py-2 px-2 text-start">
              <div className="scale-[0.6]">
                <GreryStar />
              </div>
              <p className="text-[#727272] text-[15px] font-primary pl-4 text-start">
                {each.text}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-primary-brown rounded-xl p-4">
          <div className="flex flex-row pb-4 items-center gap-4">
            <MobileLogo />
            <h1 className="text-[20px] text-[#FAFAFA] font-bold font-primaryBold">
              Hyring Approach 😎
            </h1>
          </div>
          {Hyring.map((each) => (
            <div className="flex flex-row items-center py-2 px-2 text-start">
              <div className="scale-[0.6]">
                <GreryStar />
              </div>
              <p className=" text-[#FAFAFA] text-[15px] font-primary pl-4 text-start">
                {each.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhyHyringComponentMobile;
