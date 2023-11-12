import { Dispatch, FC, ReactNode, SetStateAction } from 'react'

import { useStyles } from 'src/hooks'

import classes from './Modal.module.css'

interface ModalProps {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  className?: string
  children?: ReactNode
}

const Modal: FC<ModalProps> = props => {
  const { visible, setVisible, className, children } = props

  const modal = useStyles(
    classes.modal,
    visible ? classes.modal_active : classes.modal_hidden,
  )

  const window = useStyles(
    classes.window,
    visible ? classes.window_active : classes.window_hidden,
  )

  const container = useStyles(classes.container, className)

  return (
    <section className={modal} onClick={() => setVisible(false)}>
      <div className={window} onClick={e => e.stopPropagation()}>
        <div className={container}>{children}</div>
      </div>
    </section>
  )
}

export default Modal
