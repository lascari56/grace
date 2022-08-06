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
      d="M23.738 12.15a11.776 11.776 0 1 1-23.551 0 11.776 11.776 0 0 1 23.55 0ZM10.18 7.87a.736.736 0 0 0-1.163.6v7.36a.736.736 0 0 0 1.163.599l5.152-3.68a.736.736 0 0 0 0-1.198l-5.152-3.68Z"
      fill="#6424FB"
    />
  </svg>
)

export default SvgComponent
