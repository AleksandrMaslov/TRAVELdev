import { FC } from 'react'

import classes from './Footer.module.css'
import SvgHighlighter from './SvgHighlighter'
import SvgMountains from './SvgMountains'
import SvgUnderline from './SvgUnderline'

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

          <SvgHighlighter />
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
