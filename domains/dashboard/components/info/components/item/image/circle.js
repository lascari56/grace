import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={134}
    height={134}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={134}
      height={134}
    >
      <circle
        cx={67}
        cy={67}
        r={67}
        transform="rotate(-180 67 67)"
        fill="#C4C4C4"
      />
    </mask>
    <g mask="url(#a)">
      <path fill="#98D89E" d="M140.634 139.307H-5.307V-6.634h145.941z" />
      <path
        d="m81.594-3.317-13.93 69.654 72.97-28.643V-6.634l-59.04 3.317Z"
        fill="#EE8484"
      />
      <path
        d="M140.634 139.307V37.812L68.327 65.673v73.634h72.307Z"
        fill="#F7DC7D"
      />
    </g>
  </svg>
)

export default SvgComponent
