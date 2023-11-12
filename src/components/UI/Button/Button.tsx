import { ButtonHTMLAttributes, FC } from 'react'

import { useStyles } from 'src/hooks'

import classes from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const Button: FC<ButtonProps> = ({ className, ...restProps }) => {
  const button = useStyles(classes.button, className)

  return <button className={button} {...restProps} />
}

export default Button
