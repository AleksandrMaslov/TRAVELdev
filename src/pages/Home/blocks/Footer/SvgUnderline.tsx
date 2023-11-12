import { FC } from 'react'

interface SvgUnderlineProps {
  className?: string
}
const SvgUnderline: FC<SvgUnderlineProps> = ({ className }) => {
  return (
    <svg
      width="1440"
      height="120"
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M-20 84.8171C-9.49862 84.8171 1.00276 84.8171 11.5041 84.8171C23.4233 84.8171 36.166 86.148 47.977 84.5C62.1684 82.5198 74.9141 78.1219 89.313 76.7825C106.538 75.1802 125.059 74.8234 141.749 70.6508C155.906 67.1117 176.982 67.75 190.38 73.2938C213.616 82.9086 245.085 84.3413 270.303 84.8171C291.297 85.2132 311.063 84.3777 331.62 79.9541C354.699 74.9876 379.206 77.2054 402.663 77.2054C421.628 77.2054 437.141 79.6577 455.628 83.9714C461.629 85.3717 481.394 90.1718 468.42 93.6975C442.334 100.786 414.19 98.1377 387.439 98.1377C346.167 98.1377 305.333 99.8492 264.172 102.789C237.4 104.702 200.592 112.138 174.099 103.424C153.171 96.5393 131.396 98.1377 109.611 98.1377C99.9553 98.1377 90.2997 98.1377 80.6441 98.1377C71.5427 98.1377 76.4642 98.1377 82.3356 98.1377C129.286 98.1377 175.87 95.6677 222.518 90.1031C261.301 85.4767 299.9 79.2998 338.597 74.0338C387.16 67.4254 437.301 64.457 485.335 54.4759C493.208 52.8399 497.421 48.0714 504.364 46.3356C512.539 44.2918 521.444 41.7552 529.842 41.1554C539.838 40.4414 550.059 41.0496 560.078 41.0496C567.602 41.0496 568.583 41.9066 569.487 49.93C570.756 61.1988 572.295 76.4624 569.804 87.6715C568.611 93.0416 555.622 90.5259 551.938 90.5259C542.577 90.5259 534.719 90.3279 526.565 95.389C523.55 97.2602 512.847 97.4737 516.31 98.2434C549.369 105.59 583.839 99.2686 612.831 82.9142C618.07 79.959 618.624 74.0059 622.135 70.0165C628.631 62.6343 657.075 65.7878 665.268 65.7878C685.354 65.7878 705.441 65.7878 725.527 65.7878C731.337 65.7878 735.149 66.2204 740.434 68.7479C760.73 78.4549 789.079 73.3995 811.159 73.3995C827.969 73.3995 844.778 73.3995 861.587 73.3995C866.44 73.3995 877.6 71.528 882.202 74.4567C884.663 76.0225 869.105 83.3322 869.093 83.3371C798.581 113.628 718.14 103.846 643.278 103.846C635.138 103.846 610.799 104.892 618.857 103.741C631.592 101.921 643.873 98.3517 656.387 95.389C701.051 84.8149 746.793 79.015 792.341 73.611C813.946 71.0477 836.254 68.8658 857.993 67.6907C886.248 66.1634 913.558 60.4914 941.405 55.8502C969.791 51.1193 998.664 52.4672 1027.35 52.4672C1035.11 52.4672 1039.52 56.4093 1045.54 60.9247C1054.78 67.8568 1063.69 69.4623 1075.24 69.5936C1097.37 69.8451 1118.96 75.3025 1141 75.3025C1156.59 75.3025 1130.46 83.2477 1127.26 84.1828C1091.25 94.7037 1056.08 94.3318 1018.9 94.3318C973.261 94.3318 927.626 94.3318 881.991 94.3318C856.386 94.3318 901.94 94.3139 906.729 94.1204C967.26 91.6747 1027.02 82.9142 1087.72 82.9142C1110.06 82.9142 1132.4 82.9142 1154.74 82.9142C1163.95 82.9142 1176.22 85.182 1184.56 81.0113"
        stroke="#CFCFCF"
        strokeWidth="80"
        strokeLinecap="round"
      />
      <path
        d="M1135.08 71.4966C1173.92 71.4966 1212.42 65.7878 1251.05 65.7878C1259.33 65.7878 1269.01 63.5677 1274 71.4966C1283.92 87.2892 1300.47 84.8171 1316.81 84.8171C1342.06 84.8171 1364 80.2799 1387.22 70.6508C1402.47 64.3295 1423.42 67.6907 1439.76 67.6907C1447.49 67.6907 1479.51 61.2985 1479.51 73.3995C1479.51 79.064 1473.33 86.0863 1470 90.5259"
        stroke="#CFCFCF"
        strokeWidth="80"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default SvgUnderline