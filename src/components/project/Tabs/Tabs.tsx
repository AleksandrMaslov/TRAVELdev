import { FC } from 'react'

import { useStyles } from 'src/hooks'
import { routes } from 'src/router/routes'

import { Tab } from '..'

import classes from './Tabs.module.css'

interface TabsProps {
  className?: string
}

const variants = {
  hidden: { opacity: 0, y: -100 },
  visible: (i: number) => {
    return { opacity: 1, y: 0, transition: { delay: i * 0.2 } }
  },
}

const Tabs: FC<TabsProps> = ({ className }) => {
  const tabsClasses = useStyles(classes.tabs, className)

  return (
    <nav className={tabsClasses}>
      {routes
        .filter(({ navbar }) => navbar)
        .map(({ name, path }, i) => (
          <Tab
            key={path}
            to={path}
            custom={i + 1}
            initial="hidden"
            whileInView="visible"
            variants={variants}
          >
            {name}
          </Tab>
        ))}
    </nav>
  )
}

export default Tabs
