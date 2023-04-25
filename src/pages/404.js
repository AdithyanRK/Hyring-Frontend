import Custom404Icon from "@/assets/icons/landing-page/404Icon";
import NavbarComponent from "@/common/landing-page/navbar/navbar-component";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Contact Hyring | India’s leading Contract-to-hire portal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="title"
          content="Contact Hyring | India’s leading Contract-to-hire portal"
        />
        <meta
          name="description"
          content="Contact Hyring | India’s leading Contract-to-hire portal"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hyring.com/" />
        <meta
          property="og:title"
          content="Contact Hyring | India’s leading Contract-to-hire portal"
        />
        <meta
          property="og:description"
          content="Contact Hyring | India’s leading Contract-to-hire portal"
        />
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
      <div className="relative text-primary-brown h-screen flex flex-col ">
        <Image
          src="/Rectangle.svg"
          fill
          style={{ objectFit: "cover", zIndex: -10 }}
          alt="Background-Image"
          quality={100}
          priority
        ></Image>
        <NavbarComponent />
        <div className="my-auto mx-5 ">
          <div className="w-full  lg:w-1/3  xs:w-1/2  mx-auto  ">
            <Custom404Icon className={"w-full h-full"} />
          </div>

          <h2 className="font-primaryBold text-2xl xs:text-3xl lg:text-5xl my-4 text-center   ">
            Sorry, Page not found
          </h2>
          <p className="font-primary text-md xs:text-lg  lg:text-2xl text-center ">
            Page you are searching for doesn’t exists
          </p>
        </div>
      </div>
    </>
  );
};

export default Custom404;
