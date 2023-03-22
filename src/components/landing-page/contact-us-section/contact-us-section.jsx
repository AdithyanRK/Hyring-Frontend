import Call from "@/assets/icons/landing-page/call";
import Mail from "@/assets/icons/landing-page/mail";
import Smile from "@/assets/icons/landing-page/smile";
import SmileExpression from "@/assets/icons/landing-page/smile-expression";
import TextMark2 from "@/assets/icons/landing-page/text-mark2";
import Whatsapp from "@/assets/icons/landing-page/whatsapp";
import ContactTabCommon from "@/element/landing-page/contact-us-section/contact-tab-common";
import React from "react";

export default function ContactUsSection() {
  return (
    <div className=" lg:w-[90vw] mx-auto mb-20 mt-3 md:mt-20">
      <h1 className="font-bold justify-center text-[36px] md:text-[48px] lg:text-[58px] flex mx-auto  items-center flex-wrap w-[350px]  xs:w-[105%]  lg:w-full">
        <span className="whitespace-nowrap">Feel Free to</span>
        <span className="relative mr-[12px] xs:mx-[12px] md:mx-[20px]  lg:mx-[24px]">
          <span className="absolute -left-[72px]  sm:-left-[100x] -top-[28px] md:-left-[46px] md:-top-[20px] lg:-left-[26px] lg:-top-[14px] scale-[0.58] md:scale-[0.74] lg:scale-[0.9]  ">
            <TextMark2  />
          </span>
          Contact
        </span>
        <span>Us</span>
        <span className="scale-[0.5] -ml-[18px] xs:-ml-[11px] xs:scale-[0.6] sm:-ml-[8px] md:ml-0 md:scale-[0.7] lg:scale-[1]  ">
          <Smile  />
        </span>
        <span className="scale-[0.7] lg:scale-[1] -ml-[34px] sm:-ml-[30px] md:-ml-[24px] lg:ml-0 -mt-[48px] lg:-mt-[64px]">
            <SmileExpression />
        </span>
      </h1>
      <a href="mailto:hello@hyring.com">
      <ContactTabCommon icon={<Mail className="fill-custom-blue"/>} text1={"Drop Hello"} text2={"hello@hyring.com"} color={1}/>
      </a>
      <a href="https://wa.me/+917070701947?text=Hi%20Hyring" target="_blank">
      <ContactTabCommon icon={<Whatsapp/>}  text1={"Ping Hi"} text2={"+91 707070 1947"} color={2}/>
      </a>
      <a href="tel:+917070701947">
      <ContactTabCommon icon={<Call/>} text1={"Say Hello"} text2={"+91 707070 1947"} color={3} />
      </a>

    </div>
  );
}
