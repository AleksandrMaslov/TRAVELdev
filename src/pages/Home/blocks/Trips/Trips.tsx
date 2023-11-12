import { FC } from 'react'

import classes from './Trips.module.css'

const Trips: FC = () => {
  const { trips } = classes

  return <section className={trips}>Trips</section>
}

export default Trips
