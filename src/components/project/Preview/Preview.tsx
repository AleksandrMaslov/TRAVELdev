import { motion } from 'framer-motion'
import { FC } from 'react'

import { SvgMountains } from 'src/assets'
import { useStyles } from 'src/hooks'

import classes from './Preview.module.css'

interface PreviewProps {
  className?: string
}

const variants = {
  visible: () => {
    return {
      scale: 1,
      opacity: 1,
      rotateX: (Math.random() - 0.5) * 30,
      rotateY: (Math.random() - 0.5) * 20,
      rotateZ: (Math.random() - 0.5) * 20,
      y: '-50%',
      x: '-50%',
    }
  },
  hidden: { scale: 0.5, opacity: 0, rotateX: 0, rotateY: 0, rotateZ: 0 },
}

const Preview: FC<PreviewProps> = ({ className }) => {
  const previewClasses = useStyles(classes.preview, className)

  return (
    <motion.div
      className={previewClasses}
      variants={variants}
      animate="visible"
      exit="hidden"
      initial="hidden"
      transition={{ duration: 0.4 }}
    >
      <SvgMountains className={classes.img} />
    </motion.div>
  )
}

export default Preview
