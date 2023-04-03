import Head from "next/head";
import HomeBannerSection from "@/components/landing-page/home-banner-section/home-banner-section";
import PricingSection from "@/components/landing-page/pricing-section/pricing-section";
import TalentSection from "@/components/landing-page/talents-section/talents-section";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import ScrollIcon from "@/assets/icons/landing-page/scroll_icon";
import PromiseSection from "@/components/landing-page/promises-section/promises-section";
import NavbarComponent from "@/common/landing-page/navbar/navbar-component";
import Image from "next/image";
import { useRef } from "react";
import CarouselSection1 from "@/components/landing-page/carousel-section/carousel-section1";
import CarouselSection2 from "@/components/landing-page/carousel-section/carousel-section2";
import CarouselSection3 from "@/components/landing-page/carousel-section/carousel-section3";
import Footer from "@/common/landing-page/footer/footer.jsx";
import PromiseSectionComponent from "@/components/landing-page/promises-section/promise-section-component";

export default function Home() {
  let ref = useRef(null);
  let talentSection =useRef(null);
  let homeBanner =useRef(null);
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
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest)
    if(latest > 3162 && latest <4000){
      // window.scrollTo({top:4000,behavior:"smooth"})
    console.log("hell")

    }
  })
  let { scrollYProgress:talentSectionScrollYProgress } = useScroll({
    target: talentSection,
    offset: ["start end", "end end"],

  });
  let { scrollYProgress:homeBannerScrollYProgress } = useScroll({
    target: homeBanner,
    offset: ["start end", "end end"],

  });
  const t1 = useTransform(talentSectionScrollYProgress, (pos) => {
    console.log("🚀 ~ file: index2.js:25 ~ Home ~ pos1:", pos);
    if (pos < 0.2) {
      return "4000";
    } 
  });
  console.log("🚀 ~ file: index.js:50 ~ t1 ~ t1:", t1)
  return (
    <>
      <Head>
        <title>
          Hire Top 5% of Indian Remote Talent | India’s leading Contract-to-Hire
          portal
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="title"
          content="Hire Top 5% of Indian Remote Talent | India’s leading Contract-to-Hire portal"
        />
        <meta
          name="description"
          content="Hire Top 5% of Indian Remote Talent | India’s leading Contract-to-Hire portal"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hyring.com/" />
        <meta
          property="og:title"
          content="Hire Top 5% of Indian Remote Talent | India’s leading Contract-to-Hire portal"
        />
        <meta
          property="og:description"
          content="Hire Top 5% of Indian Remote Talent | India’s leading Contract-to-Hire portal"
        />
        <meta
          property="og:image"
          content="https://hyring.com/wp-content/uploads/2022/01/about-us-home.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hyring.com/" />
        <meta
          property="twitter:title"
          content="Hire Top 5% of Indian Remote Talent | India’s leading Contract-to-Hire portal"
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
            ref={homeBanner}
          >
            <HomeBannerSection />
          </div>
            
            <motion.div>
            <PromiseSectionComponent />
            </motion.div>
            
          <motion.div
          // style={{position:t1}}
          className="relative"
          ref={talentSection}
          >
            <TalentSection />
          </motion.div>
          <div className="relative min-h-[90vh]">
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
          <PricingSection />
          <Footer />
      </div>
    </>
  );
}
