import { createBrowserRouter, createHashRouter } from 'react-router-dom'

import { ErrorRouteElement } from 'src/components/errors'
import { HomePage, TripPage, tripLoader } from 'src/pages'

import { RoutesEnum, routes } from './routes'

const isHashRouter = import.meta.env.MODE === 'hash'
const createRouter = isHashRouter ? createHashRouter : createBrowserRouter

const router = createRouter(
  [
    {
      path: RoutesEnum.TRIPS,
      element: <HomePage />,
      errorElement: <ErrorRouteElement />,
      children: routes.map(({ path, element, loader }) => {
        return {
          path,
          element,
          loader,
          errorElement: <ErrorRouteElement />,
        }
      }),
    },
    {
      path: RoutesEnum.TRIP,
      element: <TripPage />,
      errorElement: <ErrorRouteElement />,
      loader: tripLoader,
    },
  ],
  {
    basename: isHashRouter ? undefined : '/TRAVEL',
  },
)

export default router
