import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
  >
    <path 
      d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"
      fill={props.color || "#216DD1"}
    />
  </svg>
)

export default SvgComponent
