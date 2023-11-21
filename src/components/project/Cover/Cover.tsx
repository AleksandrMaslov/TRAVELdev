import { FC } from 'react'

import bg from 'src/assets/bg.jpg'
import bgLQ from 'src/assets/bgLQ.jpg'
import { ImageProgressive } from 'src/components/UI'

import classes from './Cover.module.css'

const Cover: FC = () => {
  const { cover, img } = classes

  return (
    <section className={cover}>
      <ImageProgressive src={bg} srcLQ={bgLQ} className={img} />
    </section>
  )
}

export default Cover
