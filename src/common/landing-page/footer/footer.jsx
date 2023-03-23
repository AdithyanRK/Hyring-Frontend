import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import FacebookIcon from "@/assets/icons/landing-page/facebook";
import Instagram from '@/assets/icons/landing-page/instagram'
import Logo from '@/assets/icons/landing-page/logo'
import Mesh2 from '@/assets/icons/landing-page/mesh2'
import Twitter from '@/assets/icons/landing-page/twitter'
import YoutubeIcon from '@/assets/icons/landing-page/youtube'
import GetStartedButton from "@/element/landing-page/button/get-started-button";
import BoxTheme from "@/element/landing-page/box-theme/box-theme";
import { TextField, Avatar, AvatarGroup, Button } from '@mui/material'
import SubscribeSubmitButton from "@/element/landing-page/button/subscribe-submit-button";
import Arrow from '@/assets/icons/landing-page/arrow'
import Star4 from "@/assets/icons/landing-page/star4";

export default function Footer({className}) {
  const currentYear = new Date().getFullYear();
  const constraintsRef = React.useRef(null);
  const x = useMotionValue(0);
  const [dragDirection, setDragDirection] = React.useState("0");

  const handleDrag = (event, info) => {
    if (info.offset.x > 0) {
      setDragDirection("right");
    } else if (info.offset.x < 0) {
      setDragDirection("left");
    }
  };
  return (
    <div className='footer w-[95vw] mx-auto border-2 relative border-primary-brown xl:h-[488px] h-[700px] rounded-[30px] pt-10 mt-80'>
      <div className='green-mar-sec flex justify-center -mt-[280px] mb-[250px]'>
      <BoxTheme
    className={`h-[60px] ${className} w-fit  text-2xl  `}
    boxStyle={
      "xl:w-[900px] w-[600px] green-sec h-[300px] flex flex-col border bg-[#b6eccc] rounded-[8px] border-primary-brown"
    }
    bgBoxStyle={
      "xl:w-[900px] w-[600px] h-[300px] green-sec  rounded-[8px]  bg-primary-brown top-[5px] left-[4px]"
    }
  >
    <Star4 className={`absolute -top-8 -left-8 scale-[0.] ${
          dragDirection === "left" ? "block" : "hidden"
        } fill-custom-yellow animate-spin`}/>
        <Star4 className={`absolute -top-8 -right-8 scale-[0.] ${
          dragDirection === "right" ? "block" : "hidden"
        } fill-custom-blue animate-spin`}/>
    <div className='flex w-full justify-between'>
      <div className={`${dragDirection === "right" ? " opacity-25" : ""} flex flex-col w-[30%] gap-y-3 items-start ml-10`}>
      <AvatarGroup max={4}>
      <Avatar className={`${dragDirection === "left" ? "avatar" : ""}`} alt="Remy" src="/static/images/avatar/1.jpg"/>
      <Avatar className={`${dragDirection === "left" ? "avatar" : ""}`} alt="Travis" src="/static/images/avatar/2.jpg" />
      <Avatar className={`${dragDirection === "left" ? "avatar" : ""}`} alt="Cindy" src="/static/images/avatar/3.jpg" />
    </AvatarGroup>
      <h2>Job Seekers</h2>
      <p className='text-lg'>Lorem ipsum dolor sit alam, consectetur adipiscing</p>
      </div>
      <div className={`${dragDirection === "left" ? " opacity-25" : ""} flex flex-col w-[30%] gap-y-3 items-end mr-10`}>
      <AvatarGroup max={4}>
      <Avatar className={`${dragDirection === "right" ? "avatar" : ""}`} alt="Remy" src="/static/images/avatar/1.jpg" />
      <Avatar className={`${dragDirection === "right" ? "avatar" : ""}`} alt="Travis" src="/static/images/avatar/2.jpg" />
      <Avatar className={`${dragDirection === "right" ? "avatar" : ""}`} alt="Cindy" src="/static/images/avatar/3.jpg" />
    </AvatarGroup>
      <h2>Employers</h2>
      <p className='text-lg text-right'>Lorem ipsum dolor sit alam, consectetur adipiscing</p>
      </div>
    </div>
    <motion.div ref={constraintsRef} className='drag-area flex w-[93%] justify-center bg-white rounded-[50px] mt-7 mb-5 border-2 border-primary-brown'>
      <Arrow className="arrow-left self-center ml-10"/>
      <h2 className='job-title text-lg text-gray-400 self-center ml-5 mr-5'>I Need Job</h2>
      <motion.div drag="x" dragElastic={0} onDrag={handleDrag} className="box" style={{x}} dragConstraints={constraintsRef}>
      <Button className='bg-secondary-orange hover:bg-secondary-orange drag-button m-0 capitalize h-10 w-24 border-2 border-solid border-t-[1px] border-b-[1px] rounded-[50px] border-primary-brown ml-5 mr-5'>
        Sign up
      </Button>
      </motion.div>
      <h2 className='job-title text-lg self-center text-gray-400 mr-5 ml-5'>I Need Candidates</h2>
      <Arrow className=" arrow-right self-center"/>
    </motion.div>
      </BoxTheme>
      </div>
       {/* <div className="overflow-hidden flex gap-x-[166px] absolute top-0 w-full h-full -z-1 bg-white">
        <Mesh2 className={`scale-[1.2] opacity-[0.1]`}/>
        <Mesh2 className={`scale-[1.2] opacity-[0.1]`}/>
      </div> */}
      <div className='basis-[300px] text-center mob-logo pt-5' >
                <Logo className="m-auto"/>
                <p className='text-2xl mt-5 mb-10'>Meet the new gold standard in remote Hyring</p>
                <GetStartedButton
                boxColor={"bg-primary-orange"} className="mb-5"/>
            </div>
      <div className='flex xl:gap-24 items-center gap-12 justify-center max-w-fit m-auto'>
            <div className='basis-[300px] desk-logo' >
                <Logo/>
                <p className='text-2xl mt-5 mb-10'>Meet the new gold standard in remote Hyring</p>
                <GetStartedButton
                boxColor={"bg-primary-orange"}/>
            </div>
            <div className='company-sec flex flex-col gap-y-5 mb-16'>
                <h2 className='text-[22px]  '>Company</h2>
                <p className='text-lg'>Why India</p>
                <p className='text-lg'>Pricing</p>
                <a href="/contact-us">
                <p className='text-lg'>Contact Us</p>
                </a>
            </div>
            <div className='company-sec flex flex-col gap-y-5 mb-16'>
            <h2 className='text-[22px]  '>Legal</h2>
                <p className='text-lg'>Privacy Policy</p>
                <p className='text-lg'>Terms & Conditions</p>
                <p className='text-lg'>Cancellation Policy</p>
            </div>
            <div className='desk-soc flex-col gap-y-12 mt-7'>
            <div className='flex flex-col gap-y-7'>
            <h2 className='text-[22px]  '>Social</h2>
            <div className='flex items-center gap-5'>
              <a href='https://in.linkedin.com/company/hyring-com' target='_blank'>
                <Instagram/>
              </a>
                <YoutubeIcon/>
                <a href='https://www.facebook.com/HyringHQ/' target='_blank'>
                <FacebookIcon/>
                </a>
                <Twitter/>
            </div>

            </div>
            <div className='flex flex-col gap-y-7'>
            <h2 className='text-[22px]  '>Subscribe Newsletter</h2>
            <div className='flex items-center gap-5'>
            <BoxTheme
    className={`h-[60px] ${className} w-fit cursor-pointer  text-2xl  `}
    boxStyle={
      "w-[270px] h-[57px] border bg-white rounded-[8px] border-primary-brown"
    }
    bgBoxStyle={
      "w-[270px] h-[57px]  rounded-[8px]  bg-primary-brown top-[5px] left-[4px]"
    }
  >
    <TextField
    className='w-[270px]'
  hiddenLabel
  id="filled-hidden-label-normal"
  placeholder='Your Email Address'
/>

    
  </BoxTheme>
  <SubscribeSubmitButton/>
            </div>

            </div>
            </div>
      </div>
      <div className='mob-soc flex-col gap-y-6 text-center'>
            <div className='flex flex-col gap-y-7'>
            <h2 className='text-[22px]'>Social</h2>
            <div className='flex items-center gap-5 m-auto'>
              <a href='https://in.linkedin.com/company/hyring-com' target='_blank'>
                <Instagram/>
              </a>
                <YoutubeIcon/>
                <a href='https://www.facebook.com/HyringHQ/' target='_blank'>
                <FacebookIcon/>
                </a>
                <Twitter/>
            </div>

            </div>
            <div className='flex flex-col gap-y-7'>
            <h2 className='text-[22px]  '>Subscribe Newsletter</h2>
            <div className='flex items-center gap-5 m-auto'>
            <BoxTheme
    className={`h-[60px] ${className} w-fit cursor-pointer  text-2xl  `}
    boxStyle={
      "w-[270px] h-[57px] border bg-white rounded-[8px] border-primary-brown"
    }
    bgBoxStyle={
      "w-[270px] h-[57px]  rounded-[8px]  bg-primary-brown top-[5px] left-[4px]"
    }
  >
    <TextField
    className='w-[270px]'
  hiddenLabel
  id="filled-hidden-label-normal"
  placeholder='Your Email Address'
/>

    
  </BoxTheme>
  <SubscribeSubmitButton/>
            </div>

            </div>
            </div>
      <div className='copy-sec border-t-[1px] border-[#593a25] justify-center flex pt-3 border-solid xl:mt-16 mt-10 ml-24 mr-24'>
      Copyright © {currentYear} Hyring. All rights reserved.
      </div>
    </div>
  )
}
