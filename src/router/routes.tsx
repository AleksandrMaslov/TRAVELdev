import { ReactNode } from 'react'
import { LoaderFunction, Navigate } from 'react-router-dom'

export const enum RoutesEnum {
  HOME = '/',
  WEDDING = 'wedding',
  OTHER = 'other',
  BRUNYA = 'brunya',
  DEFAULT = '*',
}

interface IRoute {
  name: string
  navbar: boolean
  path: string
  element: ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loader?: LoaderFunction<any>
}

export const routes: IRoute[] = [
  {
    name: 'Путешествия',
    navbar: true,
    path: RoutesEnum.HOME,
    element: <p>TRIPS</p>,
  },
  {
    name: 'Свадьба',
    navbar: true,
    path: RoutesEnum.WEDDING,
    element: <p>WEDDING</p>,
  },
  {
    name: 'Разное',
    navbar: true,
    path: RoutesEnum.OTHER,
    element: <p>OTHER</p>,
  },
  {
    name: 'Бруня',
    navbar: true,
    path: RoutesEnum.BRUNYA,
    element: <p>BRUNYA</p>,
  },
  {
    name: RoutesEnum.DEFAULT,
    navbar: false,
    path: RoutesEnum.DEFAULT,
    element: <Navigate to={RoutesEnum.HOME} replace />,
  },
]
