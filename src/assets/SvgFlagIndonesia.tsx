import { FC } from 'react'

interface SvgFlagIndonesiaProps {
  className?: string
}

const SvgFlagIndonesia: FC<SvgFlagIndonesiaProps> = ({ className }) => {
  return (
    <svg
      width="70"
      height="45"
      viewBox="0 0 70 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.8728 13.9949C26.7771 13.245 36.6988 11.7568 46.6607 11.4159C47.1133 11.4004 47.1162 13.5235 47.0169 13.8882C46.7697 14.7958 43.9794 14.5505 43.009 14.839C40.818 15.4903 38.2132 15.4538 35.899 15.629C32.4994 15.8864 29.1406 16.3026 25.7457 16.5596C23.8414 16.7038 21.9232 16.9266 20.0699 17.322C19.2317 17.5008 18.315 17.4998 17.4657 17.681C16.5505 17.8762 16.1397 19.775 17.3241 19.7955C18.0088 19.8073 18.5904 20.1499 19.2922 20.123C19.9028 20.0995 20.5192 20.0301 21.1285 19.9839C23.4379 19.8091 26.0308 19.8538 28.274 19.344C31.3878 18.6364 34.6164 18.3154 37.8341 18.0718C40.478 17.8716 43.0312 17.3546 45.6709 17.1548C46.935 17.059 48.1992 16.9633 49.4634 16.8676"
        stroke="#ECECEC"
        strokeWidth="7.34408"
        strokeLinecap="round"
      />
      <path
        d="M16.9709 26.4394C25.4545 25.7971 33.9381 25.1547 42.4217 24.5124C44.7785 24.334 47.2131 24.5162 49.5387 23.9603C50.1222 23.8208 50.6689 23.2447 51.2793 23.3646C51.6826 23.4439 51.3641 25.9347 51.2139 26.2325C51.0997 26.4588 51.0964 26.919 50.9942 27.2035C50.8116 27.7122 50.4324 28.087 50.1525 28.1951C48.6888 28.7599 47.037 28.4575 45.5328 28.5713C42.0717 28.8334 38.7394 30.2482 35.3511 31.2377C31.7 32.3038 27.916 32.291 24.1943 32.5728C23.2339 32.6455 22.2646 32.8654 21.2942 32.7791C20.9006 32.7441 20.4622 32.1333 20.0732 31.9305"
        stroke="#E51E1E"
        strokeWidth="7.34408"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default SvgFlagIndonesia