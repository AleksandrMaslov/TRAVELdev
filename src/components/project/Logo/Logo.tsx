import { motion } from 'framer-motion'
import { FC, ForwardedRef, forwardRef } from 'react'

import { useStyles } from 'src/hooks'

import classes from './Logo.module.css'

interface LogoProps {
  className?: string
}

const Logo: FC<LogoProps> = forwardRef(
  ({ className }, ref: ForwardedRef<SVGSVGElement>) => {
    const { logo } = classes
    const logoClasses = useStyles(logo, className)

    return (
      <svg
        ref={ref}
        width="173"
        height="93"
        viewBox="0 0 173 93"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={logoClasses}
      >
        <path
          d="M23.2591 17.6713C23.0853 18.2811 22.6819 18.5682 22.0487 18.5326L22.7086 22.3295C23.2374 25.4297 23.867 30.7555 24.5974 38.3069C25.2677 46.047 25.7558 50.6104 26.0619 51.9971C26.8031 52.1504 27.1777 52.5402 27.1858 53.1665L27.1077 54.389C27.1145 54.4328 27.1248 54.4984 27.1384 54.586C27.1521 54.6735 27.1323 54.8335 27.0789 55.0659C27.0624 55.2478 26.9954 55.3928 26.8778 55.5008C26.8039 55.602 26.6644 55.7134 26.4593 55.8351C26.2541 55.9567 25.9848 55.954 25.6511 55.8267C25.1862 55.72 24.8389 55.5052 24.6092 55.1825C24.4164 54.8091 24.3112 54.4221 24.2935 54.0214C24.2757 53.6207 24.2177 53.2488 24.1193 52.9055C23.6232 50.8761 23.0284 46.0604 22.3349 38.4584C22.3212 38.3709 22.3041 38.2615 22.2836 38.1302C22.0648 38.1643 21.7332 38.1937 21.2888 38.2182C21.7646 38.6819 21.7994 39.192 21.3932 39.7485L18.8347 43.1736C17.1729 45.4503 15.1369 48.3456 12.7269 51.8597C10.5151 55.2083 9.32235 57.1876 9.14858 57.7975L8.96382 58.7677C8.87352 59.0507 8.70734 59.2784 8.46526 59.4507C8.22319 59.6229 7.94216 59.6892 7.62217 59.6495C7.33912 59.5592 7.11146 59.393 6.93919 59.1509C6.76009 58.8651 6.69381 58.5841 6.74035 58.3079L6.92511 57.3377C7.10848 56.5021 8.41683 54.2583 10.8502 50.6061C13.2534 47.0482 15.3078 44.1276 17.0134 41.8441L19.5719 38.419C19.6088 38.3684 19.6273 38.3431 19.6273 38.3431C18.9572 38.358 17.9083 38.3873 16.4806 38.4308C12.9621 38.5766 10.0918 37.9936 7.86981 36.6818C5.44547 35.2223 4.4518 32.0154 4.8888 27.0611C5.33262 22.1505 7.2531 18.8024 10.6502 17.017C14.0173 15.326 16.8952 14.8095 19.2841 15.4676L22.4327 16.2537C22.7157 16.344 22.9249 16.5355 23.0602 16.8282C23.2393 17.114 23.3056 17.395 23.2591 17.6713ZM19.6632 17.8963L18.6828 17.6459C16.86 17.1684 14.5359 17.6432 11.7104 19.0705C9.00939 20.4335 7.4849 23.1593 7.13693 27.2481C6.77529 31.2493 7.40874 33.728 9.03728 34.6841C10.8682 35.7879 13.3241 36.3011 16.4051 36.2237C19.698 36.0683 21.5196 35.9633 21.8696 35.9086L22.0666 35.8779C21.474 29.7842 20.9475 25.4061 20.4871 22.7435L19.7042 18.1589C19.6906 18.0714 19.6769 17.9839 19.6632 17.8963Z"
          fill="#1C1C1C"
        />
        <path
          d="M29.8634 23.5351C29.6566 23.3779 29.5359 23.1719 29.5012 22.917C29.4665 22.6622 29.5277 22.4314 29.685 22.2246C29.8422 22.0178 30.0507 21.9152 30.3105 21.9169L32.2217 21.6567C33.5009 21.5196 35.3078 21.3107 37.6427 21.0299C40.0139 20.7441 41.9251 20.4839 43.3764 20.2492L45.5606 19.9518C45.8155 19.9171 46.0463 19.9784 46.2531 20.1356C46.4599 20.2929 46.5806 20.4989 46.6153 20.7537C46.6451 20.9722 46.5838 21.203 46.4315 21.4462C46.2743 21.653 46.0682 21.7737 45.8134 21.8084L43.6292 22.1058C43.0831 22.1802 42.4824 22.262 41.8271 22.3512L42.4888 27.2112C42.9134 30.6017 43.4215 33.9253 44.0133 37.1819C44.5785 40.5162 44.7989 42.952 44.6745 44.4892L44.4655 46.6311C44.4638 46.8909 44.3637 47.1085 44.1651 47.2838C43.9665 47.4592 43.7348 47.5278 43.4701 47.4897C43.2103 47.488 42.9927 47.3878 42.8173 47.1892C42.6784 46.9857 42.6098 46.754 42.6115 46.4942L42.813 44.2977C42.9258 42.9475 42.7095 40.678 42.1641 37.4893C41.5674 34.1963 41.0568 30.8545 40.6322 27.464L39.9705 22.604C39.3152 22.6932 38.6235 22.7874 37.8955 22.8865C35.5606 23.1673 33.7536 23.3763 32.4745 23.5133L30.5633 23.7736C30.3035 23.7719 30.0702 23.6924 29.8634 23.5351ZM57.3247 28.0278C58.157 27.8774 59.1168 27.7096 60.204 27.5245C63.3464 26.9112 65.4818 26.5278 66.6104 26.3741C67.3699 26.2336 67.9681 26.1337 68.405 26.0742C68.2578 25.538 67.9146 24.7876 67.3754 23.8228C66.8725 22.853 66.239 22.0123 65.4746 21.3006C64.9221 20.7826 63.8176 20.8403 62.1611 21.4737C60.359 22.1269 58.9679 23.4843 57.9879 25.5459C57.6452 26.297 57.4242 27.1243 57.3247 28.0278ZM57.3665 29.9687C57.4523 31.1436 57.735 32.4029 58.2146 33.7466C59.3507 37.1886 60.832 39.4898 62.6585 40.6501C64.4851 41.8104 65.8219 42.37 66.6692 42.3288L68.2204 42.2844C68.4753 42.2497 68.6904 42.3317 68.8657 42.5303C69.0725 42.6875 69.1751 42.896 69.1734 43.1558C69.2081 43.4106 69.1261 43.6257 68.9275 43.8011C68.7703 44.0079 68.5642 44.1286 68.3094 44.1633L66.7581 44.2077C65.5055 44.267 63.803 43.6089 61.6505 42.2334C59.4566 40.8265 57.7098 38.2092 56.41 34.3816C55.9519 32.9237 55.6544 31.5552 55.5173 30.2761C55.049 30.377 54.6692 30.4472 54.378 30.4869L53.0203 30.7274C52.7654 30.762 52.5164 30.7033 52.2732 30.551C52.0664 30.3937 51.9457 30.1877 51.911 29.9329C51.8763 29.678 51.9375 29.4472 52.0948 29.2404C52.252 29.0336 52.4398 28.9153 52.6583 28.8856L54.0706 28.6377C54.3982 28.5931 54.8508 28.5129 55.4283 28.3972C55.4733 27.0933 55.754 25.8871 56.2705 24.7785C57.4823 22.2405 59.2159 20.5398 61.4714 19.6765C63.8726 18.7934 65.6257 18.8699 66.7308 19.9059C67.6656 20.7798 68.4356 21.8059 69.041 22.9842C69.6778 24.1211 70.0773 25.0122 70.2393 25.6576C70.3765 26.1209 70.3657 26.5859 70.2067 27.0525C70.0428 27.4827 69.6903 27.7531 69.1492 27.8639C68.7488 27.9184 67.9867 28.0407 66.8632 28.2308C65.771 28.3795 63.6538 28.7604 60.5114 29.3737C59.315 29.5737 58.2667 29.772 57.3665 29.9687ZM91.1759 3.34034C91.4092 3.41981 91.5796 3.58201 91.6871 3.82693C91.7897 4.03544 91.7855 4.27702 91.6745 4.55168C91.5951 4.78498 91.4329 4.95538 91.188 5.06288L88.1943 6.36038C86.2714 7.21547 84.341 8.42383 82.403 9.98547C80.5378 11.5372 78.943 13.8493 77.6187 16.9218C76.2893 19.9579 75.9278 23.5667 76.5343 27.7483C77.1308 31.857 78.0461 34.4948 79.2803 35.6616C79.4043 35.756 79.5806 35.8247 79.8089 35.8677C80.0687 35.8694 80.3938 35.8066 80.7844 35.6793C81.1749 35.552 81.6283 35.3419 82.1447 35.0491C82.661 34.7564 83.2717 34.3395 83.9767 33.7986C84.7131 33.2163 85.51 32.533 86.3673 31.7489C90.2152 28.1474 91.7638 25.3595 91.0129 23.3853C90.9567 23.2447 90.903 23.1222 90.8517 23.018C90.4928 22.2882 90.0279 21.8694 89.457 21.7618C88.9226 21.6491 88.0795 21.8566 86.9277 22.3842C84.457 23.5735 82.8267 25.3527 82.037 27.7221C81.1893 30.2106 80.7819 31.7122 80.8149 32.2268L80.8867 33.1625C80.9214 33.4174 80.8419 33.6507 80.6482 33.8624C80.491 34.0692 80.285 34.19 80.0301 34.2247C79.7703 34.223 79.5371 34.1435 79.3302 33.9862C79.1549 33.7876 79.0523 33.5791 79.0226 33.3607L78.9434 32.3704C78.8757 31.6009 79.3054 29.8553 80.2326 27.1335C81.2178 24.2926 83.1674 22.1361 86.0817 20.664C87.4321 19.961 88.6988 19.7329 89.8818 19.9797C91.0649 20.2265 91.9434 20.9597 92.5173 22.1794C92.6149 22.3515 92.6943 22.5261 92.7555 22.7031C93.7974 25.4534 92.0832 28.9313 87.613 33.1366C86.5621 34.1325 85.6005 34.9679 84.7284 35.6429C83.8512 36.2814 82.9957 36.8058 82.1616 37.216C81.3276 37.6262 80.5572 37.8237 79.8507 37.8087C79.1392 37.7573 78.5278 37.4883 78.0166 37.0017C76.4466 35.5469 75.3336 32.5467 74.6776 28.0011C74.0266 23.4919 74.4345 19.543 75.9012 16.1545C77.3729 12.8024 79.1407 10.2628 81.2045 8.5357C83.2732 6.84503 85.3575 5.54155 87.4575 4.62528L90.4512 3.32778C90.6961 3.22028 90.9377 3.22446 91.1759 3.34034ZM111.069 29.1643C109.679 30.3918 108.309 32.0429 106.96 34.1176C105.58 36.2337 104.521 37.9908 103.785 39.3888L102.687 41.5405C102.566 41.7424 102.381 41.8789 102.131 41.95C101.886 42.0575 101.645 42.0533 101.406 41.9374C101.168 41.8215 101.011 41.6204 100.935 41.3342C100.864 41.0843 100.889 40.8584 101.009 40.6566L102.107 38.5049C102.875 37.0654 103.965 35.267 105.377 33.1096C106.757 30.9935 108.091 29.3473 109.377 28.1711C108.561 28.1709 107.61 28.1335 106.525 28.0588C104.354 27.9095 102.417 26.8939 100.715 25.0122C99.0076 23.094 98.3536 21.0139 98.7528 18.7719C99.1835 16.4885 100.674 14.6355 103.224 13.213C105.706 11.8368 107.929 11.2747 109.891 11.5266C111.293 11.7437 112.369 12.0235 113.12 12.3662C113.277 12.1594 113.486 12.0568 113.746 12.0586C114.001 12.0239 114.234 12.1033 114.446 12.297C114.652 12.4542 114.755 12.6627 114.753 12.9225L114.857 13.687L114.919 13.7342C115.09 13.8964 115.192 14.1049 115.227 14.3597C115.262 14.6145 115.201 14.8454 115.043 15.0522C115.012 15.0935 114.978 15.1167 114.942 15.1216L115.34 19.6837C115.7 24.2326 115.816 27.9433 115.688 30.8158L115.481 35.0154C115.479 35.2752 115.379 35.4927 115.181 35.6681C114.982 35.8435 114.753 35.9303 114.493 35.9286C114.233 35.9269 114.016 35.8267 113.84 35.6281C113.665 35.4295 113.596 35.1978 113.634 34.9331L113.787 30.7409C113.925 27.9412 113.819 24.3033 113.469 19.8273L113.035 14.6025L112.725 14.3666C112.26 13.9479 111.234 13.6242 109.645 13.3955C108.093 13.1619 106.248 13.6356 104.11 14.8166C102.081 15.9828 100.921 17.4014 100.629 19.0726C100.338 20.7438 100.847 22.3059 102.157 23.759C103.477 25.2849 104.979 26.1002 106.662 26.2048C108.495 26.3259 109.846 26.3088 110.715 26.1535C111.334 26.0692 111.793 26.1736 112.092 26.4665C112.226 26.6337 112.324 26.8058 112.385 26.9828C112.441 27.1235 112.461 27.2691 112.445 27.4197C112.423 27.5339 112.368 27.6712 112.278 27.8317C112.225 27.9872 112.151 28.127 112.057 28.2511C111.958 28.3388 111.843 28.4471 111.712 28.5762C111.618 28.7003 111.521 28.8061 111.422 28.8938C111.354 28.9401 111.27 29.0071 111.171 29.0948C111.103 29.1411 111.069 29.1643 111.069 29.1643Z"
          fill="#1C1C1C"
        />
        <path
          d="M36.7865 67.2955C36.6028 67.1486 36.4926 66.9465 36.4559 66.6893C36.4191 66.4321 36.4742 66.1933 36.6212 65.9729L36.7314 65.8627C36.6579 63.9522 36.4559 61.6008 36.1252 58.8085L35.4639 53.2975C35.4272 53.0403 35.4823 52.8199 35.6292 52.6362C35.8129 52.4157 36.0334 52.2871 36.2905 52.2504C36.5477 52.2136 36.7682 52.2871 36.9519 52.4708C37.1723 52.6178 37.3009 52.8199 37.3376 53.077L37.999 58.5881C38.2194 60.4986 38.3847 62.207 38.495 63.7133L38.9358 63.1622C40.4789 61.2885 42.0404 59.3045 43.6202 57.2103L46.0451 54.0139C46.1921 53.8302 46.3941 53.72 46.6513 53.6833C46.9085 53.6465 47.1473 53.7016 47.3677 53.8486C47.5882 53.9955 47.6984 54.1976 47.6984 54.4548C47.7351 54.712 47.68 54.9508 47.5331 55.1712L45.1082 58.3125C43.4916 60.4435 41.9302 62.4458 40.4238 64.3196L39.487 65.4769L40.3136 66.3587C41.4526 67.5343 43.3079 69.8673 45.8798 73.3577C48.4516 76.7745 50.2151 78.9422 51.1704 79.8607L52.6583 81.3487C52.842 81.5324 52.9339 81.7528 52.9339 82.01C52.9339 82.2672 52.842 82.4876 52.6583 82.6713C52.4746 82.855 52.2542 82.9469 51.997 82.9469C51.7398 82.9469 51.5194 82.855 51.3357 82.6713L49.8477 81.1834C48.819 80.1914 47.0003 77.9502 44.3918 74.4599C41.8567 71.043 40.0381 68.7651 38.9358 67.6262L38.6603 67.3506V67.4057C38.6603 69.5734 38.6787 71.7227 38.7154 73.8537L38.7705 76.995C38.7705 77.2521 38.6787 77.4726 38.495 77.6563C38.3113 77.84 38.0908 77.9502 37.8336 77.987C37.5765 77.987 37.356 77.8951 37.1723 77.7114C36.9886 77.5277 36.8968 77.3073 36.8968 77.0501L36.8417 73.8537C36.8049 71.7227 36.7865 69.5734 36.7865 67.4057C36.7865 67.369 36.7865 67.3323 36.7865 67.2955ZM72.3685 51.9748C72.5889 51.8279 72.8094 51.7911 73.0298 51.8646C73.287 51.9013 73.4891 52.0299 73.636 52.2504C73.8197 52.4341 73.8749 52.6545 73.8014 52.9117L73.4156 55.1712C73.1217 56.6408 72.6073 59.1759 71.8725 62.7765C71.1744 66.3403 70.311 70.694 69.2823 75.8376C69.2823 75.9111 69.2639 76.0397 69.2272 76.2234L70.109 77.6563C70.2559 77.8767 70.2927 78.1155 70.2192 78.3727C70.1825 78.6299 70.0539 78.832 69.8334 78.9789C69.4293 79.2361 69.0435 79.1994 68.6761 78.8687C68.0148 82.4693 67.5555 85.1513 67.2983 86.9148L66.8575 90.3317C66.8207 90.5889 66.6921 90.7909 66.4717 90.9379C66.2512 91.0849 66.0124 91.14 65.7552 91.1032C65.5348 91.1032 65.3327 90.993 65.149 90.7726C65.0021 90.5521 64.947 90.3133 64.9837 90.0561L65.4246 86.6944C65.7185 84.5635 66.3247 81.2017 67.2432 76.6092L66.9126 76.1132C65.8104 74.3497 64.3591 71.5207 62.5588 67.6262C60.7953 63.8052 59.4359 61.0313 58.4807 59.3045L57.0478 56.7143C56.9376 56.4939 56.9192 56.2551 56.9927 55.9979C57.0662 55.7407 57.2131 55.557 57.4336 55.4468C57.654 55.3366 57.8928 55.3182 58.15 55.3917C58.4072 55.4652 58.5909 55.6121 58.7011 55.8326L60.134 58.4227C61.0892 60.1863 62.467 62.9969 64.2673 66.8546C65.6267 69.8306 66.784 72.1636 67.7392 73.8537C68.6577 69.4081 69.4293 65.5871 70.0539 62.3907C70.7887 58.8269 71.2847 56.2918 71.5418 54.7855L71.9827 52.581C72.0195 52.3239 72.1481 52.1218 72.3685 51.9748ZM95.4533 57.1552C95.4166 57.4124 95.288 57.6145 95.0675 57.7614C94.8838 57.8716 94.6634 57.9084 94.4062 57.8716C94.149 57.8349 93.947 57.7063 93.8 57.4859L93.0285 56.3286C92.9917 56.2551 92.8448 56.1816 92.5876 56.1081C92.3304 55.9979 91.8711 55.906 91.2098 55.8326C90.5852 55.7591 89.8688 55.7407 89.0605 55.7774C86.5989 55.8509 84.4129 56.7878 82.5024 58.5881C80.6286 60.3516 79.7101 62.6295 79.7468 65.4218C79.7836 68.214 80.5735 70.5103 82.1166 72.3106C83.6597 74.0741 85.4783 75.1028 87.5725 75.3968C89.6667 75.6907 91.2098 75.6172 92.2018 75.1763L93.9102 74.3497C94.1674 74.2394 94.4062 74.2211 94.6267 74.2946C94.8838 74.368 95.0675 74.5334 95.1778 74.7905C95.288 75.011 95.288 75.2498 95.1778 75.507C95.1043 75.7274 94.9573 75.8928 94.7369 76.003L93.0285 76.8296C91.7058 77.4542 89.7953 77.6012 87.297 77.2705C84.7619 76.9031 82.5575 75.6539 80.6837 73.523C78.8467 71.3921 77.9098 68.6917 77.8731 65.4218C77.8363 62.1151 78.9569 59.378 81.2348 57.2103C83.476 55.0794 86.0662 53.9772 89.0054 53.9037C90.5117 53.8302 91.7058 53.8853 92.5876 54.069C93.5061 54.2527 94.1674 54.6569 94.5715 55.2815L95.3431 56.4388C95.4901 56.6592 95.5268 56.898 95.4533 57.1552ZM121.882 55.061C119.824 55.7958 117.767 57.7063 115.709 60.7925C114.975 61.9314 114.387 63.052 113.946 64.1542C115.342 64.1175 116.334 64.044 116.922 63.9338L118.189 63.7685C118.447 63.7317 118.685 63.7868 118.906 63.9338C119.126 64.0808 119.255 64.2828 119.292 64.54C119.328 64.7972 119.255 65.036 119.071 65.2564C118.924 65.4769 118.722 65.6055 118.465 65.6422L117.197 65.8075C116.426 65.9178 115.122 65.9912 113.285 66.028C112.807 67.6813 112.678 69.3346 112.899 70.9879C113.266 74.1476 114.919 76.1499 117.859 76.995C120.908 77.84 123.333 77.5461 125.133 76.1132C126.934 74.6803 127.852 72.2738 127.889 68.8937C127.926 65.3299 127.503 62.2988 126.621 59.8005C125.813 57.4859 124.913 56.1449 123.921 55.7774L122.047 55.1161C122.01 55.1161 121.955 55.0978 121.882 55.061ZM125.133 54.2895C126.419 54.9875 127.503 56.6225 128.385 59.1943C129.34 61.8763 129.799 65.1279 129.763 68.9488C129.726 72.9168 128.569 75.8009 126.291 77.6012C123.976 79.4015 121 79.8056 117.363 78.8136C113.615 77.7481 111.503 75.2131 111.025 71.2084C110.805 69.5183 110.915 67.8099 111.356 66.0831C109.151 66.1198 106.892 66.2301 104.577 66.4138L101.766 66.6342C101.766 67.1486 101.766 67.6629 101.766 68.1773C101.84 71.8881 101.877 74.5517 101.877 76.1683V78.5932C101.877 78.8503 101.785 79.0708 101.601 79.2545C101.417 79.4382 101.197 79.53 100.94 79.53C100.683 79.5668 100.462 79.4933 100.278 79.3096C100.095 79.1259 100.003 78.9055 100.003 78.6483V76.1683C100.003 74.5517 99.9662 71.8881 99.8927 68.1773C99.8927 67.6629 99.8927 67.0935 99.8927 66.4689C99.709 66.3219 99.5988 66.1198 99.5621 65.8627C99.5253 65.5687 99.6172 65.3116 99.8376 65.0911C99.8009 62.5193 99.7825 60.0577 99.7825 57.7063L99.7274 52.7464C99.7274 52.4892 99.8192 52.2688 100.003 52.0851C100.187 51.9013 100.407 51.8095 100.664 51.8095C100.921 51.8095 101.142 51.9013 101.326 52.0851C101.509 52.2688 101.601 52.4892 101.601 52.7464L101.656 57.6512C101.656 59.9291 101.675 62.2989 101.711 64.7604L104.412 64.54C107.02 64.3196 109.519 64.191 111.907 64.1542C112.421 62.6846 113.174 61.215 114.166 59.7454C116.738 55.8877 119.402 53.6465 122.157 53.0219L125.905 52.1402C126.162 52.1034 126.401 52.1585 126.621 52.3055C126.842 52.4157 126.97 52.5994 127.007 52.8566C127.081 53.1138 127.044 53.3526 126.897 53.573C126.75 53.7935 126.566 53.9404 126.346 54.0139L125.133 54.2895Z"
          fill="#1C1C1C"
        />
        <path
          d="M146.457 35.2615C146.887 34.347 146.967 33.3052 146.981 32.2906C146.806 32.7456 146.638 33.201 146.477 33.6542C146.27 34.2338 145.575 37.1391 146.457 35.2615Z"
          fill="#1C1C1C"
        />
        <path
          d="M142.421 66.6617C140.241 64.0682 138.576 61.5567 136.844 58.7039C135.766 56.9283 134.769 55.0913 133.529 53.4215C132.176 51.6 130.458 50.1419 129.297 48.1783C128.131 46.2046 127.251 44.2085 126.889 41.9453C126.504 39.5361 126.465 37.0556 126.002 34.6735C125.613 32.6735 125.046 30.7618 125.046 28.7149C125.046 26.477 125.174 24.5172 126.021 22.4035C126.431 21.3809 127.103 19.245 128.244 18.7185C131.165 17.3709 135.298 17.7602 138.287 18.5911C139.196 18.8439 140.012 19.2529 140.861 19.6594C141.693 20.0582 142.608 20.2263 143.396 20.7178C145.016 21.7284 145.653 22.9481 146.291 24.6967C147.079 26.856 146.984 29.111 146.984 31.3806C146.984 32.6625 147.017 34.0701 146.457 35.2615C145.575 37.1391 146.27 34.2338 146.477 33.6542C147.228 31.5493 148.108 29.3984 149.226 27.4604C150.507 25.2397 152.173 22.3743 154.793 21.6096C155.887 21.2904 157.295 21.5018 158.41 21.5018C159.92 21.5018 161.557 21.2758 162.954 21.9428C164.188 22.5321 165.448 22.9817 166.522 23.8735C168.198 25.2653 169.043 27.6888 169.72 29.6753C170.416 31.7137 170.5 33.9239 170.5 36.0553C170.5 37.7782 170.658 39.4703 169.837 41.0437C168.203 44.1771 165.594 46.8969 163.12 49.3838C160.318 52.1994 157.378 55.1717 154.16 57.5082C152.812 58.4863 151.614 60.0436 150.611 61.3696C150.181 61.9377 149.894 62.5929 149.48 63.1728C148.972 63.8824 148.317 64.4659 147.861 65.2113C147.037 66.5576 144.878 68.4759 144.878 70.1899"
          stroke="black"
          strokeWidth="2.06664"
          strokeLinecap="round"
        />
        <path
          d="M127.802 27.7937C128.929 27.1983 130.177 26.7665 131.383 26.3534C133.822 25.5178 136.21 24.5249 138.63 23.6306C138.922 23.5225 139.414 23.3348 139.725 23.3467C140.126 23.3621 138.508 25.2846 138.324 25.4703C136.548 27.2623 134.599 28.8621 132.815 30.6427C132.345 31.1125 131.965 31.3869 131.741 32.0094C131.676 32.1907 131.499 32.6419 131.383 32.7873C131.195 33.0219 131.309 33.658 131.309 33.9648C131.309 34.0578 131.33 34.179 131.304 34.2696C131.296 34.2974 131.188 34.364 131.235 34.3958C131.776 34.7556 133.272 33.8069 133.721 33.5863C134.857 33.0284 135.965 32.4376 137.039 31.7676C137.683 31.3658 138.425 30.7033 139.198 30.5586C140.177 30.3753 141.078 30.3483 142.084 30.3483C142.363 30.3483 142.874 30.2025 142.874 30.5796C142.874 31.7822 142.026 32.7244 141.242 33.5653C139.792 35.1207 138.087 36.4322 136.502 37.844C135.574 38.671 134.509 39.3481 133.637 40.2304C132.883 40.9934 131.736 42.0656 131.52 43.174C131.446 43.5538 132.944 43.4102 133.163 43.4053C134.061 43.3854 134.87 42.7724 135.575 42.2699C136.392 41.6876 137.343 41.2652 138.208 40.7561C138.474 40.5998 139.78 39.7811 139.746 40.4197C139.686 41.5407 138.884 42.7033 138.345 43.6471C137.757 44.6777 137.183 45.6129 136.734 46.7064C136.521 47.2234 136.907 47.5384 137.471 47.5684C138.79 47.6387 140.033 46.6531 141.147 46.0546C143.376 44.8569 145.147 42.9658 146.93 41.2081C148.678 39.4836 149.978 37.5114 151.459 35.5732C152.43 34.3024 153.349 33.004 154.355 31.757C155.277 30.6136 156.485 29.7464 157.736 29.0027C158.223 28.7136 159.673 27.3902 160.433 27.8147C160.719 27.9747 160.601 28.6841 160.601 28.9291C160.601 29.7636 160.651 30.6197 160.475 31.4417C160.168 32.8738 159.328 34.2405 158.574 35.4734C157.585 37.0898 156.402 38.4491 155.061 39.7784C152.945 41.8753 151.045 44.2078 148.752 46.1177C147.413 47.2326 146.056 48.3244 144.718 49.4397C144.248 49.8313 139.904 52.7528 140.968 53.7605C141.513 54.2767 142.679 54.2047 143.369 54.1915C145.572 54.1497 147.629 52.6625 149.289 51.3531C151.376 49.7066 153.056 47.6474 154.692 45.571C156.075 43.816 157.573 42.1637 158.958 40.4092C160.579 38.3556 162.203 36.1584 164.519 34.8373C166.127 33.9207 165.667 39.2155 165.499 39.8415C164.994 41.7276 163.456 43.2055 162.118 44.5407C160.732 45.9241 159.225 47.1284 157.757 48.42C157.128 48.9737 156.562 49.5857 155.883 50.081C155.101 50.651 154.278 51.1621 153.481 51.7105C152.42 52.441 151.466 53.3081 150.532 54.1915C150.08 54.6184 149.738 55.195 149.263 55.5845C148.876 55.9008 148.445 56.0712 148.088 56.4413C147.428 57.1258 146.636 57.6633 146.003 58.3757C145.399 59.0547 144.296 59.9915 144.296 61.0039C144.296 61.3283 144.123 61.4286 143.98 61.7188C143.819 62.0463 143.754 62.2894 143.538 62.6124"
          stroke="#FCFF75"
          strokeWidth="3.4444"
          strokeLinecap="round"
        />
      </svg>
    )
  },
)

Logo.displayName = 'Logo'

export default motion(Logo)
