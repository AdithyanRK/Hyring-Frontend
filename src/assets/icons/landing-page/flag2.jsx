import React from "react";

function Flag2() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="136"
      height="35"
      fill="none"
      viewBox="0 0 136 35"
    >
      <path fill="#A90101" d="M11.254 34.5l-6.5-8.5h6.5v8.5z"></path>
      <g filter="url(#filter0_d_324_510)">
        <path
          fill="url(#paint0_linear_324_510)"
          d="M4.754 0h127l-7.114 13 7.114 13h-127l.114-13-.114-13z"
        ></path>
        <text
          fill="#FAFAFA"
          fontFamily="Whyte Inktrap"
          fontSize="14"
          transform="translate(41.754 7)"
          style={{ whiteSpace: "pre" }}
          letterSpacing="0em"
        >
          <tspan x="0" y="9.986">
            As Low As
          </tspan>
        </text>
      </g>
      <defs>
        <filter
          id="filter0_d_324_510"
          width="135"
          height="34"
          x="0.754"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_324_510"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_324_510"
            result="shape"
          ></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear_324_510"
          x1="7.254"
          x2="116.338"
          y1="5.5"
          y2="29.652"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D32121"></stop>
          <stop offset="0.541" stopColor="#FB6161"></stop>
          <stop offset="1" stopColor="#D32121"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Flag2;
