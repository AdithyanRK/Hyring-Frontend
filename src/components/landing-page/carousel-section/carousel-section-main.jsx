import React from 'react'
import CarouselSection1 from './carousel-section1'
import CarouselSection2 from './carousel-section2'
import CarouselSection3 from './carousel-section3'
import { useWindowHeight } from '@react-hook/window-size';

export default function CarouselSectionMain() {
  let onlyHeight = useWindowHeight();
  if (onlyHeight == 0) {
    return " ";
  }

  return (
    <div>
        <div className="relative min-h-[90vh] mt-20 max-w-[1800px] mx-auto my-0">
              <div className="sticky  top-0 h-full">
                <CarouselSection1 />
              </div>
              <div className={`sticky
              ${onlyHeight < 540 ? " top-4 " : " "}
              ${onlyHeight >= 540 && onlyHeight < 640 ? " top-6 " : " "}
             
              ${onlyHeight >= 640 ? "   top-8   " : " "} 
              h-full`}>
                <CarouselSection2 />
              </div>
              <div className={`sticky ${onlyHeight < 540 ? " top-8 " : " "}
             ${onlyHeight >= 540 && onlyHeight < 640 ? " top-12 " : " "}
              ${onlyHeight >= 640 ? "   top-16   " : " "}  z-20 h-full`}>
                <CarouselSection3 />
              </div>
              {/* <div className="sticky top-2 h-[20vh]"></div> */}
            </div>
    </div>
  )
}
