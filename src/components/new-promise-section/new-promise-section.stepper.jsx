import BoxTheme from "@/element/landing-page/box-theme/box-theme";
import * as React from "react";

const values = [
  {
    id: 1,
    header: "Explore Indian Talents",
  },
  {
    id: 2,
    header: "Fill your open positions within 15 days timeline",
  },
  {
    id: 3,
    header: "Save upto 50% on satffing costs without talent compromise",
  },
  {
    id: 4,
    header: "Top 5% of Indian IT Talent",
  },
];

export default function NewPromiseStepper({ index }) {
  return values.map((item) => {
    return (
      <div className={"max-w-[500px] flex flex-col"}>
        <div className="flex flex-row gap-5">
          <BoxTheme
            top="2px"
            left="3px"
            className={` h-[54px] w-[55px] xxxl:h-[64px] xxxl:w-[64px] font-primary`}
            boxStyle={`${
              index === 0 && item.id === 1
                ? "bg-[#B8C8FF]"
                : index === 1 && item.id === 2
                ? "bg-[#B6ECCC]"
                : index === 2 && item.id === 3
                ? "bg-[#FFF5B7]"
                : item.id === 4 && index === 3
                ? "bg-[#FDB2B2]"
                : "bg-[#FFF9F3]"
            } w-[52px] h-[52px] border   rounded-[44px] border-primary-brown 2xl:w-[64px] 2xl:h-[64px] xxxl:h-[61px] xxxl:w-[61px]`}
            bgBoxStyle={
              "w-[52px] h-[52px]  rounded-[44px]  bg-primary-brown 2xl:w-[64px] 2xl:h-[64px] xxxl:h-[61px] xxxl:w-[61px]"
            }
          >
            {item.id}
          </BoxTheme>

          <div
            className={`${
              index === 0 && item.id === 1
                ? "!font-primaryBold"
                : index === 1 && item.id === 2
                ? "!font-primaryBold"
                : index === 2 && item.id === 3
                ? "!font-primaryBold"
                : item.id === 4 && index === 3
                ? "!font-primaryBold"
                : ""
            } flex justify-center items-center font-primary text-lg`}
          >
            {item.header}
          </div>
        </div>
        {item.id != 4 && (
          <div className="ml-[32px] h-10 border-dashed border-l-2 border-black"></div>
        )}
      </div>
    );
  });
}
