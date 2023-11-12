import React, {
  CSSProperties,
  FC,
  ImgHTMLAttributes,
  ReactElement,
  ReactEventHandler,
  useState,
} from 'react'

import { useStyles } from 'src/hooks'

import { Skeleton } from '..'

import classes from './Image.module.css'
import defaultImg from './fallback-img.png'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  icon?: ReactElement
  skeleton?: boolean
  style?: CSSProperties
}

const Image: FC<ImageProps> = props => {
  const {
    src = defaultImg,
    className,
    icon,
    skeleton,
    style,
    ...restProps
  } = props

  const imageClasses = useStyles(classes.image, className)

  const [isLoading, setLoading] = useState<boolean>(true)

  const extendedIcon =
    icon && React.cloneElement(icon, { className: classes.icon })

  const errorHandler: ReactEventHandler<HTMLImageElement> = e => {
    const img = e.target as HTMLImageElement
    img.src = defaultImg
  }

  return (
    <div className={imageClasses} style={style}>
      {skeleton && isLoading && <Skeleton />}

      <img
        src={src || defaultImg}
        className={classes.img}
        onLoad={() => setLoading(false)}
        onError={errorHandler}
        {...restProps}
      />

      {extendedIcon}
    </div>
  )
}

export default Image
