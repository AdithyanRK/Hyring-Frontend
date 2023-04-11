import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
export default function BoxTheme({
  children,
  boxStyle,
  bgBoxStyle,
  className,
  isButton,
  width,
  top,
  left,
  disableAnimate,
  setHoverFirst,
  setHoverSecond,
  onClick
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);
  useEffect(() => {
    if (inView) {
      controls.start({
        top: top,
        left: left,
        transition: {
          delay: 0.3,
          duration: 0.8,
        },
      });
    }
  }, [controls, inView]);
  return (
    <>
      {!isButton ? (
        <div
          className={`${className}  relative  `}
          onMouseEnter={() => {
            setHoverSecond && setHoverSecond(true);
            setHoverFirst && setHoverFirst(true);
          }}
          onMouseLeave={() => {
            setHoverSecond && setHoverSecond(false);
            setHoverFirst && setHoverFirst(false);
          }}
        >
          <div
            className={`${boxStyle} flex justify-center items-center relative z-1 `}
          >
            {children}
          </div>
          <motion.div
            transition={{
              delay: 0.3,
            }}
            ref={ref}
            {...(disableAnimate
              ? {}
              : { initial: { left: "0px", top: "0px" } })}
            {...(disableAnimate ? null : { animate: controls })}
            className={`${bgBoxStyle}   absolute  `}
          ></motion.div>
        </div>
      ) : (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          className={width}
          onClick={onClick}
        >
          <div className={`${className}  relative  `}>
            <div
              className={`${boxStyle} flex justify-center items-center relative z-1 `}
            >
              {children}
            </div>
            <motion.div
              ref={ref}
              animate={controls}
              initial={{ left: "0px", top: "0px" }}
              className={`${bgBoxStyle}   absolute  `}
            ></motion.div>
          </div>
        </motion.button>
      )}
    </>
  );
}
