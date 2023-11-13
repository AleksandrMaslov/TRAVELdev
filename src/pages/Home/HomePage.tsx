import { FC } from 'react'

import { SvgFlagBelarus } from 'src/assets'
import { Tabs } from 'src/components/project'

import { Albums, Cover, Footer, Header, Motto } from './blocks'
import classes from './HomePage.module.css'

const HomePage: FC = () => {
  const { homePage, header, container, wrapper, year, yearTrips, trip, flag } =
    classes
  return (
    <div className={homePage}>
      <div className={container}>
        <Header className={header} />
        <Cover />
        <Motto />

        <Albums>
          <Tabs />

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
        </Albums>

        <Footer />
      </div>
    </div>
  )
}

export default HomePage
