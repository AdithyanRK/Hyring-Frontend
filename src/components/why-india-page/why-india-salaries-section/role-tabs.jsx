import BoxTheme from "@/element/landing-page/box-theme/box-theme";
import React from "react";

export default function RolesTab({ activeRole, setActiveRole, Roles }) {
console.log("🚀 ~ file: role-tabs.jsx:5 ~ RolesTab ~ activeRole:", activeRole)

  return (
    <BoxTheme
      top={"7px"}
      left={"5px"}
      className={` h-full w-full   `}
      boxStyle={`w-full h-full !justify-start !items-start  border-2 bg-white rounded-[14px] border-primary-brown    `}
      bgBoxStyle={`w-full rounded-[14px] h-full  bg-primary-brown   `}
    >
      <div className=" p-4 md:px-8 md:py-16">
        <h2 className="text-2xl md:text-[28px] font-primaryBold mb-3 md:mb-7">Role</h2>

        <div className="flex flex-wrap gap-[13px]">
          {Roles.map((data, i) => (
            <div
              className={`border bg-[#ECECEC] cursor-pointer hover:bg-[#FFD7A6] ${activeRole == i ? "border-[#FFB65E] bg-[#FFD7A6] " : " "}
               hover:border-[#FFB65E] border-[#D8D8D8] h-9 md:h-10 rounded-md font-primary 
               text-sm md:text-lg px-2 md:px-[14px] flex justify-center items-center`}
               onClick={()=>setActiveRole(i)}
            >
              {data.title}
            </div>
          ))}
        </div>
      </div>
    </BoxTheme>
  );
}
