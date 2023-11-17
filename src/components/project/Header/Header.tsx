import { motion } from 'framer-motion'
import { FC } from 'react'

import { Logo, TempBurger } from 'src/components/project'
import { useStyles } from 'src/hooks'

import classes from './Header.module.css'

interface HeaderProps {
  className?: string
}

const variants = {
  hidden: (x: number) => {
    return { opacity: 0, x }
  },
  visible: { opacity: 1, x: 0 },
}

const Header: FC<HeaderProps> = ({ className }) => {
  const { header, container } = classes
  const headerClasses = useStyles(header, className)

  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      className={headerClasses}
    >
      <div className={container}>
        <Logo custom={-100} variants={variants} />
        <TempBurger custom={100} variants={variants} />
      </div>
    </motion.header>
  )
}

export default Header
