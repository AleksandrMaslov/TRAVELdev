import { FC } from 'react'

import classes from './Skeleton.module.css'

interface SkeletonProps {}

const Skeleton: FC<SkeletonProps> = () => {
  return <span className={classes.skeleton} />
}

export default Skeleton
