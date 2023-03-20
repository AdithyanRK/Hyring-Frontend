import AiSvg from "@/assets/icons/landing-page/AiSvg";
import CarouselSectionCard from "@/element/landing-page/carousel-section/carousel-section-card";



export default function CarouselSectionCard2() {
  return (
    <CarouselSectionCard
    text={"AI Powered Sourcing"}
    Svg={<AiSvg/>}
    boxStyleColor={"bg-custom-yellow"}
    starColor1={"fill-custom-blue"}
    starColor2={"fill-custom-green"}
    starColor3={"fill-custom-blue"}
    />
  )
}