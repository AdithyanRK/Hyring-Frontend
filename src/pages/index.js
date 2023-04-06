import Head from "next/head";
import HomeBannerSection from "@/components/landing-page/home-banner-section/home-banner-section";
import PricingSection from "@/components/landing-page/pricing-section/pricing-section";
import TalentSection from "@/components/landing-page/talents-section/talents-section";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import ScrollIcon from "@/assets/icons/landing-page/scroll_icon";
import PromiseSection from "@/components/landing-page/promises-section/promises-section";
import NavbarComponent from "@/common/landing-page/navbar/navbar-component";
import Image from "next/image";
import { useEffect, useRef } from "react";
import CarouselSection1 from "@/components/landing-page/carousel-section/carousel-section1";
import CarouselSection2 from "@/components/landing-page/carousel-section/carousel-section2";
import CarouselSection3 from "@/components/landing-page/carousel-section/carousel-section3";
import Footer from "@/common/landing-page/footer/footer.jsx";
import NewPromiseSection from "@/components/new-promise-section/new-promise-section.card";
import HeartRed from "@/assets/icons/landing-page/heart-red";
import HeartBrown from "@/assets/icons/landing-page/heart-brown";
import NewPromiseMobileSection from "@/components/new-promise-section/new-promise-mobile-section.card";

export default function Home() {
  let ref = useRef(null);

  const { scrollY } = useScroll();

  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [5, 160]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-1080, 0]);

  let yAxis = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  let scale = useTransform(scrollYProgress, [0, 1], ["99.9%", "100%"]);
  let opacity = useTransform(scrollYProgress, [0.98, 1], [1, 0.98]);

  return (
    <>
      <Head>
        <title>
          Hire Top 5% of Indian Remote Talent | India's leading Contract-to-Hire
          portal
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="title"
          content="Hire Top 5% of Indian Remote Talent | India's leading Contract-to-Hire portal"
        />
        <meta
          name="description"
          content="Hire Top 5% of Indian Remote Talent | India's leading Contract-to-Hire portal"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hyring.com/" />
        <meta
          property="og:title"
          content="Hire Top 5% of Indian Remote Talent | India's leading Contract-to-Hire portal"
        />
        <meta
          property="og:description"
          content="Hire Top 5% of Indian Remote Talent | India's leading Contract-to-Hire portal"
        />
        <meta
          property="og:image"
          content="https://hyring.com/wp-content/uploads/2022/01/about-us-home.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hyring.com/" />
        <meta
          property="twitter:title"
          content="Hire Top 5% of Indian Remote Talent | India's leading Contract-to-Hire portal"
        />
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
          className="overflow-hidden"
        >
          <HomeBannerSection />
        </div>
        <div className="flex flex-col gap-16 md:mb-20  justify-center w-full">
          <div className="flex justify-center items-center">
            <div className="flex items-center  font-primaryBold text-primary-brown text-3xl md:text-5xl">
              Our Promises
            </div>
            <div className="relative top-0.5 md:top-2 scale-[0.5] md:scale-100">
              <HeartRed className="z-1" />
              <HeartBrown className="absolute left-1 top-[3px] -z-1" />
            </div>
          </div>
          <div className="hidden md:block">
              <NewPromiseSection />
          </div>
          <div className="block md:hidden mb-32 md:mb-0">
            <NewPromiseMobileSection />
          </div>
        </div>
        <motion.div className="relative overflow-hidden">
          <TalentSection />
        </motion.div>
        <div className="relative min-h-[90vh] mt-20 max-w-[1800px] mx-auto my-0">
          <div className="sticky  top-0 h-full">
            <CarouselSection1 />
          </div>
          <div className="sticky top-8 h-full">
            <CarouselSection2 />
          </div>
          <div className="sticky top-16 z-20 h-full">
            <CarouselSection3 />
          </div>
          <div className="sticky top-2 h-[20vh]"></div>
        </div>
        <div className="overflow-hidden">
          <PricingSection />
        </div>
        <div className="overflow-hidden">
          <Footer />
        </div>
      </div>
    </>
  );
}
