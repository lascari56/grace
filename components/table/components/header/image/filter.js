import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={12}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.625 0H.375A.375.375 0 0 0 0 .375v.626a.671.671 0 0 0 .199.476L4.5 5.842v3.825l.75.285V5.625a.375.375 0 0 0-.109-.266L.75.97V.75h10.5v.229l-4.376 4.38a.375.375 0 0 0-.124.266v4.954l.75.296V5.812L11.801 1.5A.68.68 0 0 0 12 1.012V.375A.375.375 0 0 0 11.625 0Z"
      fill="#6424FB"
    />
  </svg>
)

export default SvgComponent
