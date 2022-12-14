import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={17}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.373.018c1.969.123 3.814 1.108 5.167 2.46C16.139 4.202 17 6.293 17 8.753c0 1.968-.738 3.813-1.968 5.412-1.23 1.477-2.952 2.584-4.92 2.953-1.969.369-3.937.123-5.659-.861S1.378 13.796.64 11.95C-.098 10.105-.221 8.014.394 6.17 1.009 4.2 2.116 2.602 3.838 1.495 5.438.387 7.405-.105 9.373.018Zm.615 15.869a7.554 7.554 0 0 0 4.183-2.584c.984-1.353 1.599-2.952 1.476-4.674 0-1.968-.738-3.936-2.091-5.29-1.23-1.23-2.706-1.967-4.429-2.09-1.599-.123-3.32.246-4.674 1.23a7.442 7.442 0 0 0-2.83 4.059c-.491 1.599-.491 3.321.247 4.92.738 1.6 1.845 2.83 3.321 3.69a6.592 6.592 0 0 0 4.797.739Z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m6.175 4.939.956-.512 5.535 3.69v1.024l-5.535 3.69-.956-.512V4.94Zm1.23 1.149v5.082l3.812-2.54-3.812-2.542Z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent
