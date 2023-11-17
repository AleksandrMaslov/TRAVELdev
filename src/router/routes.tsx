import { ReactNode } from 'react'
import { LoaderFunction, Navigate } from 'react-router-dom'

import { tripsLoader } from 'src/components/project'
import { TripsAlbums } from 'src/components/project/TripsAlbums/TripsAlbums'

export const enum RoutesEnum {
  TRIPS = '/',
  TRIP = '/trips/:id',
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
    path: RoutesEnum.TRIPS,
    element: <TripsAlbums />,
    loader: tripsLoader,
  },
  {
    name: 'Свадьба',
    navbar: true,
    path: RoutesEnum.WEDDING,
    element: <p style={{ margin: 10 }}>WEDDING</p>,
  },
  {
    name: 'Разное',
    navbar: true,
    path: RoutesEnum.OTHER,
    element: <p style={{ margin: 10 }}>OTHER</p>,
  },
  {
    name: 'Бруня',
    navbar: true,
    path: RoutesEnum.BRUNYA,
    element: <p style={{ margin: 10 }}>BRUNYA</p>,
  },
  {
    name: RoutesEnum.DEFAULT,
    navbar: false,
    path: RoutesEnum.DEFAULT,
    element: <Navigate to={RoutesEnum.TRIPS} replace />,
  },
]
