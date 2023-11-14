import { FC } from 'react'

import { useStyles } from 'src/hooks'
import { routes } from 'src/router/routes'

import { Tab } from '..'

import classes from './Tabs.module.css'

interface TabsProps {
  className?: string
}

const Tabs: FC<TabsProps> = ({ className }) => {
  const tabsClasses = useStyles(classes.tabs, className)

  return (
    <nav className={tabsClasses}>
      {routes
        .filter(({ navbar }) => navbar)
        .map(({ name, path }) => (
          <Tab key={path} to={path}>
            {name}
          </Tab>
        ))}
    </nav>
  )
}

export default Tabs
