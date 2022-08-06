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
      d="M.384 11.672c-.492-.451-.531-1.079 0-1.63l4.133-4.043L.384 1.956c-.531-.552-.492-1.18 0-1.628.49-.452 1.32-.423 1.781 0 .461.42 4.966 4.857 4.966 4.857.117.105.21.232.273.372a1.072 1.072 0 0 1 0 .886c-.064.14-.156.266-.273.372 0 0-4.505 4.435-4.966 4.857-.461.423-1.29.451-1.781 0Z"
      fill="#858585"
    />
  </svg>
)

export default SvgComponent
