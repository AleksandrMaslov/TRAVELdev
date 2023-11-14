import { FC } from 'react'

import { SvgFooterHighlighter, SvgMountains, SvgUnderline } from 'src/assets'

import classes from './Footer.module.css'

const Footer: FC = () => {
  const { footer, container, wrapper, text, backgroundText } = classes

  return (
    <footer className={footer}>
      <div className={container}>
        <div className={wrapper}>
          <h1 className={text}>
            <pre>Все о чем мы</pre>
            <pre>можем мечтать</pre>
            <pre>- реально</pre>
          </h1>

          <SvgFooterHighlighter />
        </div>

        <SvgMountains />
      </div>

      <h1 className={backgroundText}>
        мурр мурр мурр мурр мурр мурр мурр мурр
      </h1>
      <SvgUnderline />
    </footer>
  )
}

export default Footer
