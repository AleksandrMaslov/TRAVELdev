import { ReactNode } from 'react'
import { LoaderFunction, Navigate } from 'react-router-dom'

import { HomePage } from 'src/pages'

export const enum RoutesEnum {
  HOME = '/',
  DEFAULT = '*',
}

interface IRoute {
  name: string
  navbar: boolean
  routing: boolean
  path: string
  element: ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loader?: LoaderFunction<any>
}

export const routes: IRoute[] = [
  {
    name: 'Home',
    navbar: true,
    routing: true,
    path: RoutesEnum.HOME,
    element: <HomePage />,
  },
  {
    name: '*',
    navbar: false,
    routing: true,
    path: RoutesEnum.DEFAULT,
    element: <Navigate to={RoutesEnum.HOME} replace />,
  },
]
