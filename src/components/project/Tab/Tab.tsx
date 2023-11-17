import { FC, ReactNode } from 'react'
import { Link, useMatch } from 'react-router-dom'

import { SvgTabsHighlighter } from 'src/assets'
import { useStyles } from 'src/hooks'

import classes from './Tab.module.css'

interface TabProps {
  children: ReactNode | string
  to: string
}

const Tab: FC<TabProps> = props => {
  const { tab, text, text_active, highlight } = classes
  const { children, to } = props

  const isActive = useMatch(to)
  const textStyles = useStyles(text, isActive ? text_active : undefined)

  return (
    <Link to={to} className={tab}>
      <h5 className={textStyles}>{children}</h5>
      {isActive && <SvgTabsHighlighter className={highlight} />}
    </Link>
  )
}

export default Tab
