import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import {
  Albums,
  Cover,
  Footer,
  Header,
  Motto,
  Tabs,
} from 'src/components/project'

import classes from './HomePage.module.css'

const HomePage: FC = () => {
  return (
    <div className={classes.homePage}>
      <div className={classes.container}>
        <Header />

        <main>
          <Cover />
          <Motto />

          <Albums tabs={<Tabs />} list={<Outlet />} />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default HomePage
