import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

import classes from './YearItem.module.css'

interface YearItemProps<T> {
  title: string
  items: T[]
  item: (item: T) => ReactNode
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

function YearItem<T>(props: YearItemProps<T>) {
  const { title, items = [], item } = props

  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'start end'],
  })

  const position = useTransform(scrollYProgress, pos => {
    return pos > 0 ? 'absolute' : 'fixed'
  })

  return (
    <motion.article
      className={classes.yearItem}
      ref={targetRef}
      initial="hidden"
      whileInView="visible"
    >
      <motion.h1
        key={title}
        className={classes.title}
        style={{ position }}
        variants={variants}
      >
        {title}
      </motion.h1>

      <div className={classes.trips}>{items.map(item)}</div>
    </motion.article>
  )
}

export default YearItem
