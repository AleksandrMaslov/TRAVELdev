import { FC } from 'react'

import { useAuth } from 'src/hooks'
import { routes, RoutesEnum } from 'src/router'

import { LoaderLock, UserProfile } from '..'

import CustomNavLink from './CustomNavLink'
import classes from './Navbar.module.css'

interface NavbarProps {
  opened?: boolean
  toggleOpened?: () => void
}

const Navbar: FC<NavbarProps> = ({ opened, toggleOpened }) => {
  const auth = useAuth()

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
      {auth?.isLoading && <LoaderLock className={classes.loader} />}

      {routes
        .filter(({ navbar }) => navbar)
        .map(({ name, path }) => (
          <CustomNavLink
            key={path}
            to={path}
            onClick={toggleOpened}
            progress={auth?.isLoading}
          >
            {name}
          </CustomNavLink>
        ))}

      {auth?.user ? (
        <UserProfile />
      ) : (
        <CustomNavLink
          to={RoutesEnum.LOGIN}
          onClick={toggleOpened}
          progress={auth?.isLoading}
        >
          Login
        </CustomNavLink>
      )}
    </nav>
  )
}
export default Navbar
