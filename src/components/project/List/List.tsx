import { ReactNode } from 'react'

import classes from './List.module.css'

interface ListProps<T> {
  items?: [string, T[]][]
  item: (item: [string, T[]]) => ReactNode
}

function List<T>(props: ListProps<T>) {
  const { items = [], item } = props
  return <div className={classes.list}>{items.map(item)}</div>
}

export default List
