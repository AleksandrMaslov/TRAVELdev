import { FC } from 'react'

import SvgFooterHighlighter from 'src/assets/SvgFooterHighlighter'
import SvgMountains from 'src/assets/SvgMountains'
import SvgUnderline from 'src/assets/SvgUnderline'

import classes from './Footer.module.css'

const Footer: FC = () => {
  const { footer, container, wrapper, text, backgroundText } = classes

  return (
    <section className={footer}>
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
    </section>
  )
}

export default Footer
