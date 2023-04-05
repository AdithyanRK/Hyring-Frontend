import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import FacebookIcon from "@/assets/icons/landing-page/facebook";
import Instagram from "@/assets/icons/landing-page/instagram";
import Logo from "@/assets/icons/landing-page/logo";
import { useRouter } from "next/router";
import Mesh2 from "@/assets/icons/landing-page/mesh2";
import Twitter from "@/assets/icons/landing-page/twitter";
import YoutubeIcon from "@/assets/icons/landing-page/youtube";
import GetStartedButton from "@/element/landing-page/button/get-started-button";
import BoxTheme from "@/element/landing-page/box-theme/box-theme";
import { TextField, Avatar, AvatarGroup, Button } from "@mui/material";
import SubscribeSubmitButton from "@/element/landing-page/button/subscribe-submit-button";
import Arrow from "@/assets/icons/landing-page/arrow";
import Star4 from "@/assets/icons/landing-page/star4";
import Link from "next/link";

export default function Footer({ className }) {
  const currentYear = new Date().getFullYear();
  const constraintsRef = React.useRef(null);
  const x = useMotionValue(0);
  const [dragDirection, setDragDirection] = React.useState("0");
  const router = useRouter();
  const [hover, setHover] = React.useState(true);

  const handleDrag = (event, info) => {
    if (info.offset.x > 0) {
      setDragDirection("right");
      setTimeout(() => {
        router.push("https://hyring.com/employers/");
      }, 2000);
    } else if (info.offset.x < 0) {
      setDragDirection("left");
      setTimeout(() => {
        router.push("https://hyring.com/job-seekers/");
      }, 2000);
    }
  };
  return (
    <div className=" flex justify-center footer font-primaryMedium w-[95vw] mx-auto border-2 relative border-primary-brown xl:h-[488px] h-[700px] rounded-[30px] pt-10 mt-80 max-w-[2000px]  my-0 ">
      <div className="flex flex-row w-full absolute -top-36 justify-between px-16 max-w-[1400px] mx-auto my-0">
        <BoxTheme
          disableAnimate={true}
          className={`${className} h-fit w-fit cursor-pointer`}
          boxStyle={`!flex !items-start w-[550px] h-[200px]  border-2  rounded-[20px] border-primary-brown !bg-custom-green`}
          bgBoxStyle={`w-full h-full rounded-[20px] bg-primary-brown${
            hover ? " animate-circleFill" : ""
          }   top-[6px] left-[6px] `}
        >
          <div className="relative p-4">
            <div className="flex items-start">
            <AvatarGroup max={4}>
              <Avatar
                // className={`${dragDirection === "right" ? "avatar" : ""}`}
                alt="Remy"
                src="https://hyring.com/wp-content/uploads/2023/03/comp1-ava.png"
                style={{ border: "none" }}
              />
              <Avatar
                // className={`${dragDirection === "right" ? "avatar" : ""}`}
                alt="Travis"
                src="https://hyring.com/wp-content/uploads/2023/03/comp3-ava.png"
                style={{ border: "none" }}
              />
              <Avatar
                // className={`${dragDirection === "right" ? "avatar" : ""}`}
                alt="Cindy"
                src="https://hyring.com/wp-content/uploads/2023/03/comp2-ava.png"
                style={{ border: "none" }}
              />
            </AvatarGroup>
            </div>

            <div className="my-2">
              <h2 className="my-2">I am a Job seeker</h2>
              <p className="text-lg font-primary">
                Lorem ipsum dolor sit alam, consectetur adipiscing
              </p>
            </div>

            <div className="absolute z-2 top-[50%] w-full flex flex-row items-center justify-end">
              <div className="-mr-10">

              <Avatar
                // className={`${dragDirection === "right" ? "avatar" : ""}`}
                alt="Cindy"
                src="https://hyring.com/wp-content/uploads/2023/03/comp2-ava.png"
                style={{ border: "none" }}
              />
              </div>


            </div>
          </div>
        </BoxTheme>

        <BoxTheme
          disableAnimate={true}
          className={`${className} h-fit w-fit cursor-pointer w- `}
          boxStyle={` w-[550px] h-[200px]  border-2  border-primary-brown rounded-[20px] !bg-custom-blue `}
          bgBoxStyle={`w-full h-full rounded-[20px] bg-primary-brown${
            hover ? " animate-circleFill" : ""
          }   top-[6px] left-[6px] `}
        >
          <div>
            <p>Enter</p>
          </div>
        </BoxTheme>
      </div>
      <div className="basis-[300px] text-center mob-logo pt-5">
        <Logo className="m-auto" />
        <p className="text-2xl mt-5 mb-10">
          Meet the new gold standard in remote Hyring
        </p>
        <GetStartedButton boxColor={"bg-primary-orange"} className="mb-5" />
      </div>

      {/* //lore */}
      <div className="flex flex-col">
      <div className="flex xl:gap-24 items-center gap-12 justify-center max-w-fit m-auto">
        <div className="basis-[300px] desk-logo">
          <Logo />
          <p className="text-2xl mt-5 mb-10">
            Meet the new gold standard in remote Hyring
          </p>
          <GetStartedButton boxColor={"bg-primary-orange"} />
        </div>
        <div className="company-sec flex flex-col gap-y-5 mb-16">
          <h2 className="text-[22px]">Company</h2>
          <Link href={"/#whyIndia"} scroll={false}>
            <p className="text-lg font-primary">Why India</p>
          </Link>
          <Link href={"/#pricing"} scroll={false}>
            <p className="text-lg font-primary">Pricing</p>
          </Link>
          <Link href="/contact-us">
            <p className="text-lg font-primary">Contact Us</p>
          </Link>
        </div>
        <div className="company-sec flex flex-col gap-y-5 mb-16">
          <h2 className="text-[22px]  ">Legal</h2>
          <p className="text-lg font-primary">Privacy Policy</p>
          <p className="text-lg font-primary">Terms & Conditions</p>
          <p className="text-lg font-primary">Cancellation Policy</p>
        </div>
        <div className="desk-soc flex-col gap-y-12 mt-7">
          <div className="flex flex-col gap-y-7">
            <h2 className="text-[22px]  ">Social</h2>
            <div className="flex items-center gap-5">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
              >
                <a
                  href="https://in.linkedin.com/company/hyring-com"
                  target="_blank"
                >
                  <Instagram />
                </a>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
              >
                <YoutubeIcon />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
              >
                <a href="https://www.facebook.com/HyringHQ/" target="_blank">
                  <FacebookIcon />
                </a>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
              >
                <a href="https://www.facebook.com/HyringHQ/" target="_blank">
                  <Twitter />
                </a>
              </motion.button>
            </div>
          </div>
          <div className="flex flex-col gap-y-7">
            <h2 className="text-[22px]  ">Subscribe Newsletter</h2>
            <div className="flex items-center gap-5">
              <BoxTheme
                top="5px"
                left="4px"
                className={`h-[60px] ${className} w-fit cursor-pointer  text-2xl  `}
                boxStyle={
                  "w-[270px] h-[57px] border bg-white rounded-[8px] border-primary-brown"
                }
                bgBoxStyle={
                  "w-[270px] h-[57px]  rounded-[8px]  bg-primary-brown "
                }
              >
                <TextField
                  className="w-[270px] footer_input_placeholder"
                  hiddenLabel
                  id="filled-hidden-label-normal"
                  placeholder="Your Email Address"
                />
              </BoxTheme>
              <SubscribeSubmitButton />
            </div>
          </div>
        </div>
      </div>
      <div className="mob-soc flex-col gap-y-6 text-center">
        <div className="flex flex-col gap-y-7">
          <h2 className="text-[22px]">Social</h2>
          <div className="flex items-center gap-5 m-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
            >
              <a
                href="https://in.linkedin.com/company/hyring-com"
                target="_blank"
              >
                <Instagram />
              </a>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
            >
              <YoutubeIcon />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
            >
              <a href="https://www.facebook.com/HyringHQ/" target="_blank">
                <FacebookIcon />
              </a>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
            >
              <a href="https://www.facebook.com/HyringHQ/" target="_blank">
                <Twitter />
              </a>
            </motion.button>
          </div>
        </div>
        <div className="flex flex-col gap-y-7">
          <h2 className="text-[22px]  ">Subscribe Newsletter</h2>
          <div className="flex items-center gap-5 m-auto">
            <BoxTheme
              top="5px"
              left="4px"
              className={`h-[60px] ${className} w-fit cursor-pointer  text-2xl  `}
              boxStyle={
                "w-[270px] h-[57px] border bg-white rounded-[8px] border-primary-brown"
              }
              bgBoxStyle={
                "w-[270px] h-[57px]  rounded-[8px]  bg-primary-brown "
              }
            >
              <TextField
                className="w-[270px] footer_input_placeholder"
                hiddenLabel
                id="filled-hidden-label-normal"
                placeholder="Your Email Address"
              />
            </BoxTheme>
            <SubscribeSubmitButton />
          </div>
        </div>
      </div>
      <div className="copy-sec border-t-[1px] font-primary border-[#593a25] justify-center flex pt-3 border-solid xl:mt-16 mt-10 ml-24 mr-24">
        Copyright © {currentYear} Hyring. All rights reserved.
      </div>

      </div>
    
    </div>
  );
}
