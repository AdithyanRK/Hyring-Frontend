import HeartBrown from "@/assets/icons/landing-page/heart-brown";
import HeartRed from "@/assets/icons/landing-page/heart-red";
import Star1 from "@/assets/icons/landing-page/star1";
import Star2 from "@/assets/icons/landing-page/star2";
import NavbarComponent from "@/common/landing-page/navbar/navbar-component";
import HomeBannerSection from "@/components/landing-page/home-banner-section/home-banner-section";
import TalentSection from "@/components/landing-page/talents-section/talents-section";
import PromiseNumber from "@/element/landing-page/promise-section/promise-number";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useMemo, useRef, useState } from "react";
import Parallax from "./index3";
import PromiseSectionComponent from "@/components/landing-page/promises-section/promise-section-component";

export default function Home() {
  const promise = useRef(null);
  
  //      const {scrollYProgress} =useScroll({
  //         target: promise,
  //         offset: ["start end", "end end"],
  // })
  const { scrollYProgress } = useScroll({
    target: promise,
    offset: ["start end", "end end"],
  });
  // const opacity =useTransform(scrollYProgress,[0,1],[0,1])
  const position = useTransform(scrollYProgress, (pos) => {
    console.log("🚀 ~ file: index2.js:25 ~ Home ~ pos:", pos);
    if (pos < 0.25) {
      return "absolute";
    } else if (pos > 0.25 && pos < 1) {
      return "fixed";
    } else {
      return "absolute";
    }
  });
  const top = useTransform(scrollYProgress, (pos) => {
    // console.log("🚀 ~ file: index2.js:25 ~ Home ~ pos:", pos)
    if (pos < 0.25) {
      return "0";
    } else if (pos > 0.25 && pos < 1) {
      return "0";
    } else {
      return "300vh";
    }
  });
  const rt = useTransform(scrollYProgress, [0.25, 0.4], [0, -120]);
  const rt1 = useTransform(scrollYProgress, [0.35, 0.65], [145, -120]);
  const rt2 = useTransform(scrollYProgress, [0.6, 0.9], [145, -120]);
  const rt3 = useTransform(scrollYProgress, [0.84, 1], [145, 0]);
  const rt4 = useTransform(
    scrollYProgress,
    [0.25, 0.4, 0.65, 0.9, 1],
    [0, -180, -240, -300, -360]
  );
  

  return (
    <div className="text-primary-brown">
      <NavbarComponent />
      <HomeBannerSection/>

      <PromiseSectionComponent/>
      
      <motion.div>
        <TalentSection />
      </motion.div>
    </div>
  );
}
