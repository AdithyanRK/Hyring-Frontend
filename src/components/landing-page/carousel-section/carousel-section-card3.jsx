
import PercentageSvg from '@/assets/icons/landing-page/percentageSvg'
import CarouselSectionCard from '@/element/landing-page/carousel-section/carousel-section-card'


export default function CarouselSectionCard3() {
  return (
    <CarouselSectionCard
    text={"Indian Taxations"}
    Svg={<PercentageSvg/>}
    boxStyleColor={"bg-custom-blue"}
    starColor1={"fill-custom-yellow"}
    starColor2={"fill-custom-green"}
    starColor3={"fill-custom-yellow"}
    />
  )
}
