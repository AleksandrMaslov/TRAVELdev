import React, { FC, ReactElement } from 'react'

import { useStyles, useToggle } from 'src/hooks'

import classes from './Burger.module.css'

interface BurgerProps {
  children: ReactElement
  className?: string
}

const Burger: FC<BurgerProps> = ({ children, className }) => {
  const burger = useStyles(classes.burger, className)

  const [opened, toggleOpened] = useToggle(false)

  const extendedChildren = React.cloneElement(children, {
    opened,
    toggleOpened,
  })

  const item = useStyles(classes.item, opened ? classes.item_opened : '')

  return (
    <>
      {extendedChildren}

      <div className={burger} onClick={toggleOpened}>
        <span className={item}></span>
      </div>
    </>
  )
}

export default Burger
