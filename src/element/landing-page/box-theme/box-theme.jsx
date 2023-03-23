import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
export default function BoxTheme({
  children,
  boxStyle,
  bgBoxStyle,
  className,
  isButton,
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
          // duration: 1,
          // ease: "easeOut",
          delay: 0.3,
          direction: "forwards",
        },
      });
    }
  }, [controls, inView]);
  return (
    <>
      {!isButton ? (
        <div className={`${className}  relative  `}>
          <div
            className={`${boxStyle} flex justify-center items-center relative z-1 `}
          >
            {children}
          </div>
          <motion.div
            transition={{
              delay: 0.3,
              direction: "linear",
            }}
            ref={ref}
            initial={{ opacity: 0 }}
            animate={controls}
            className={`${bgBoxStyle}   absolute  `}
          ></motion.div>
        </div>
      ) : (
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
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
              transition={{
                delay: 0.3,
                direction: "linear",
              }}
              className={`${bgBoxStyle}   absolute  `}
            ></motion.div>
          </div>
        </motion.button>
      )}
    </>
  );
}
