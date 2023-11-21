import { FC, ImgHTMLAttributes, useEffect, useState } from 'react'

import { useGoogleDriveImage, useStyles } from 'src/hooks'

import classes from './ImageProgressive.module.css'
import defaultImg from './fallback-img.png'
import defaultImgLQ from './fallback-imgLQ.png'

interface ImageProgressiveProps extends ImgHTMLAttributes<HTMLImageElement> {
  srcLQ?: string
  className?: string
  width?: string
  isSrcGD?: boolean
  isSrcLQGD?: boolean
}

const ImageProgressive: FC<ImageProgressiveProps> = props => {
  const {
    className,
    width = '100%',
    src,
    srcLQ,
    isSrcGD,
    isSrcLQGD,
    ...restProps
  } = props

  const srcGD = useGoogleDriveImage(src)
  const srcLQGD = useGoogleDriveImage(srcLQ)

  const [imgSrc, setImgSrc] = useState<string | undefined>(
    (isSrcLQGD ? srcLQGD : srcLQ) || defaultImgLQ,
  )

  const image = useStyles(
    classes.imageProgressive,
    className,
    imgSrc === srcLQ ? classes.loading : classes.loaded,
  )

  useEffect(() => {
    const img = new Image()
    img.src = (isSrcGD ? srcGD : src) || defaultImg
    img.onload = () => setImgSrc((isSrcGD ? srcGD : src) || defaultImg)
  }, [])

  return <img src={imgSrc} className={image} width={width} {...restProps} />
}

export default ImageProgressive
