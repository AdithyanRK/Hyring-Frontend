import Head from "next/head";

import ContactUsSection from "@/components/landing-page/contact-us-section/contact-us-section";
import NavbarComponent from "@/common/landing-page/navbar/navbar-component";
import Image from "next/image";

import dynamic from "next/dynamic.js";

const FooterComponent = dynamic(() =>
  import("../common/landing-page/footer/footer.jsx")
);

export default function Index() {
  return (
    <>
      <Head>
        <title>hyring-contact-us</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          <ContactUsSection />
        </div>
        <FooterComponent />
      </div>
    </>
  );
}
