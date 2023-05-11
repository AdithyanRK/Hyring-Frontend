import BoxTheme from "@/element/landing-page/box-theme/box-theme";
import AccordianListWhyIndia from "@/element/why-india-page/acoordian-section-why-india/accordian-list";
import React from "react";

export default function NotesSalraies() {
  return (
    <div className="w-full ">
      <BoxTheme
        top={"7px"}
        left={"5px"}
        className={` h-fit w-full   `}
        boxStyle={`w-full h-fit !justify-start !items-start  border-2 bg-white rounded-[14px] border-primary-brown    `}
        bgBoxStyle={`w-full  rounded-[14px] h-full  bg-primary-brown   `}
      >
        <div className="px-4 lg:px-0  ">
          <div className="flex flex-col md:flex-row  items-center ">
            <div className="flex w-full md:w-fit   p-2  md:px-5 lg:px-10">
              <BoxTheme
                top={"2px"}
                left={"2px"}
                className={` h-fit w-fit   `}
                boxStyle={`w-[48px] h-[48px]   border-2 bg-custom-blue rounded-full border-primary-brown    `}
                bgBoxStyle={`w-[48px]  rounded-full h-[48px]  bg-primary-brown   `}
              >
                <svg
                  width="10"
                  height="24"
                  viewBox="0 0 14 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.518232 29.3973V26.5728H2.08508C3.04717 26.5728 3.68628 26.4216 4.0024 26.1193C4.33226 25.8169 4.49719 25.1228 4.49719 24.037V14.8215C4.49719 13.7357 4.33226 13.0485 4.0024 12.7599C3.68628 12.4575 3.04717 12.3063 2.08508 12.3063H0.518232V9.46123H9.65128V24.037C9.65128 25.1091 9.80934 25.8031 10.1255 26.1193C10.4553 26.4216 11.1082 26.5728 12.084 26.5728H13.3622V29.3973H0.518232ZM3.56945 3.85358C3.56945 2.97395 3.86496 2.23176 4.45596 1.62701C5.06071 1.02227 5.80289 0.719893 6.68253 0.719893C7.5759 0.719893 8.32496 1.02227 8.92971 1.62701C9.5482 2.23176 9.85745 2.97395 9.85745 3.85358C9.85745 4.73321 9.5482 5.48227 8.92971 6.10077C8.32496 6.71926 7.5759 7.0285 6.68253 7.0285C5.81664 7.0285 5.08132 6.71926 4.47657 6.10077C3.87183 5.48227 3.56945 4.73321 3.56945 3.85358Z"
                    fill="#462B34"
                  />
                </svg>
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
