import LocationIcon from "@/assets/icons/landing-page/location";
import BoxTheme from "@/element/landing-page/box-theme/box-theme";

export default function WhyIndiaHubsSection() {
  
  const Card=({children,color})=>(
    <div>
       <BoxTheme
      top="8px"
      left="7px"
        className={`h-[57px] lg:h-[65px] w-fit cursor-pointer`}
        boxStyle={`w-fit h-[52px] lg:h-[62px]  bg-white   rounded-[9px]  `}
        bgBoxStyle={
          "w-full h-[52px] lg:h-[62px]  rounded-[9px] bg-primary-brown border-2 border-white"
        }
      isButton={true}

      >
          <div className={`flex items-center gap-2 md:gap-[14px] px-3 xxs:px-5 xs:px-10 ${color}`}>
            <div className="scale-[0.7] md:scale-[1]">
              <LocationIcon/>
          </div>
          <div className="  font-primaryBold text-base sm:text-lg lg:text-2xl text-bg-brown">
           {children}</div>
          </div>
     
      </BoxTheme>
    </div>
  )

  const tabsData=[
    {
      text:"Bangalore",
      color:"fill-custom-yellow"
    },
    {
      text:"Hyderabad",
      color:"fill-custom-blue"
    },
    {
      text:"Chennai",
      color:"fill-custom-sandal"
    },
    {
      text:"Mumbai",
      color:"fill-custom-green"
    },{
      text:"Kolkata",
      color:"fill-custom-rose"
    },{
      text:"Ahmedabad",
      color:"fill-custom-red"
    },{
      text:"Delhi & NCR",
      color:"fill-custom-yellow"
    },{
      text:"Chandigarh",
      color:"fill-custom-blue"
    },{
      text:"Kochi",
      color:"fill-custom-rose"
    },{
      text:"Thiruvanthapuram",
      color:"fill-custom-green"
    },

  ]

  return (
    <div
      className={`w-screen   bg-[url('../../public/bgtheme.svg')] overflow-hidden`}
     
    >
      <div
        className="text-center text-[2rem] py-16 md:py-24 sm:text-[2.25rem] md:text-[2.5rem]  lg:text-[50px]  leading-[50px] 
        text-white  font-primaryBold px-5 "
      >
       Major Economics Hubs
      </div>
     <div className="flex justify-center items-center xs:px-10 xl:px-3 gap-10 max-w-[1500px] mx-auto flex-wrap pb-28 md:pb-40">
     {
        tabsData.map((data,index)=>(
            <Card key={index} color={data.color}>{data.text}</Card>
        ))
      }
     </div>
      
    
    </div>
  );
}
