import AiImage from "@/assets/icons/landing-page/ai-image";
import BigDataIcon from "@/assets/icons/landing-page/big-data";
import CloudIcon from "@/assets/icons/landing-page/cloud";
import DatabaseIcon from "@/assets/icons/landing-page/database-svg";
import MachineLearningIcon from "@/assets/icons/landing-page/machine-learning";
import SecurityIcon from "@/assets/icons/landing-page/security";
import WhyIndiaSkillsCard from "@/element/why-india-page/why-india-skills-card";

export default function WhyIndiaSkillsSection() {
  

  const tabsData=[
    {
      text:"Artificial Intelligence",
      color:"fill-custom-blue",
      icon:<AiImage/>
    },
    {
      text:"Cyber Security",
      color:"fill-custom-rose",
      icon:<SecurityIcon/>
    },
    {
      text:"Machine Learning",
      color:"fill-custom-yellow",
      icon:<MachineLearningIcon/>

    },
    {
      text:"Big Data",
      color:"fill-custom-green",
      icon:<BigDataIcon/>

    },{
      text:"Cloud Computing",
      color:"fill-custom-red",
      icon:<CloudIcon/>

    },{
      text:"Database Developer",
      color:"fill-custom-sandal",
      icon:<DatabaseIcon/>

    }

  ]

  return (
    <div
      className={`w-screen   overflow-hidden`}
     
    >
      <div
        className="text-center text-[2rem] py-16 md:py-24 sm:text-[2.25rem] md:text-[2.5rem]  lg:text-[50px]  leading-[50px] 
        text-primary-brown  font-primaryBold px-5 "
      >
      Skills in Demand
      </div>
     <div className="flex justify-center items-center gap-10 max-w-[1444px] mx-auto flex-wrap pb-2 ">
     {
        tabsData.map((data,index)=>(
            <WhyIndiaSkillsCard key={index} svg={data.icon} color={data.color}>{data.text}</WhyIndiaSkillsCard>
        ))
      }
     </div>
      
    
    </div>
  );
}
