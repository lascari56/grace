import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 12V6.75h5.25L2.837 9.165a4.438 4.438 0 0 0 5.757.507A4.5 4.5 0 0 0 10.236 7.5h.013a4.61 4.61 0 0 0 .195-.75h1.509A6 6 0 0 1 6 12h-.008a5.958 5.958 0 0 1-4.24-1.755L0 12Zm1.555-6.75H.046A6 6 0 0 1 5.996 0H6a5.955 5.955 0 0 1 4.24 1.755L12 0v5.25H6.75l2.416-2.415A4.437 4.437 0 0 0 6 1.5a4.5 4.5 0 0 0-4.236 3H1.75a4.461 4.461 0 0 0-.194.75Z"
      fill="#000"
      opacity={0.2}
    />
  </svg>
)

export default SvgComponent
