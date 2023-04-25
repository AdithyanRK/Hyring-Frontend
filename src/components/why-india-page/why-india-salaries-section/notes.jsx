import BoxTheme from "@/element/landing-page/box-theme/box-theme";
import AccordianListWhyIndia from "@/element/why-india-page/acoordian-section-why-india/accordian-list";
import React from "react";

export default function NotesSalraies() {
  return (
    <div className="w-full">
      <BoxTheme
        top={"7px"}
        left={"5px"}
        className={` h-fit w-full   `}
        boxStyle={`w-full h-fit !justify-start !items-start  border-2 bg-white rounded-[14px] border-primary-brown    `}
        bgBoxStyle={`w-full  rounded-[14px] h-full  bg-primary-brown   `}
      >
        <div className="md:pl-8 md:pr-12 p-4 ">
          <div className="flex flex-col md:flex-row  items-center ">
            <div className="flex w-full md:w-fit   p-2 md:p-5">
              <BoxTheme
                top={"2px"}
                left={"2px"}
                className={` h-fit w-fit   `}
                boxStyle={`w-[68px] h-[68px]   border-2 bg-custom-blue rounded-full border-primary-brown    `}
                bgBoxStyle={`w-[68px]  rounded-full h-[68px]  bg-primary-brown   `}
              >
                <div className="text-5xl font-primary">i</div>
              </BoxTheme>
            </div>
            <div>
              <AccordianListWhyIndia>
                The above salary data is approximate data and may vary depending
                on skills demand, market conditions, company, etc.
              </AccordianListWhyIndia>
              <AccordianListWhyIndia>
                The above Hyring Fees is marked with 20% fees which may vary
                upto 40% depending on number of employees hired or if you want
                to migrate your existing Indian employees for payroll &
                benefits.
              </AccordianListWhyIndia>
            </div>
          </div>
        </div>
      </BoxTheme>
    </div>
  );
}
