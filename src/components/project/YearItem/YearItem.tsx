import { ReactNode } from 'react'

import classes from './YearItem.module.css'

interface YearItemProps<T> {
  title: string
  items: T[]
  item: (item: T) => ReactNode
}

function YearItem<T>(props: YearItemProps<T>) {
  const { title, items = [], item } = props

  return (
    <article className={classes.yearItem}>
      <h1>{title}</h1>

      <div className={classes.trips}>{items.map(item)}</div>
    </article>
  )
}

export default YearItem
