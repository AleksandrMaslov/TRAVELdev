import { FC } from 'react'

import { Logo, TempBurger } from 'src/components/project'
import { useStyles } from 'src/hooks'

import classes from './Header.module.css'

interface HeaderProps {
  className?: string
}

const Header: FC<HeaderProps> = ({ className }) => {
  const { header, container } = classes
  const headerClasses = useStyles(header, className)

  return (
    <header className={headerClasses}>
      <div className={container}>
        <Logo />
        <TempBurger />
      </div>
    </header>
  )
}

export default Header
