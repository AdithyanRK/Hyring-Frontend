import Head from "next/head";
import NavbarComponent from "@/common/landing-page/navbar/navbar-component";
import Image from "next/image";
import Footer from "@/common/landing-page/footer/footer";
import PrivacyPolicy from "@/components/landing-page/privacy-policy-section/privacy-policy-section";

export default function Index() {
  return (
    <>
      <Head>
        <title>Pricing | India’s leading Contract-to-hire portal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="title"
          content="Pricing | India’s leading Contract-to-hire portal"
        />
        <meta
          name="description"
          content="Pricing | India’s leading Contract-to-hire portal"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hyring.com/" />
        <meta
          property="og:title"
          content="Pricing | India’s leading Contract-to-hire portal"
        />
        <meta
          property="og:description"
          content="Pricing | India’s leading Contract-to-hire portal"
        />
        <meta
          property="og:image"
          content="https://hyring.com/wp-content/uploads/2022/01/about-us-home.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hyring.com/" />
        <meta
          property="twitter:title"
          content="Pricing | India’s leading Contract-to-hire portal"
        />
        <meta property="twitter:description" content="" />
        <meta
          property="twitter:image"
          content="https://hyring.com/wp-content/uploads/2022/01/about-us-home.png"
        ></meta>
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
        <PrivacyPolicy />
        <div className="overflow-hidden">
          <Footer />
        </div>
      </div>
    </>
  );
}
