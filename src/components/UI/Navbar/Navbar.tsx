import { FC } from 'react'

import { routes } from 'src/router'

import CustomNavLink from './CustomNavLink'
import classes from './Navbar.module.css'

interface NavbarProps {
  opened?: boolean
  toggleOpened?: () => void
}

const Navbar: FC<NavbarProps> = ({ opened, toggleOpened }) => {
  return (
    <nav
      className={classes.navbar}
      style={
        opened
          ? {
              opacity: 1,
              pointerEvents: 'all',
            }
          : undefined
      }
    >
      {routes
        .filter(({ navbar }) => navbar)
        .map(({ name, path }) => (
          <CustomNavLink key={path} to={path} onClick={toggleOpened}>
            {name}
          </CustomNavLink>
        ))}
    </nav>
  )
}
export default Navbar
