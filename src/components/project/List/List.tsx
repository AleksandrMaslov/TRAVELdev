import { MotionProps, motion } from 'framer-motion'
import { ReactNode } from 'react'

import classes from './List.module.css'

interface ListProps<T> extends MotionProps {
  items?: [string, T[]][]
  item: (item: [string, T[]]) => ReactNode
}

function List<T>(props: ListProps<T>) {
  const { items = [], item, ...motionProps } = props
  return (
    <motion.div className={classes.list} {...motionProps}>
      {items.map(item)}
    </motion.div>
  )
}

export default List
