import { FC } from 'react'

import { routes } from 'src/router'

import { Tab } from '..'

import classes from './Tabs.module.css'

const Tabs: FC = () => {
  const { tabs } = classes

  return (
    <nav className={tabs}>
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
