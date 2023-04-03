import HeartBrown from "@/assets/icons/landing-page/heart-brown";
import HeartRed from "@/assets/icons/landing-page/heart-red";
import Star1 from "@/assets/icons/landing-page/star1";
import Star2 from "@/assets/icons/landing-page/star2";
import NavbarComponent from "@/common/landing-page/navbar/navbar-component";
import HomeBannerSection from "@/components/landing-page/home-banner-section/home-banner-section";
import TalentSection from "@/components/landing-page/talents-section/talents-section";
import PromiseCardElement from "@/element/landing-page/promise-section/promise-card-element";
import PromiseNumberBox from "@/element/landing-page/promise-section/promise-number-box-element";
import { useScroll, useTransform, motion } from "framer-motion";
import React from "react";
import { useRef } from "react";
import PersonGroup from "@/assets/icons/landing-page/person-group";
import PromiseClock from "@/assets/icons/landing-page/promise-clock";
import PromiseBulb from "@/assets/icons/landing-page/promise-bulb";
import PromiseMoney from "@/assets/icons/landing-page/promise-money";
export default function Index() {
  const promise = useRef(null);

  const { scrollYProgress } = useScroll({
    target: promise,
    offset: ["start end", "end end"],
  });

  const t1 = useTransform(scrollYProgress, (pos) => {
    console.log("🚀 ~ file: index2.js:25 ~ Home ~ pos:", pos);
    if (pos < 0.4) {
      return "0";
    } else if (pos > 0.4) {
      return "-100vh";
    }
  });
  const t2 = useTransform(scrollYProgress, (pos) => {
    if (pos > 0.4 && pos < 0.6) {
      return "0";
    } else if (pos > 0.6) {
      return "-100vh";
    } else {
      return "100vh";
    }
  });

  const t3 = useTransform(scrollYProgress, (pos) => {
    if (pos > 0.6 && pos < 0.8) {
      return "0";
    } else if (pos > 0.8) {
      return "-100vh";
    } else {
      return "100vh";
    }
  });
  const t4 = useTransform(scrollYProgress, (pos) => {
    if (pos > 0.8 && pos < 1) {
      return "0";
    } else if (pos > 0.4 && pos < 0.9) {
      return "100vh";
    } else {
      return "300vh";
    }
  });
  const duration = useTransform(scrollYProgress, (pos) => {
    if (pos < 0.95) {
      return "700ms";
    } else {
      return "0ms";
    }
  });
  const position = useTransform(scrollYProgress, (pos) => {
    if (pos < 0.25 && pos > 0) {
      return "absolute";
    } else if (pos > 0.25 && pos < 1) {
      return "fixed";
    } else {
      return "absolute";
    }
  });
  const top = useTransform(scrollYProgress, (pos) => {
    if (pos < 0.25) {
      return "0";
    } else if (pos > 0.25 && pos < 1) {
      return "0";
    } else {
      return "300vh";
    }
  });
  const rt = useTransform(scrollYProgress, (pos) => {
    if (pos < 0.4) {
      return "0deg";
    } else if (pos > 0.4) {
      return "-120deg";
    }
  });
  const rt1 = useTransform(scrollYProgress, (pos) => {
    if (pos > 0.4 && pos < 0.6) {
      return "0deg";
    } else if (pos > 0.6) {
      return "-120deg";
    } else {
      return "145deg";
    }
  });
  const rt2 = useTransform(scrollYProgress, (pos) => {
    if (pos > 0.6 && pos < 0.8) {
      return "0deg";
    } else if (pos > 0.8) {
      return "-120deg";
    } else {
      return "145deg";
    }
  });
  const rt3 = useTransform(scrollYProgress, (pos) => {
    if (pos > 0.8) {
      return "0deg";
    } else {
      return "145deg";
    }
  });
  const rt4 = useTransform(
    scrollYProgress,
    [0.25, 0.4, 0.65, 0.9, 1],
    [0, -180, -240, -300, -360]
  );
  const mt = useTransform(scrollYProgress, (pos) => {
    if (pos > 1) {
      return "-100vh";
    } else {
      return "0";
    }
  });

  return (
    <div className="text-primary-brown">
      <NavbarComponent />
      <HomeBannerSection />

      <motion.div
        className="w-full h-[400vh]  relative overflow-hidden duration-700"
        ref={promise}
      >
        <motion.div
          style={{ position, top }}
          className="flex-1 absolute hidden md:-left-72 lg:flex z-4"
        >
          <div className="w-[700px] h-[700px]  border-[20px] border-primary-brown rounded-full -z-1 absolute left-5 top-0"></div>
          <div className="w-[700px] h-[700px] border-[1px] border-primary-brown rounded-full bg-[#FDFDFD] shrink-0 flex justify-center items-center relative">
            <motion.div
              style={{ rotate: rt4 }}
              className={`w-[600px] h-[600px] border-r-[1px] border-b-[1px] border-t-[0px] border-l-[0px] border-primary-brown rounded-full  bg-[#FDFDFD] `}
            ></motion.div>
            <motion.div
              style={{ rotate: rt4 }}
              className={`w-[500px] h-[500px] border-l-[1px] border-b-[1px] border-t-[0px] border-r-[0px] border-primary-brown rounded-full  bg-[#FDFDFD] absolute`}
            ></motion.div>
            <Star1
              className={`absolute top-[30%] right-[65px] scale-[0.45] animate-scaleIn`}
            />
            <Star2
              className={`absolute z-[30] top-7  fill-custom-red animate-scaleOut`}
            />
            <Star2
              className={`absolute z-[30] bottom-32 right-24 fill-custom-blue animate-scaleOut`}
            />
            <div className="w-[400px] h-[400px] border-l-[70px]  border-primary-brown rounded-full promise_bg_image absolute"></div>
            <div className="w-[400px] h-[400px] border-2  border-primary-brown rounded-full absolute"></div>

            <motion.div
              style={{ rotate: rt }}
              className={`w-[600px] h-[400px] rounded-full absolute -left-3  duration-700  `}
            >
              <PromiseNumberBox id={1} />
            </motion.div>
            <motion.div
              style={{ rotate: rt1 }}
              className={`w-[600px] h-[400px] rounded-full absolute -left-3 duration-700  `}
            >
              <PromiseNumberBox id={2} />
            </motion.div>
            <motion.div
              style={{ rotate: rt2 }}
              className={`w-[600px] h-[400px] rounded-full absolute -left-3  duration-700 `}
            >
              <PromiseNumberBox id={3} />
            </motion.div>
            <motion.div
              style={{ rotate: rt3 }}
              className={`w-[600px] h-[400px] rounded-full  absolute -left-3  duration-700 `}
            >
              <PromiseNumberBox id={4} />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          style={{ position, top }}
          className={`flex justify-center items-center bg-white w-full py-16  z-2   gap-1 flex-nowrap   left-[62%] -translate-x-2/4`}
        >
          <div className=" font-primaryBold text-primary-brown text-5xl">
            Our Promises
          </div>
          <div className="relative top-2">
            <HeartRed className="z-1" />
            <HeartBrown className="absolute left-1 top-[3px] -z-1" />
          </div>
        </motion.div>
        <motion.div
          style={{ position, top: t1 }}
          className="absolute duration-700  left-0 flex justify-center items-center      h-screen w-screen"
        >
          <PromiseCardElement item ={values[0]}/>
        </motion.div>
        <motion.div
          style={{ top: t2 }}
          className="fixed duration-700  left-0 flex justify-center items-center   h-screen w-screen"
        >
            <PromiseCardElement item ={values[1]}/>
        </motion.div>
        <motion.div
          style={{ top: t3 }}
          className="fixed  duration-700 left-0 flex justify-center items-center   h-screen w-screen"
        >
            <PromiseCardElement item ={values[2]}/>
        </motion.div>
        <motion.div
          style={{ position, top: t4, transitionDuration: duration }}
          className="  left-0 flex justify-center items-center  h-screen w-screen"
        >
            <PromiseCardElement item ={values[3]}/>
        </motion.div>
      </motion.div>
      <motion.div>
        <TalentSection />
      </motion.div>
    </div>
  );
}
const values = [
  {
    id: 1,
    header: "Explore Indian Talents",
    message:
      "Lorem ipsum dolor sit am, consectetur adipiscineli nsectetur adipiscing",
    icon: <PersonGroup />,
    bgColor: "#B8C8FF",
  },
  {
    id: 2,
    header: "Fill your open positions within 15 days timeline",
    message:
      "Lorem ipsum dolor sit am, consectetur adipiscineli nsectetur adipiscing",
    icon: <PromiseClock />,
    bgColor: "#B6ECCC",
  },
  {
    id: 3,
    header: "Save upto 50% on satffing costs without talent compromise",
    // message: "Save upto 50% on satffing costs without talent compromise",
    icon: <PromiseMoney />,
    bgColor: "#FFF5B7",
  },
  {
    id: 4,
    header: "Top 5% of Indian IT Talent",
    message:
      "Lorem ipsum dolor sit am, consectetur adipiscineli nsectetur adipiscing",
    icon: <PromiseBulb />,
    bgColor: "#FDB2B2",
  },
];