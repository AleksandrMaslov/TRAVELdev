import { motion } from 'framer-motion'
import { FC } from 'react'

import { SvgFooterHighlighter, SvgMountains, SvgUnderline } from 'src/assets'

import classes from './Footer.module.css'

const variantsCenter = {
  hidden: { opacity: 0, x: '-50%', y: '-20%' },
  visible: (i: number) => {
    return { opacity: 1, x: '-50%', y: '-50%', transition: { delay: i * 0.2 } }
  },
}

const variantsBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: (i: number) => {
    return { opacity: 1, y: 0, transition: { delay: i * 0.2 } }
  },
}

const variantsImg = {
  hidden: { opacity: 0, x: 200 },
  visible: (i: number) => {
    return { opacity: 1, x: 0, transition: { delay: i * 0.2 } }
  },
}

const Footer: FC = () => {
  const { footer, container, wrapper, text, backgroundText } = classes

  return (
    <footer className={footer}>
      <div className={container}>
        <div className={wrapper}>
          <motion.h1
            className={text}
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={variantsCenter}
          >
            <pre>Все о чем мы</pre>
            <pre>можем мечтать</pre>
            <pre>- реально</pre>
          </motion.h1>

          <SvgFooterHighlighter />
        </div>

        <SvgMountains
          initial="hidden"
          whileInView="visible"
          custom={2}
          variants={variantsImg}
        />
      </div>

      <motion.h1
        className={backgroundText}
        initial="hidden"
        whileInView="visible"
        custom={0.5}
        variants={variantsBottom}
      >
        мурр мурр мурр мурр мурр мурр мурр мурр
      </motion.h1>

      <SvgUnderline />
    </footer>
  )
}

export default Footer
