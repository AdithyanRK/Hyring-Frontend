import React from "react";

function IntroductionStarGreenIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      fill="none"
      viewBox="0 0 21 21"
      {...props}
    >
      <path
        fill={props.fill ? props.fill : "#B6ECCC"}
        stroke="#462B34"
        d="M13.517 13.408a12.617 12.617 0 00-2.993 5.052 12.725 12.725 0 00-3.164-4.943 12.321 12.321 0 00-5.04-2.996 12.617 12.617 0 004.93-3.164 12.617 12.617 0 002.99-5.044 12.388 12.388 0 003.172 4.939 12.966 12.966 0 005.051 2.986c-1.81.63-3.507 1.68-4.946 3.17z"
      ></path>
    </svg>
  );
}

export default IntroductionStarGreenIcon;
