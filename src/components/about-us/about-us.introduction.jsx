import IntroductionStarGreenIcon from "@/assets/icons/landing-page/IntroductionStarGreenIcon";
import PersonVerified1 from "@/assets/icons/landing-page/PersonVerified1";
import PersonVerified2 from "@/assets/icons/landing-page/PersonVerified2";
import PersonVerified3 from "@/assets/icons/landing-page/PersonVerified3";
import IntroductionStarYellowIcon from "@/assets/icons/landing-page/StarYellowIntroduction";
import DottedLine from "@/assets/icons/landing-page/dottedLine";
import HyringLogoCircle from "@/assets/icons/landing-page/hyringLogoCircle";
import TextMark3 from "@/assets/icons/landing-page/text-mark3";
import WorkplaceCircleIcon from "@/assets/icons/landing-page/workplaceCircle";
import WorkplaceCircleIcon2 from "@/assets/icons/landing-page/workplaceCircle2";
import WorkplaceCircleIcon3 from "@/assets/icons/landing-page/workplaceCircle3";
import React from "react";
import { motion } from "framer-motion";
const AboutUsIntroductionComponent = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center gap-6 ">
        <div className="font-primaryBold text-[40px] lg:text-[58px] mt-5  lg:mt-[40px] text-center  ">
          Introducing
          <p className="relative inline-block mx-2 lg:mx-3">
            <span className="absolute -left-[25px] -top-2 lg:-left-1 lg:-top-1 scale-[0.8] lg:scale-[1]  ">
              <TextMark3 />
            </span>
            Hyring
          </p>
        </div>
        <p className="font-primaryLight text-[18px] font-semibold lg:font-normal lg:text-[28px] w-[95vw] md:w-3/5 text-center">
          Hyring is revolutionizing the IT staff augmentation industry by
          harnessing the power of AI to connect the Top 5% of Indian talent with
          world-class companies around the globe.
        </p>
        <p className="font-primaryLight text-[18px] font-semibold  lg:font-normal lg:text-[28px] w-[95vw] md:w-3/5 text-center ">
          Born amid the pandemic, Hyring’s journey began when the demand for IT
          resources surged exponentially. Leveraging a decade of staff
          augmentation experience from Domaincer, our IT firm, we were able to
          swiftly match hundreds of skilled developers with rapidly growing
          companies and innovative startups within just one year.
        </p>
      </div>
      <div className="flex justify-between  my-10 lg:my-28 ">
        <div className="relative">
          <div className="absolute -top-32 -right-40 hidden lg:flex">
            <PersonVerified3 />
          </div>
          <div className="absolute w-14 h-14 -top-8 hidden lg:flex">
            <PersonVerified2 width="90%" />
          </div>
        </div>
        <div className="flex scale-[0.9] lg:basis-10/12  items-center justify-center  ">
          {/* <div className="border-dashed border-2 border-primary-brown w-full gap-6"></div> */}
          <div>
            <PersonVerified1 />
          </div>
          <motion.div
            style={{ x: "100%" }}
            animate={{ x: "0" }}
            transition={{ duration: 3 }}
            className="w-full -z-10"
          >
            <DottedLine height={2} width="100%" />
          </motion.div>
          <div className="relative">
            <div className="absolute   -right-4 -top-3">
              <IntroductionStarGreenIcon className={` animate-scaleOut`} />
            </div>
            <div className="">
              <HyringLogoCircle />
            </div>
            <div className="absolute -left-6 -bottom-[10px]  ">
              <IntroductionStarYellowIcon className={` animate-scaleIn`} />
            </div>
          </div>
          <motion.div
            style={{ x: "-100%" }}
            animate={{ x: "0" }}
            transition={{ duration: 3 }}
            className="w-full -z-10"
          >
            <DottedLine height={2} width="100%" />
          </motion.div>
          <div>
            <WorkplaceCircleIcon />
          </div>
        </div>
        <div className="relative self-end">
          <div className="absolute -top-36 right-10 hidden lg:flex ">
            <WorkplaceCircleIcon3 />
          </div>
          <div className=" hidden lg:flex">
            <WorkplaceCircleIcon2 width="90%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsIntroductionComponent;
