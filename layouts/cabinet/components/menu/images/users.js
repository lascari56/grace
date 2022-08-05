import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 3.857a3.214 3.214 0 1 0 0 6.429 3.214 3.214 0 0 0 0-6.429ZM9 9a1.929 1.929 0 1 1 0-3.857A1.929 1.929 0 0 1 9 9Z"
      fill="#fff"
    />
    <path
      d="M9 0a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9ZM5.143 15.67v-.884a1.93 1.93 0 0 1 1.928-1.929h3.858a1.93 1.93 0 0 1 1.928 1.929v.885a7.649 7.649 0 0 1-7.714 0Zm8.995-.932a3.215 3.215 0 0 0-3.21-3.167H7.072a3.215 3.215 0 0 0-3.209 3.167 7.714 7.714 0 1 1 10.276 0Z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent
