import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
  >
    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
)

export default SvgComponent
