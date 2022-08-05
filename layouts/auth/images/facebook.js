import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 7c0-3.867-3.133-7-7-7S0 3.133 0 7c0 3.494 2.56 6.39 5.906 6.915V9.024H4.128V7h1.778V5.458c0-1.754 1.045-2.723 2.644-2.723.766 0 1.567.136 1.567.136v1.722h-.883c-.869 0-1.14.54-1.14 1.093V7h1.941l-.31 2.024H8.094v4.891A7.002 7.002 0 0 0 14 7Z"
      fill="#4285F4"
    />
  </svg>
)

export default SvgComponent
