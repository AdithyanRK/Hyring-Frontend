import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={332}
    height={261}
    fill="none"
    {...props}
    className="scale-[0.7] md:scale-[0.8] lg:scale-[0.9] "

  >
    <path
      stroke="#DDDBDB"
      strokeDasharray="6 8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M53 53h207c11.046 0 20 8.954 20 20v39.603c0 11.045-8.954 20-20 20H73c-11.046 0-20 8.954-20 20V189c0 11.046 8.954 20 20 20h207"
    />
    <circle cx={279.5} cy={208.5} r={52} fill="#B9C8FF" stroke="#462B34" />
    <circle
      cx={52.5}
      cy={52.5}
      r={52.112}
      fill="#FFD7A6"
      stroke="#462B34"
      strokeWidth={0.777}
    />
    <path
      stroke="#462B34"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M52 21v34.917L71 66"
    />
    <circle
      cx={165.762}
      cy={130.5}
      r={30.365}
      fill="#B6ECCC"
      stroke="#462B34"
    />
    <path
      fill="#FDFDFD"
      stroke="#462B34"
      d="m159.57 137.614.349.342.35-.342 19.899-19.471a2.408 2.408 0 0 1 3.355 0 2.26 2.26 0 0 1 0 3.252v.001l-21.883 21.468a2.377 2.377 0 0 1-1.692.673 2.503 2.503 0 0 1-1.697-.678l-9.168-8.971a2.26 2.26 0 0 1 0-3.252 2.408 2.408 0 0 1 3.355 0l7.132 6.978Z"
    />
    <circle
      cx={279.707}
      cy={196.481}
      r={10.79}
      fill="#FFF5B7"
      stroke="#462B34"
    />
    <path
      fill="#FFF5B7"
      stroke="#462B34"
      d="M258.593 226.699c2.596-9.282 11.069-16.082 21.115-16.082 10.045 0 18.518 6.8 21.114 16.082.41 1.468-.016 2.825-.94 3.831-.931 1.014-2.369 1.667-3.948 1.667h-32.453c-1.579 0-3.017-.653-3.948-1.667-.924-1.006-1.35-2.363-.94-3.831Z"
    />
  </svg>
)
export default SvgComponent
