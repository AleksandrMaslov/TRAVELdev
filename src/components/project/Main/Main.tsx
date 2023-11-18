import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Albums, Cover, Motto, Tabs } from '..'

const Main: FC = () => {
  return (
    <main>
      <Cover />

      <Motto />

      <Albums tabs={<Tabs />} list={<Outlet />} />
    </main>
  )
}

export default Main
