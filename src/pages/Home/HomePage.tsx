import { FC } from 'react'

import { Footer, Header, Main } from 'src/components/project'

import classes from './HomePage.module.css'

const HomePage: FC = () => {
  return (
    <div className={classes.homePage}>
      <div className={classes.container}>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
