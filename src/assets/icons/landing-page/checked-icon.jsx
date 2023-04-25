import * as React from "react"
const CheckedIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <rect width={20} height={20} x={1} y={1} fill="#EAA24B" rx={3} />
    <path
      fill="#fff"
      d="M7.274 9.821a1.596 1.596 0 0 0-2.298 0 1.697 1.697 0 0 0 0 2.357l3.25 3.334c.635.65 1.663.65 2.298 0l6.5-6.667a1.697 1.697 0 0 0 0-2.357 1.596 1.596 0 0 0-2.298 0l-5.351 5.488-2.101-2.155Z"
    />
    <rect
      width={20}
      height={20}
      x={1}
      y={1}
      stroke="#EAA24B"
      strokeWidth={2}
      rx={3}
    />
  </svg>
)
export default CheckedIcon
