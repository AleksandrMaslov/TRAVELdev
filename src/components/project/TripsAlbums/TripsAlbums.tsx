import { AnimatePresence, motion } from 'framer-motion'
import { FC, Suspense } from 'react'
import { Await, LoaderFunction, defer, useLoaderData } from 'react-router-dom'

import { ITrip } from 'src/models'
import { AlbumsService } from 'src/services'

import { List, TripItem, YearItem } from '..'

import classes from './TripsAlbums.module.css'

const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: (i: number) => {
    return { opacity: 1, x: 0, transition: { delay: i * 0.1 } }
  },
}

const TripsAlbums: FC = () => {
  const { data } = useLoaderData() as { data: [string, ITrip[]][] }

  return (
    <Suspense
      fallback={
        <motion.h2
          className={classes.loader}
          initial="hidden"
          whileInView="visible"
          variants={variants}
          custom={1}
        >
          Вспоминаем наши путешествия...
        </motion.h2>
      }
    >
      <Await resolve={data}>
        {resolvedData => (
          <AnimatePresence mode="wait">
            <List
              items={resolvedData}
              item={([year, trips]: [string, ITrip[]]) => (
                <YearItem
                  key={year}
                  title={year}
                  items={trips}
                  item={(trip: ITrip) => (
                    <TripItem
                      key={trip.id}
                      trip={trip}
                      initial="hidden"
                      whileInView="visible"
                      variants={variants}
                      custom={1}
                      viewport={{ once: true }}
                    />
                  )}
                />
              )}
            />
          </AnimatePresence>
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
