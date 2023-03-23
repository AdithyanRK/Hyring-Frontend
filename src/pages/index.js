import Head from "next/head";
import HomeBannerSection from "@/components/landing-page/home-banner-section/home-banner-section";
import PricingSection from "@/components/landing-page/pricing-section/pricing-section";
import TalentSection from "@/components/landing-page/talents-section/talents-section";
import { useScroll, useTransform, motion } from "framer-motion";
import ScrollIcon from "@/assets/icons/landing-page/scroll_icon";
import PromiseSection from "@/components/landing-page/promises-section/promises-section";
import NavbarComponent from "@/common/landing-page/navbar/navbar-component";
import Image from "next/image";
import { useRef } from "react";
import CarouselSection3 from "@/components/landing-page/carousel-section/carousel-section3";
import CarouselSection2 from "@/components/landing-page/carousel-section/carousel-section2";
import CarouselSection1 from "@/components/landing-page/carousel-section/carousel-section1";
import dynamic from "next/dynamic.js";

const FooterComponent = dynamic(() =>
  import("../common/landing-page/footer/footer.jsx")
);


export default function Home() {
  let ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 6700], [0, 154]);
  const rotate = useTransform(scrollY, [0, 6700], [-1080, 0]);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  let yAxis = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  let scale = useTransform(scrollYProgress, [0, 1], ["99.9%", "100%"]);
  let opacity = useTransform(scrollYProgress, [0.98, 1], [1, 0.98]);

  return (
    <>
      <Head>
        <title>TIRED OF HR CONSULTANTS ?</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="title" content="TIRED OF HR CONSULTANTS?" />
        <meta name="description" content="" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hyring.com/" />
        <meta property="og:title" content="TIRED OF HR CONSULTANTS?" />
        <meta property="og:description" content="" />
        <meta
          property="og:image"
          content="https://hyring.com/wp-content/uploads/2022/01/about-us-home.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hyring.com/" />
        <meta property="twitter:title" content="TIRED OF HR CONSULTANTS?" />
        <meta property="twitter:description" content="" />
        <meta
          property="twitter:image"
          content="https://hyring.com/wp-content/uploads/2022/01/about-us-home.png"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative text-primary-brown" ref={ref}>
        <div className="invisible lg:visible fixed right-2 top-[50%] scale-[0.6] sm:scale-[0.7] md:scale-[0.8] lg:scale-[1] translate-x-1 md:translate-x-0 -translate-y-1/2 bg-[#FFF7EF] h-44 w-7 rounded-xl border-primary-brown border z-30">
          <motion.div
            className="flex justify-center"
            style={{
              rotate,
              y,
              transition: "transform 0.1s ease-out",
            }}
          >
            <ScrollIcon />
          </motion.div>
        </div>
        <motion.div style={{ yAxis, scale, opacity }} className="relative">
          <Image
            src="/Rectangle.svg"
            fill
            style={{ objectFit: "cover", zIndex: -10 }}
            alt="Background-Image"
            quality={100}
            priority
          />
          <NavbarComponent />

          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="linear"
          >
            <HomeBannerSection />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="linear"
          >
            <PromiseSection />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="linear"
          >
            <TalentSection />
          </div>
          <div>
            <div className="sticky top-0 ">
              <CarouselSection1 />
            </div>
            <div className="sticky top-4 px-2">
              <CarouselSection2 />
            </div>
            <div className="sticky top-8 px-4">
              <CarouselSection3 />
            </div>
          </div>
          <PricingSection />
          <FooterComponent />
        </motion.div>
      </div>
    </>
  );
}
