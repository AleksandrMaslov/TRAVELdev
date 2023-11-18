import { motion } from 'framer-motion'
import React, { FC, ReactElement } from 'react'

interface AnimatedTextProps {
  children: ReactElement | string
}

const variants = {
  hidden: { opacity: 0.3 },
  visible: (i: number) => {
    return { opacity: 1, transition: { delay: i * 0.1, duration: 0.05 } }
  },
}

const separated = (text: string) => (
  <>
    {text.split('').map((char, i) => (
      <motion.span
        custom={i}
        key={char + i}
        variants={variants}
        initial="hidden"
        whileInView="visible"
      >
        {char}
      </motion.span>
    ))}
  </>
)

const AnimatedText: FC<AnimatedTextProps> = ({ children }) => {
  if (typeof children === 'string') return separated(children as string)

  return React.cloneElement(children, {
    children: separated(children.props.children as string),
  })
}

export default AnimatedText
