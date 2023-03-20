import * as React from "react"

const Circle = (props) => (
  <svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={10.366}
      cy={10.12}
      r={10}
      transform="rotate(-2.407 10.366 10.12)"
      fill="#FCB2B2"
    />
  </svg>
)

export default Circle