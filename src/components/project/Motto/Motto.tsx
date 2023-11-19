import { motion } from 'framer-motion'
import { FC } from 'react'

import { SvgMottoHighlighter } from 'src/assets'

import classes from './Motto.module.css'

const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.3 } },
}

const Motto: FC = () => {
  const { motto, highlight } = classes

  return (
    <motion.section
      className={motto}
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
    >
      <h1>Даем клятву кайфовать всю жизнь!</h1>
      <h1>Любить, удивлять, ворчать и обожать =)</h1>
      <h1>Держать друг друга за руку до старости!</h1>
      <h1>Целовать, поддерживать и обнимать!</h1>

      <SvgMottoHighlighter className={highlight} />
    </motion.section>
  )
}

export default Motto
