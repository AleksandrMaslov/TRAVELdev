import { FC } from 'react'

import { SvgFlagBelarus } from 'src/assets'
import { Cover, Footer, Header, Motto, Tabs } from 'src/components/project'

import classes from './HomePage.module.css'

const HomePage: FC = () => {
  const {
    homePage,
    container,
    header,
    albums,
    wrapper,
    year,
    yearTrips,
    trip,
    flag,
  } = classes
  return (
    <div className={homePage}>
      <div className={container}>
        <Header className={header} />
        <Cover />
        <Motto />

        <div className={albums}>
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
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default HomePage
