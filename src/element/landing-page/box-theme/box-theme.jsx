import React from "react";

export default function BoxTheme({ 
    children ,
    boxStyle,
    bgBoxStyle,
    className
}) {
   
  return (
       <div className={`${className}  relative  ` }>
      <div className={`${boxStyle} flex justify-center items-center relative z-1 `}>
        {children}
      </div>
      <div className={`${bgBoxStyle}   absolute  `}></div>
    </div>
  );
}
