import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={8}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.616.328c.492.451.531 1.079 0 1.63L3.483 6.001l4.133 4.043c.531.551.492 1.18 0 1.628-.49.451-1.32.423-1.781 0-.461-.42-4.966-4.857-4.966-4.857a1.134 1.134 0 0 1-.273-.372 1.072 1.072 0 0 1 0-.886c.064-.14.156-.266.273-.372 0 0 4.505-4.435 4.966-4.857.461-.423 1.29-.451 1.781 0Z"
      fill="#858585"
    />
  </svg>
)

export default SvgComponent
