import { FC, ReactNode } from 'react'

import classes from './Albums.module.css'

interface AlbumsProps {
  tabs?: ReactNode
  list: ReactNode
}

const Albums: FC<AlbumsProps> = ({ tabs, list }) => {
  const { albums } = classes

  return (
    <section className={albums}>
      {tabs && tabs}

      {list}
    </section>
  )
}

export default Albums
