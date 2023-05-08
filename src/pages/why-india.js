import Head from "next/head";
import NavbarComponent from "@/common/landing-page/navbar/navbar-component";
import Image from "next/image";
import WhyIndiaHeroSection from "@/components/why-india-page/why-india-hero-section";
import WhyIndiaAccordianSection from "@/components/why-india-page/why-india-accordian-section/why-india-accordian-section";
import WhyIndiaHubsSection from "@/components/why-india-page/why-india-hubs-section";
import WhyIndiaSkillsSection from "@/components/why-india-page/why-india-skills-section";
import PricingSection from "@/components/landing-page/pricing-section/pricing-section";
import Footer from "@/common/landing-page/footer/footer";
import WhyIndiaSalariesSection from "@/components/why-india-page/why-india-salaries-section/why-india-salaries-main-section";

export default function Index() {
  return (
    <>
      <Head>
        <title>Why India | India’s leading Contract-to-hire portal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="title"
          content="Why India | India’s leading Contract-to-hire portal"
        />
        <meta
          name="description"
          content="Why India | India’s leading Contract-to-hire portal"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hyring.com/" />
        <meta
          property="og:title"
          content="Why India | India’s leading Contract-to-hire portal"
        />
        <meta
          property="og:description"
          content="Why India | India’s leading Contract-to-hire portal"
        />
        <meta
          property="og:image"
          content="https://hyring.com/wp-content/uploads/2022/01/about-us-home.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hyring.com/" />
        <meta
          property="twitter:title"
          content="Why India | India’s leading Contract-to-hire portal"
        />
        <meta property="twitter:description" content="" />
        <meta
          property="twitter:image"
          content="https://hyring.com/wp-content/uploads/2022/01/about-us-home.png"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative text-primary-brown ">
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
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <WhyIndiaHeroSection />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <WhyIndiaAccordianSection />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <WhyIndiaHubsSection />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <WhyIndiaSkillsSection />
        </div>
        {/* <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <PricingSection/>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <WhyIndiaSalariesSection/>
        </div> */}
        <div className="overflow-hidden">
          <Footer />
        </div>
      </div>
    </>
  );
}
