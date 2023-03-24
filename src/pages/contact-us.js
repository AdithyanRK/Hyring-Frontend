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
        <title>TIRED OF HR CONSULTANTS ?</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="title"
          content="Contact Hyring | India’s leading Contract-to-hire portal"
        />
        <meta name="description" content="" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hyring.com/" />
        <meta
          property="og:title"
          content="Contact Hyring | India’s leading Contract-to-hire portal"
        />
        <meta property="og:description" content="" />
        <meta
          property="og:image"
          content="https://hyring.com/wp-content/uploads/2022/01/about-us-home.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hyring.com/" />
        <meta
          property="twitter:title"
          content="Contact Hyring | India’s leading Contract-to-hire portal"
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
          <ContactUsSection />
        </div>
        <FooterComponent />
      </div>
    </>
  );
}
