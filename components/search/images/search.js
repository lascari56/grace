import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={13}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={5} cy={5} r={4.5} stroke="#6424FB" />
    <path stroke="#6424FB" d="m8.354 7.646 4 4" />
  </svg>
)

export default SvgComponent
