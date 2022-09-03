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
      d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
      fill={props.color || "#216DD1"}
    />
  </svg>
)

export default SvgComponent
