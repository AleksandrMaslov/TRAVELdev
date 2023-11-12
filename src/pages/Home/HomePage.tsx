import { FC } from 'react'

import classes from './HomePage.module.css'

const HomePage: FC = () => {
  const { homePage } = classes
  return <div className={homePage}>HOME</div>
}

export default HomePage
