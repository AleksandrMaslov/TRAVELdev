import { FC } from 'react'

import classes from './HomePage.module.css'
import Cover from './blocks/Cover/Cover'
import Footer from './blocks/Footer/Footer'
import Motto from './blocks/Motto/Motto'
import Trips from './blocks/Trips/Trips'

const HomePage: FC = () => {
  const { homePage, container } = classes
  return (
    <div className={homePage}>
      <div className={container}>
        <Cover />
        <Motto />
        <Trips />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
