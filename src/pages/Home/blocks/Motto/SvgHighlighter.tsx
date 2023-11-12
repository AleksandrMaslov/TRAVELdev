import { FC } from 'react'

interface SvgHighlighterProps {
  className?: string
}

const SvgHighlighter: FC<SvgHighlighterProps> = ({ className }) => {
  return (
    <svg
      width="632"
      height="68"
      viewBox="0 0 632 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.05946 65.4425C53.5562 65.4425 98.786 67.3787 143.14 64.0344C184.401 60.9233 225.853 61.8216 267.223 61.8216C312.484 61.8216 357.745 61.8216 403.006 61.8216C425.93 61.8216 448.853 61.8216 471.777 61.8216C493.292 61.8216 514.303 62.6334 535.494 59.1059C548.709 56.906 561.817 55.5404 574.932 52.7692C585.611 50.5129 594.975 45.7523 605.253 42.8116C610.528 41.3023 616.078 40.0594 620.853 37.3801C623.036 36.1547 627.817 33.5012 628.982 31.5464C633.554 23.8712 621.596 17.7012 615.47 15.1515C607.798 11.9589 599.533 11.8536 591.631 9.31774C582.206 6.29324 572.168 6.06104 562.299 4.79154C539.804 1.898 516.517 2.98107 493.858 2.98107C429.677 2.98107 365.434 2.07583 301.224 2.07583C268.139 2.07583 235.053 2.07583 201.968 2.07583C174.99 2.07583 148.083 1.46965 121.223 3.68514C98.6923 5.54359 77.2981 10.5584 55.474 15.5538C45.4383 17.8509 35.2343 19.3987 25.3183 22.1922C19.8507 23.7325 12.5471 25.3021 7.85103 28.3278C2.88751 31.5257 1.52129 37.3363 2.13848 42.6104C2.67615 47.205 11.4989 48.6697 15.1016 50.1541C25.5468 54.4576 36.042 55.2719 47.2897 56.8428C73.188 60.4598 99.7238 59.1059 125.837 59.1059C158.483 59.1059 191.129 59.1059 223.775 59.1059C250.022 59.1059 276.362 59.7228 302.597 59.0556C327.878 58.4126 352.265 53.9173 377.3 51.6628"
        stroke="#FDFFAA"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default SvgHighlighter
