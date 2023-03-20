import AwardWithCheckSvg from "@/assets/icons/landing-page/AwardWithCheckSvg";
import CarouselSectionCard from "@/element/landing-page/carousel-section/carousel-section-card";


export default function CarouselSectionCard1() {
  return (
    <CarouselSectionCard
        text={"Health Insurance for Family Members"}
    Svg={<AwardWithCheckSvg/>}
    boxStyleColor={"bg-custom-green"}
    starColor1={"fill-custom-blue"}
    starColor2={"fill-custom-yellow"}
    starColor3={"fill-custom-yellow"}
    />
  )
}