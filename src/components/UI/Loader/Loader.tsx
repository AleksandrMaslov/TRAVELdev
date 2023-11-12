import { FC } from 'react'

import { useStyles } from 'src/hooks'

import classes from './Loader.module.css'

interface LoaderProps {
  className?: string
}

const Loader: FC<LoaderProps> = ({ className }) => {
  const loader = useStyles(classes.loader, className)

  return <div className={loader} />
}

export default Loader
