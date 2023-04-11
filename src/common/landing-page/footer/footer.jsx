import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import FacebookIcon from "@/assets/icons/landing-page/facebook";
import Instagram from "@/assets/icons/landing-page/instagram";
import Logo from "@/assets/icons/landing-page/logo";
import { useRouter } from "next/router";
import Twitter from "@/assets/icons/landing-page/twitter";
import YoutubeIcon from "@/assets/icons/landing-page/youtube";
import GetStartedButton from "@/element/landing-page/button/get-started-button";
import BoxTheme from "@/element/landing-page/box-theme/box-theme";
import { TextField, Avatar, AvatarGroup } from "@mui/material";
import SubscribeSubmitButton from "@/element/landing-page/button/subscribe-submit-button";
import Star4 from "@/assets/icons/landing-page/star4";
import Link from "next/link";
import LongArrowRight from "@/assets/icons/landing-page/long_arrow_icon";
import GetStartedCircleIcon from "@/assets/icons/landing-page/get_started_circle_icon";
import TataCompanyIcon from "../../../../src/assets/icons/landing-page/company-one";
import Toaster from "@/element/landing-page/toaster/toaster";
import InviteOnlyCircleIcon from "@/assets/icons/landing-page/invite_only_circle_icon";
import { createPopup } from "@typeform/embed";
import "@typeform/embed/build/css/popup.css";
import axios from "axios";
import validator from "validator";
export default function Footer({ className }) {
  const currentYear = new Date().getFullYear();
  const x = useMotionValue(0);
  const router = useRouter();
  const [hoverFirst, setHoverFirst] = React.useState(false);
  const [hoverSecond, setHoverSecond] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [email, setEmail] = React.useState("");

  // handle Submit form

  const handleAddContact = async () => {
    if (validator.isEmail(email)) {
      try {
        await axios.post(
          "https://api.sendinblue.com/v3/contacts",
          { updateEnabled: false, email: email },
          {
            headers: {
              "Content-Type": "application/json",
              "api-key":
                "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",
            },
          }
        );
        setOpenSuccess(true);
        setEmail("");
      } catch (e) {
        setOpenError(true);
      }
    } else {
      setOpenError(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    if (event === "success") {
      setOpenSuccess(false);
    } else {
      setOpenError(false);
    }
  };

  const handleSeeker = () => {
    createPopup("FDcDS1yK").open();
  };

  const handleEmployers = () => {
    createPopup("LIowQUFE").open();
  };
  return (
    <div className="footer font-primaryMedium w-[95vw] mx-auto border-2 relative border-primary-brown xl:h-[488px] h-[700px] rounded-[30px] pt-10 md:pt-20 mt-60 max-w-[2000px]  my-0 md:mt-80">
      <div className="flex  lg:flex-row flex-col items-center -top-40  absolute z-10 lg:-top-40 left-0 right-0 justify-center gap-5 lg:gap-20   ">
        <BoxTheme
          disableAnimate={true}
          className={`${className} xl:w-[40%]  cursor-pointer  `}
          boxStyle={`!item-start !justify-start  border-2 bg-white  border-primary-brown !bg-custom-green  rounded-lg relative w-full`}
          bgBoxStyle={`w-full h-full rounded-lg bg-primary-brown top-[5px] left-[5px]`}
          setHoverFirst={setHoverFirst}
        >
          <div
            className="flex flex-col gap-2  items-start py-8 px-2 md:py-12 md:px-5"
            onClick={() => handleSeeker()}
          >
            <AvatarGroup max={4}>
              <Avatar
                className={`${hoverFirst ? "avatar" : ""}`}
                alt="Remy"
                src="https://hyring.com/wp-content/uploads/2023/03/emp1-ava.png"
                style={{ border: "none" }}
              />
              <Avatar
                className={`${hoverFirst ? "avatar" : ""}`}
                alt="Travis"
                src="https://hyring.com/wp-content/uploads/2023/03/emp2-ava.png"
                style={{ border: "none" }}
              />
              <Avatar
                className={`${hoverFirst ? "avatar" : ""}`}
                alt="Cindy"
                src="https://hyring.com/wp-content/uploads/2023/03/emp3-ava.png"
                style={{ border: "none" }}
              />
            </AvatarGroup>
            <div>
              <div className="text-lg  md:text-2xl lg:text-[26px] text-medium ">
                I'm a Job Seeker, Let's work together!
              </div>
              <p className="font-primaryLight mt-1  ">
                Invitation-only exclusive access
              </p>
            </div>
            <div className="scale-[.7] lg:scale-[0.9] absolute -top-8 -left-8 ">
              <Star4
                className={` ${
                  hoverFirst ? "block" : "hidden"
                } fill-custom-yellow animate-spin`}
              />
            </div>
          </div>
          <div className="absolute -right-10 scale-[0.7] md:scale-[1] md:-right-10">
            <div className="h-fit w-fit">
              <InviteOnlyCircleIcon color={"#FFF5B7"} hover={hoverFirst} />
              <div className="absolute bottom-[2.47rem] left-[2rem]">
                <LongArrowRight />
              </div>
            </div>
          </div>
        </BoxTheme>
        <BoxTheme
          disableAnimate={true}
          className={`${className}  xl:w-[40%]  cursor-pointer  `}
          boxStyle={` border-2 bg-white !item-start !justify-start rounded-lg border-primary-brown !bg-custom-blue w-full  `}
          bgBoxStyle={` w-full h-full rounded-lg bg-primary-brown top-[5px] left-[5px]`}
          setHoverSecond={setHoverSecond}
        >
          <div
            className="flex flex-col gap-2  items-start py-8 px-2 md:py-12 md:px-5"
            onClick={() => handleEmployers()}
          >
            <AvatarGroup max={4}>
              <Avatar
                className={`${hoverSecond ? "avatar" : ""}`}
                alt="Remy"
                src={"https://hyring.com/wp-content/uploads/2023/04/emp3.png"}
                style={{ border: "none" }}
              />
              <Avatar
                className={`${hoverSecond ? "avatar" : ""}`}
                alt="Travis"
                src="https://hyring.com/wp-content/uploads/2023/04/emp2.png"
                style={{ border: "none" }}
              />
              <Avatar
                className={`${hoverSecond ? "avatar" : ""}`}
                alt="Cindy"
                src="https://hyring.com/wp-content/uploads/2023/04/emp1.png"
                style={{ border: "none" }}
              />
            </AvatarGroup>
            <div>
              <div className="text-lg md:text-2xl lg:text-[26px] text-medium ">
                I'm an Employer, Let's talk business!
              </div>
              <p className="font-primaryLight mt-1  ">
                Open access for overseas companies
              </p>
            </div>
            <div className="scale-[.7] lg:scale-[0.9] absolute -top-8 -left-8 ">
              <Star4
                className={` ${
                  hoverSecond ? "block" : "hidden"
                } fill-custom-yellow animate-spin`}
              />
            </div>
          </div>
          <div className="absolute -right-10 scale-[0.7] md:scale-[1] md:-right-10">
            <div className="h-fit w-fit">
              <InviteOnlyCircleIcon color={"#B6ECCC"} hover={hoverSecond} />
              <div className="absolute bottom-[2.47rem] left-[2rem]">
                <LongArrowRight />
              </div>
            </div>
          </div>
        </BoxTheme>
      </div>
      <div className="basis-[300px] text-center mob-logo pt-60 lg:pt-5">
        <Logo className="m-auto" />
        <p className="text-2xl mt-5 mb-10">
          Meet the new gold standard in contract Hyring
        </p>
        {/* <GetStartedButton boxColor={"bg-primary-orange"} className="mb-5" /> */}
      </div>
      <div className="flex xl:gap-24 items-center gap-12 justify-center max-w-fit m-auto pt-6">
        <div className="basis-[300px] desk-logo">
          <Logo />
          <p className="text-2xl mt-5 mb-10">
            Meet the new gold standard in contract Hyring
          </p>
          {/* <GetStartedButton boxColor={"bg-primary-orange"} /> */}
        </div>
        <div className="company-sec flex flex-col gap-y-5 mb-16">
          <h2 className="text-[22px]">Company</h2>
          {/* <Link href={"/#whyIndia"} scroll={false}>
            <p className="text-lg font-primary">Why India</p>
          </Link> */}
          <Link href={"/#pricing"} scroll={false}>
            <p className="text-lg font-primary">Pricing</p>
          </Link>
          <Link href="/contact-us">
            <p className="text-lg font-primary">Contact Us</p>
          </Link>
          {/* <Link href="/about-hyring">
            <p className="text-lg font-primary">About Hyring</p>
          </Link> */}
        </div>
        <div className="company-sec flex flex-col gap-y-5 mb-16">
          <h2 className="text-[22px]  ">Legal</h2>
          <p className="text-lg font-primary">Privacy Policy</p>
          <p className="text-lg font-primary">Terms & Conditions</p>
          {/* <p className="text-lg font-primary">Cancellation Policy</p> */}
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
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
              >
                <YoutubeIcon />
              </motion.button> */}

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
                <a href="https://twitter.com/hyringhq" target="_blank">
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
                  "w-[260px] h-[57px] border bg-white rounded-[8px] border-primary-brown"
                }
                bgBoxStyle={
                  "w-[260px] h-[57px]  rounded-[8px]  bg-primary-brown "
                }
              >
                <TextField
                  className="w-[270px] footer_input_placeholder"
                  hiddenLabel
                  id="filled-hidden-label-normal"
                  placeholder="Your Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </BoxTheme>
              <SubscribeSubmitButton
                handleSubscribe={() => handleAddContact()}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mob-soc flex-col gap-y-6 text-center pb-12">
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
              <a href="https://www.facebook.com/HyringHQ/" target="_blank">
                <FacebookIcon />
              </a>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
            >
              <a href="https://twitter.com/hyringhq" target="_blank">
                <Twitter />
              </a>
            </motion.button>
          </div>
        </div>
        <div className="flex flex-col gap-y-7">
          <h2 className="text-[22px]  ">Subscribe Newsletter</h2>
          <div className="flex items-center gap-2 m-auto pb-0 xxs:pb-10">
            <BoxTheme
              top="5px"
              left="4px"
              className={`h-[60px] ${className} w-fit cursor-pointer  text-2xl  `}
              boxStyle={
                "w-[215px] xxs:w-[270px] h-[57px] border bg-white rounded-[8px] border-primary-brown"
              }
              bgBoxStyle={
                "w-[215px] xxs:w-[270px] h-[57px]  rounded-[8px]  bg-primary-brown "
              }
            >
              <TextField
                className="w-[270px] footer_input_placeholder"
                hiddenLabel
                id="filled-hidden-label-normal"
                placeholder="Your Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </BoxTheme>
            <SubscribeSubmitButton handleSubscribe={() => handleAddContact()} />
          </div>
        </div>
      </div>
      <Toaster
        open={openSuccess}
        vertical="top"
        horizontal="right"
        title="Thank for subscribing! 👍"
        subtitle="You have successfully subscribed to Hyring’s Newsletter"
        type="success"
        handleClose={handleClose}
      />
      <Toaster
        open={openError}
        vertical="top"
        horizontal="right"
        title="Something went Wrong! 😟"
        subtitle="Please check your email and try again"
        type="error"
        handleClose={handleClose}
      />
      {/* <Toaster setOpenSuccess /> */}
      <div className="copy-sec border-t-[1px] font-primary border-[#593a25] justify-center flex pt-3 border-solid xl:mt-8 mt-0 xxs:mt-10 ml-24 mr-24">
        Copyright © {currentYear} Hyring. All rights reserved.
      </div>
    </div>
  );
}
