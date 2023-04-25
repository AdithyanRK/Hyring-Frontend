import { useDragControls, motion, useMotionValue } from "framer-motion";
import React, { useState } from "react";
import WhyHyringDragger from "../../../../src/assets/icons/landing-page/why-hyring-dragger";
import GreenStar from "../../../../src/assets/icons/landing-page/green-start";
import Logo from "@/assets/icons/landing-page/logo";
import GreryStar from "@/assets/icons/landing-page/grey-star";
import LogoWhySection from "@/assets/icons/landing-page/logo-why-section";
const WhyHyringComponent = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [hide, setHide] = useState(false);
  const mHeight = useMotionValue(730);

  const handleDrag = React.useCallback((event, info) => {
    let newHeight = mHeight.get() + info.delta.y;
    console.log(
      "🚀 ~ file: why-hyring.component.jsx:11 ~ handleDrag ~ newHeight:",
      newHeight
    );
    if (newHeight > 30 && newHeight < 730) {
      if (newHeight < 50) {
        setHide(true);
      } else {
        setHide(false);
      }
      mHeight.set(mHeight.get() + info.delta.y);
    }
  }, []);

  const traditional = [
    { text: "Contractors" },
    { text: "Concealed salary and commission information" },
    { text: "80% to 150% of fees per candidate per month" },
    { text: "Compensation on an hourly basis" },
    { text: "Involvement in multiple clients and projects" },
    {
      text: "Utilization of third-party applications",
    },
    { text: "Payroll partners" },
    { text: "Remote and on-site work" },
    { text: "Limited or no health insurance coverage" },
    { text: "Basic or personal laptop provision" },
    { text: "60-day delayed payment" },
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
      text: "No-compromise health insurance for employees, spouses, children, and parents",
    },
    { text: "High-config Apple or equivalent Windows laptop" },
    { text: "Prepaid model for companies" },
    { text: "Recognised as employee of the contracted company in LinkedIn" },
  ];

  return (
    <>
      <div className="max-w-[1400px] mx-auto my-0">
        <div className="h-[750px] relative mx-5">
          <div className="bg-primary-brown h-[93vh] md:h-[780px] flex flex-col pt-8 rounded-t-2xl rounded-b-xl  border-[1px] border-primary-brown pb-6">
            <div className="px-2 lg:px-20 lg:py-4 pt-4 lg:pt-1">
              <div className="flex flex-row ">
                <LogoWhySection />
                <h1 className="text-[18px] xxs:text-[24px] md:text-[32px] text-[#FAFAFA] font-bold font-primaryBold pl-4 pt-1 pb-1">
                  Hyring Approach 😎
                </h1>
              </div>
              {Hyring.map((each) => (
                <div className="flex flex-row items-center gap-5 pt-6">
                  <div className={`${!hide ? "animate-spin" : ""}`}>
                    <GreenStar />
                  </div>
                  <p className="text-[#FAFAFA] font-primary text-[14px] md:text-[18px]">
                    {each.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute z-1 top-0 w-full ">
            <motion.div
              dragElastic={4}
              dragMomentum={true}
              style={{
                height: mHeight,
                cursor: isDragging ? "row-resize" : "",
              }}
            >
              <div className="bg-[#FAFAFA] w-full h-[780px] xxxs:h-full flex flex-col items-start pt-2 xxxs:pt-8 md:pt-6 lg:pt-4 rounded-t-xl  border-[1px] border-primary-brown overflow-hidden">
                {!hide ? (
                  <>
                    <div className="px-2 lg:px-20 md:pt-7 md:pb-4">
                      <h1 className="text-[18px] xxs:text-[24px] md:text-[32px] text-primary-brown font-bold font-primaryBold">
                        Traditional C2H approach 😐
                      </h1>
                      {traditional.map((each) => (
                        <div className="flex flex-row items-center gap-5 pt-6 ">
                          <GreryStar />
                          <p className=" text-[#727272] text-[14px] md:text-[18px] font-primary">
                            {each.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </motion.div>
            <motion.div
              drag="y"
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              dragElastic={0}
              dragMomentum={true}
              onDrag={handleDrag}
              onDragEnd={() => {
                setIsDragging(false);
              }}
              onDragStart={() => {
                setIsDragging(true);
              }}
            >
              <div className="flex flex-row items-center w-full justify-center -mt-[48px] scale-[0.6] animate-bounce cursor-grab">
                <WhyHyringDragger />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyHyringComponent;
