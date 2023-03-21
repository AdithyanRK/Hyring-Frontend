import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
export default function BoxTheme({
  children,
  boxStyle,
  bgBoxStyle,
  className,
  y,
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
          delay: 1,
          direction: "forwards",
        },
      });
    }
  }, [controls, inView]);
  return (
    <div className={`${className}  relative  `}>
      <div
        className={`${boxStyle} flex justify-center items-center relative z-1 `}
      >
        {children}
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={controls}
        // transition={{
        //   duration: 1,
        //   ease: "easeInOut",
        //   delay: 1,
        //   direction: "forwards",
        // }}
        className={`${bgBoxStyle}   absolute  `}
      ></motion.div>
    </div>
  );
}
