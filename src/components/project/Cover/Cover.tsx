import { FC } from 'react'

import bg from 'src/assets/bg.jpg'
import { Image } from 'src/components/UI'

import classes from './Cover.module.css'

const Cover: FC = () => {
  const { cover, img } = classes

  return (
    <section className={cover}>
      <Image src={bg} className={img} />
    </section>
  )
}

export default Cover
