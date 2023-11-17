import { FC } from 'react'

interface SvgArrowProps {
  className?: string
}
const SvgArrow: FC<SvgArrowProps> = ({ className }) => {
  return (
    <svg
      width="76"
      height="40"
      viewBox="0 0 76 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2 21C8.71463 21.9747 21.5935 23.2226 41.3921 22.7547C61.1907 22.2869 69.5468 20.3798 73 19.7949C66.6691 17.2607 52.8561 10.9057 48.2518 5.75928C42.4964 -0.673731 48.8273 12.3102 59.187 16.286C67.4748 19.4667 71.8489 20.3403 73 20.3795C67.6283 22.5239 53.4317 27.3973 48.2518 35"
        stroke="#FDFFAA"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SvgArrow
