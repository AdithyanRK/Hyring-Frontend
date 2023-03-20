import CarouselSectionTabs from "@/element/landing-page/carousel-section/carousel-section-tabs";

export default function CarouselSectionTabList() {
  return (
       <div className="flex">
         <CarouselSectionTabs text={"New Mackbook"} index={1} color={1} />
         <CarouselSectionTabs text={"Annual International Retreat"} index={2} color={2} />
         <CarouselSectionTabs text={"Big Diwali Gifts"} index={3} color={3} />
         <CarouselSectionTabs text={"Monthly Awards"} index={4} color={4} />
         <CarouselSectionTabs text={"Health Insurance for Family Members"} index={5} color={5} />
       </div>
  )
}
