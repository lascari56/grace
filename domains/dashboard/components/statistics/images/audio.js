import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 7h2v10H5V7Zm-4 3h2v4H1v-4Zm8-8h2v18H9V2Zm4 2h2v18h-2V4Zm4 3h2v10h-2V7Zm4 3h2v4h-2v-4Z"
      fill="#000"
    />
  </svg>
)

export default SvgComponent
