import { FC, Suspense } from 'react'
import { Await, LoaderFunction, defer, useLoaderData } from 'react-router-dom'

import { ITrip } from 'src/models'
import { AlbumsService } from 'src/services'

import { List, TripItem, YearItem } from '..'

const TripsAlbums: FC = () => {
  const { data } = useLoaderData() as { data: [string, ITrip[]][] }

  return (
    <Suspense fallback={<h2>Вспоминаем наши путешествия...</h2>}>
      <Await resolve={data}>
        {resolvedData => (
          <List
            items={resolvedData}
            item={([year, trips]: [string, ITrip[]]) => (
              <YearItem
                key={year}
                title={year}
                items={trips}
                item={(trip: ITrip) => <TripItem key={trip.id} trip={trip} />}
              />
            )}
          />
        )}
      </Await>
    </Suspense>
  )
}

const getTrips = async () => {
  const dbresponse = await AlbumsService.getAllTrips()
  if (!dbresponse) throw new Error('Мозг не отвечает.')
  const { result, data } = dbresponse
  if (!result || result !== 'success')
    throw new Error('Какие-то проблемы с памятью.')

  const trips = data.reduce(
    (acc, trip) => {
      const { year } = trip
      if (!acc[year]) acc[year] = []
      acc[year].push(trip)
      return acc
    },
    {} as { [key: string]: ITrip[] },
  )

  return Object.entries(trips)
}

const tripsLoader: LoaderFunction<[string, ITrip[]][]> = async () =>
  defer({ data: getTrips() })

export { TripsAlbums, tripsLoader }
