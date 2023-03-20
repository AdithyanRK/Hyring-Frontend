import { Card } from "@mui/material";
import React,{useState,useEffect,useRef} from "react";
import Image from 'next/image'
import Img from "@/assets/images/prom-one.png"
import ImgTwo from "@/assets/images/prom-two.png";
import ImgThree from "@/assets/images/prom-three.png";
import ImgFour from "@/assets/images/prom-four.png";
import heart from "@/assets/images/heart.png";
import explore from "@/assets/images/explore.png";
import fill from "@/assets/images/fill.png";
import talent from "@/assets/images/talent.png";
import costs from "@/assets/images/costs.png";


const HomePromisesSection = () => {
  const scrollRef = useRef(null);
  const imgRef = useRef(null);
  const imgTwoRef = useRef(null)
  const divRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const imgThreeRef = useRef(null);
  const imgFourRef = useRef(null);

  

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPos = scrollRef.current.scrollTop;
        setScrollPosition(scrollPos);
        if (scrollPos > 0) {
          divRef.current.style.transform = "rotate(-180deg)";
          if (imgRef.current && imgTwoRef.current) {
            imgRef.current.style.transform = "rotate(0deg)";
            imgTwoRef.current.style.transform = "rotate(180deg)";
          }
        } else {
          divRef.current.style.transform = "rotate(0deg)"
          if (imgRef.current) {
            imgRef.current.style.transform = "rotate(0deg)";
          }
        }
        if (scrollPos > 400){
          divRef.current.style.transform = "rotate(-360deg)";
          if(imgThreeRef.current && imgFourRef.current){
          imgThreeRef.current.style.transform = "rotate(0deg)";
          imgFourRef.current.style.transform = "rotate(180deg)";
          }
        } else{
          if (imgThreeRef.current) {
            imgThreeRef.current.style.transform = "rotate(0deg)";
          }
        }
        if (scrollPos > 700){
          divRef.current.style.transform = "rotate(-540deg)";
          if(imgThreeRef.current && imgFourRef.current){
          imgThreeRef.current.style.transform = "rotate(0deg)";
          imgFourRef.current.style.transform = "rotate(180deg)";
          }
        } else{
          if (imgThreeRef.current) {
            imgThreeRef.current.style.transform = "rotate(0deg)";
          }
        }
      }
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  
  return (
    <>
      <div ref={scrollRef} id="parent" className="bg-[#f8f2eb] relative flex h-[28rem] overflow-y-scroll [&::-webkit-scrollbar]:hidden">
        <div className="ml-[-180px] mt-10 top-0 left-0 overflow-hidden fixed w-96 h-96 bg-[#fdfdfd] border-[#462b34] border-solid border-[1px] rounded-full items-center justify-center flex shadow-3xl">
        <div ref={divRef} class="w-80 h-80 relative overflow-y-auto rounded-full border-solid border-black items-center justify-center flex border-r-[2px] transition-all duration-500 ease-out">
        <div class="w-72 h-72 rounded-full border-solid border-black items-center justify-center flex border-b-[2px]">
          <div className="w-60 h-60 bg-[#f8f2eb] border-[#462b34] border-solid border-[1px] rounded-full shadow-4xl items-center justify-end flex">
              {scrollPosition > 400 ? (
                <div className=" flex transition-all duration-500 ease-out" >
                <Image ref={imgFourRef} id="prom-one" src={ImgFour} alt="indian Talents" width={120} className="pr-8 pl-4 transition-all duration-500 ease-out" />
                <Image ref={imgThreeRef} id="prom-one" src={ImgThree} alt="indian Talents" width={120} className="pr-8 pl-4 transition-all duration-500 ease-out origin-top-left" />
                </div>
              ) :(
                <div className=" flex transition-all duration-500 ease-out" >
                <Image ref={imgTwoRef} id="prom-one" src={ImgTwo} alt="Positions" width={120} className="pr-8 pl-4 transition-all duration-500 ease-out" />
            <Image ref={imgRef} id="prom-one" src={Img} alt="indian Talents" width={120} className="pr-8 pl-4 transition-all duration-500 ease-out origin-top-left" />
            </div>
              )}
      
          </div>
          </div>
          </div>
        </div>
        <div className="ml-80">
          <div className="flex pt-24 top-0 left-0 items-center overflow-hidden fixed bg-[#f8f2eb] h-[120px] w-[600px] z-[1]">
          <h1 className="font-bold text-[50px] text-[#462B34] pb-5">Our Promises</h1>
          <Image src={heart} className="h-6 w-6 mb-8 ml-2" />
          </div>
          <div>
          <div id="child1" className="relative  h-[18rem] mt-32 [&::-webkit-scrollbar]:hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-transparent" />
      <div className="flex flex-col items-center justify-center">
      <Card className="card shadow-none h-54 transform transition-all duration-500 ease-out w-[600px] mt-5 p-5 pb-10 pt-10 bg-[#B9C8FF] border-2 border-[#462b34] rounded-2xl">
              <Image src={explore} width={40} />
              <h1 className="pt-2 text-[28px] font-medium">Explore Indian Talents</h1>
              <p className="text-[20px]">Lorem ipsum dolor sit am, consectetur adipiscing
eli nsectetur adipiscing</p>
          </Card>
          <Card className="card h-54 transform transition-all duration-500 ease-out w-[600px] mt-20 p-5 pb-10 pt-10 bg-[#b6eccc] border-2 border-[#462b34] rounded-2xl shadow-none">
              <Image src={fill} width={40} />
              <h1 className="pt-2 text-[28px] font-medium">Fill your open positions within 15 days</h1>
              <p className="text-[20px]">Lorem ipsum dolor sit am, consectetur adipiscing
eli nsectetur adipiscing</p>
          </Card>
          <Card className="card h-54 transform transition-all duration-500 ease-out w-[600px] mt-20 p-5 pb-10 pt-10 bg-[#fff5b7] border-2 border-[#462b34] rounded-2xl shadow-none">
              <Image src={costs} width={40} />
              <h1 className="pt-2 text-[28px] font-medium">Save upto 50% on staffing costs without talent compromise</h1>
              {/* <p className="text-[20px]">Lorem ipsum dolor sit am, consectetur adipiscing
eli nsectetur adipiscing</p> */}
          </Card>
          <Card className="card shadow-none mb-[50px] h-54 transform transition-all duration-500 ease-out w-[600px] mt-20 p-5 pb-10 pt-10 bg-[#fcb2b2] border-2 border-[#462b34] rounded-2xl">
              <Image src={talent} width={40} />
              <h1 className="pt-2 text-[28px] font-medium">Top 5% of Indian IT Talent</h1>
              <p className="text-[20px]">Lorem ipsum dolor sit am, consectetur adipiscing
eli nsectetur adipiscing</p>
          </Card>
          
      </div>
    </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default HomePromisesSection;