import { FC, ReactNode } from 'react'

import classes from './Albums.module.css'

interface AlbumsProps {
  children: ReactNode | ReactNode[]
}

const Albums: FC<AlbumsProps> = ({ children }) => {
  const { albums, container } = classes

  return (
    <section className={albums}>
      <div className={container}>{children}</div>
    </section>
  )
}

export default Albums
