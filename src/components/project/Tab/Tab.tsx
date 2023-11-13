import { FC, ReactNode } from 'react'
import { Link, useMatch } from 'react-router-dom'

import { SvgTabsHighlighter } from 'src/assets'

import classes from './Tab.module.css'

interface TabProps {
  children: ReactNode | string
  to: string
}

const linkStyle = (isActive: boolean) => {
  return isActive ? { fontWeight: 600, letterSpacing: '-0.007rem' } : undefined
}

const Tab: FC<TabProps> = props => {
  const { tab, highlight } = classes
  const { children, to } = props
  const isActive = useMatch(to)

  return (
    <Link to={to} className={tab}>
      <h5 style={linkStyle(!!isActive)}>{children}</h5>
      {isActive && <SvgTabsHighlighter className={highlight} />}
    </Link>
  )
}

export default Tab
