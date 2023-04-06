import * as React from "react"

const Arrow = (props) => (
  <svg
    width={30}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 4.75H.25v1.5H1v-1.5Zm0 1.5h27.55v-1.5H1v1.5ZM23.637 0c0 3.466 2.863 6.25 6.363 6.25v-1.5c-2.7 0-4.863-2.14-4.863-4.75h-1.5ZM30 4.75c-3.5 0-6.363 2.784-6.363 6.25h1.5c0-2.609 2.163-4.75 4.863-4.75v-1.5Z"
      fill="#462B34"
    />
  </svg>
)

export default Arrow
