import { ReactNode } from 'react'
import { LoaderFunction, Navigate } from 'react-router-dom'

import { List, TripItem, YearItem } from 'src/components/project'
import { ITrip } from 'src/models'

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
const data = {
  '2018': [
    {
      id: '001',
      year: '2018',
      month: '01',
      place: 'Сочи',
      country: 'russia',
      description: '',
    },
    {
      id: '002',
      year: '2018',
      month: '03',
      place: 'Бали',
      country: 'indonesia',
      description: '+мамы',
    },
  ],
  '2019': [
    {
      id: '003',
      year: '2019',
      month: '03',
      place: 'Алания',
      country: 'turkey',
      description: 'на машине',
    },
  ],
}
export const routes: IRoute[] = [
  {
    name: 'Путешествия',
    navbar: true,
    path: RoutesEnum.HOME,
    element: (
      <List
        items={Object.entries(data)}
        item={([year, trips]: [string, ITrip[]]) => (
          <YearItem
            key={year}
            title={year}
            items={trips}
            item={(trip: ITrip) => <TripItem key={trip.id} trip={trip} />}
          />
        )}
      />
    ),
  },
  {
    name: 'Свадьба',
    navbar: true,
    path: RoutesEnum.WEDDING,
    element: <p style={{ margin: 100 }}>WEDDING</p>,
  },
  {
    name: 'Разное',
    navbar: true,
    path: RoutesEnum.OTHER,
    element: <p style={{ margin: 100 }}>OTHER</p>,
  },
  {
    name: 'Бруня',
    navbar: true,
    path: RoutesEnum.BRUNYA,
    element: <p style={{ margin: 100 }}>BRUNYA</p>,
  },
  {
    name: RoutesEnum.DEFAULT,
    navbar: false,
    path: RoutesEnum.DEFAULT,
    element: <Navigate to={RoutesEnum.HOME} replace />,
  },
]
