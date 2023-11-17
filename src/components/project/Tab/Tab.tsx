import { MotionProps, motion } from 'framer-motion'
import { FC, ReactNode } from 'react'
import { useMatch } from 'react-router-dom'

import { SvgTabsHighlighter } from 'src/assets'
import { useStyles } from 'src/hooks'

import classes from './Tab.module.css'

interface TabProps extends MotionProps {
  children: ReactNode | string
  to: string
}

const Tab: FC<TabProps> = props => {
  const { tab, text, text_active, highlight } = classes
  const { children, to, ...motionProps } = props
  const path = `/TRAVEL${to}`

  const isActive = useMatch(to)
  const textStyles = useStyles(text, isActive ? text_active : undefined)

  return (
    <motion.a href={path} className={tab} {...motionProps}>
      <h5 className={textStyles}>{children}</h5>
      {isActive && <SvgTabsHighlighter className={highlight} />}
    </motion.a>
  )
}

export default Tab
