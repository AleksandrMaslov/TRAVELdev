import { FC } from 'react'

import classes from './Cover.module.css'

const Cover: FC = () => {
  const { cover } = classes

  return <section className={cover}></section>
}

export default Cover
