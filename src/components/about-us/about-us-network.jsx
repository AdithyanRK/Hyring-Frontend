import React from "react";
import NumberCircle from "@/assets/icons/about-us/networkNumberCircle";
import PersonCircle1 from "@/assets/icons/about-us/networkPersonCircle1";
import PersonCircle2 from "@/assets/icons/about-us/networkPersonCircle2";
import PersonCircle3 from "@/assets/icons/about-us/networkPersonCircle3";
import PersonCircle4 from "@/assets/icons/about-us/networkPersonCircle4";
import PersonCircle5 from "@/assets/icons/about-us/networkPersonCircle5";
import PersonCircle6 from "@/assets/icons/about-us/networkPersonCircle6";
import BoxTheme from "@/element/landing-page/box-theme/box-theme";

const AboutUsNetwork = () => {
  return (
    //   <div className="flex justify-center items-center min-w-[600px] w-full h-[400px] mt-20 flex-wrap flex-shrink-0 p-10">
    <div className="max-w-[1800px] mx-auto my-0">
      <BoxTheme
        top="8px"
        left="10px"
        boxStyle={
          "flex justify-center items-center min-w-[200px] border-2 border-primary-brown w-full h-full md:h-[500px] mt-20 flex-wrap px-10 py-2 bg-[#FDFDFD] rounded-[44px] w-[95vw] mx-auto gap:3 xs:gap-5 sm:gap-12 lg:gap-20 overflow-hidden"
        }
        bgBoxStyle={
          "min-w-[200px] w-[100%] h-[100%] md:h-[500px] rounded-[44px]  bg-primary-brown"
        }
      >
        <div className="relative pl-0 md:pl-8">
          <div className="network_circle_rotate ">
            <div
              className="network_circle_rotate-item scale-75"
              style={{ "--d": "0s" }}
            >
              <PersonCircle1 />
            </div>
            <div
              className="network_circle_rotate-item scale-75"
              style={{ "--d": "-2s" }}
            >
              <PersonCircle2 />
            </div>
            <div
              className="network_circle_rotate-item scale-75"
              style={{ "--d": "-4s" }}
            >
              <PersonCircle3 />
            </div>
            <div
              className="network_circle_rotate-item scale-75"
              style={{ "--d": "-6s" }}
            >
              <PersonCircle4 />
            </div>
            <div
              className="network_circle_rotate-item scale-75"
              style={{ "--d": "-8s" }}
            >
              <PersonCircle5 />
            </div>
            <div
              className="network_circle_rotate-item  scale-75"
              style={{ "--d": "-10s" }}
            >
              <PersonCircle6 />
            </div>
          </div>
          <div className="absolute left-[38%] top-[32%] network_circle_rotate-item-circle scale-75 ">
            <NumberCircle />
          </div>
        </div>
        <div className="flex-1 w-full min-w-[200px]">
          <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary-brown font-primaryMedium mb-2 md:mb-5">
            Network
          </p>
          <p className="text-md sm:text-lg md:text-xl xl:text-2xl text-primary-brown font-primary">
            Work with consolidated top 5% of talent pool of over{" "}
            <span className="font-primaryMedium">500,000 </span>
            professionals, including designers, developers, marketers, analysts,
            data scientists, testers and cybersecurity experts.
          </p>
        </div>
        {/* </div> */}
      </BoxTheme>
    </div>
  );
};

export default AboutUsNetwork;
