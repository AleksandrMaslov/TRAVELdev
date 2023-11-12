import { FC } from 'react'

import SvgFlagBelarus from 'src/assets/SvgFlagBelarus'

import classes from './Trips.module.css'

const Trips: FC = () => {
  const { trips, container, tabs, wrapper, year, yearTrips, trip, flag } =
    classes

  return (
    <section className={trips}>
      <div className={container}>
        <div className={tabs}>
          <h5>Путешествия</h5>
          <h5>Свадьба</h5>
          <h5>Разное</h5>
          <h5>Бруня</h5>
        </div>

        <div className={wrapper}>
          <div className={year}>
            <h1>2018</h1>
            <h5>май</h5>
          </div>

          <div className={yearTrips}>
            <div className={trip}>
              <SvgFlagBelarus className={flag} />
              <h2>Беларусь</h2>
            </div>
            <div className={trip}>
              <SvgFlagBelarus className={flag} />
              <h2>Беларусь</h2>
            </div>
            <div className={trip}>
              <SvgFlagBelarus className={flag} />
              <h2>Беларусь</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trips
