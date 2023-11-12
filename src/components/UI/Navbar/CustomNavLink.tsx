import { FC, MouseEventHandler, ReactNode } from 'react'
import { Link, useMatch } from 'react-router-dom'

import { useStyles } from 'src/hooks'
import { RoutesEnum } from 'src/router'

import classes from './Navbar.module.css'

interface CustomNavLinkProps {
  children: ReactNode
  to: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
  disabled?: boolean
  progress?: boolean
}

const CustomNavLink: FC<CustomNavLinkProps> = ({
  children,
  to,
  disabled,
  progress,
  ...restProps
}) => {
  const isActive = useMatch(
    to.includes(RoutesEnum.HOME) ? to : `${RoutesEnum.HOME}${to}`,
  )

  const navLink = useStyles(
    classes.item,
    isActive ? classes.item_active : '',
    disabled ? classes.item_disabled : '',
    progress ? classes.item_progress : '',
  )

  return (
    <Link to={to} className={navLink} {...restProps}>
      {children}
    </Link>
  )
}

export default CustomNavLink
