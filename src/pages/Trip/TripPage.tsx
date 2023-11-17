import { FC, Suspense } from 'react'
import { Await, LoaderFunction, defer, useLoaderData } from 'react-router-dom'

import { AlbumsService } from 'src/services'

import classes from './TripPage.module.css'

const TripPage: FC = () => {
  const { id, trip } = useLoaderData() as { id: string; trip: string }

  return (
    <div className={classes.tripPage}>
      <Suspense fallback={<h2>Как это было...</h2>}>
        <Await resolve={trip}>
          {resolvedTrip => (
            <>
              <h2>TripPage</h2>
              <h2>{id}</h2>
              <h2>{String(resolvedTrip)}</h2>
            </>
          )}
        </Await>
      </Suspense>
    </div>
  )
}

const getTrip = async (id: string) => {
  const dbresponse = await AlbumsService.getTripById(id)
  if (!dbresponse) throw new Error('Мозг не отвечает.')
  const { result, data } = dbresponse
  if (!result || result !== 'success')
    throw new Error('Такого путешествия не было или это проблема с памятью.')
  return data
}

const tripLoader: LoaderFunction<string> = async ({ params }) => {
  const { id } = params as { id: string }
  return defer({ id, trip: getTrip(id) })
}

export { TripPage, tripLoader }
