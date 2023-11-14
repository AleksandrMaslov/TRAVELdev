import { FC } from 'react'

import { SvgMottoHighlighter } from 'src/assets'

import classes from './Motto.module.css'

const Motto: FC = () => {
  const { motto, highlight } = classes

  return (
    <section className={motto}>
      <h1>Даем клятву кайфовать всю жизнь!</h1>
      <h1>Любить, удивлять, ворчать и обожать =)</h1>
      <h1>Держать друг друга за руку до старости!</h1>
      <h1>Целовать, поддерживать и обнимать!</h1>

      <SvgMottoHighlighter className={highlight} />
    </section>
  )
}

export default Motto
