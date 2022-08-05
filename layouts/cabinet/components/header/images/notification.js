import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={18}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 11.586V8c0-3.217-2.185-5.927-5.145-6.742A1.99 1.99 0 0 0 9 0a1.99 1.99 0 0 0-1.855 1.258C4.185 2.074 2 4.783 2 8v3.586L.293 13.293A.996.996 0 0 0 0 14v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L16 11.586ZM16 15H2v-.586l1.707-1.707A.996.996 0 0 0 4 12V8c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L16 14.414V15Zm-7 5a2.98 2.98 0 0 0 2.818-2H6.182A2.98 2.98 0 0 0 9 20Z"
      fill="#000"
    />
  </svg>
)

export default SvgComponent
