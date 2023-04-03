import React from "react";
import SideBadge from "@/assets/icons/landing-page/number-badge";
const PromiseNumberBox = ({ id }) => {
  return (
    <>
        <div className="right-[20%] absolute bottom-[40%]">
          <div className="relative z-1">
            <div className="bg-primary-brown absolute left-2 top-[3px] -z-1 rounded-3xl w-[120px] h-[120px]"></div>
            <div
              className={`${
                id == 1
                  ? "bg-[#B8C8FF]"
                  : id == 2
                  ? "bg-[#B6ECCC]"
                  : id == 3
                  ? " bg-[#FFF5B7]"
                  : id == 4
                  ? "bg-[#FDB2B2]"
                  : ""
              } border-[1px] border-primary-brown rounded-3xl text-[60px] px-6 py-2 z-3 w-[120px] h-[120px] flex justify-center items-center`}
            >
              <SideBadge className="absolute -left-8 -top-6 z-2" />
              <p className="pt-5 font-primaryMedium  "> 0{id}</p>
            </div>
          </div>
      </div>
    </>
  );
};

export default PromiseNumberBox;
