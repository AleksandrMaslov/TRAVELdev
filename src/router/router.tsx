import { createBrowserRouter } from 'react-router-dom'

import { ErrorRouteElement } from 'src/components/errors'
import { HomePage, TripPage, tripLoader } from 'src/pages'

import { RoutesEnum, routes } from './routes'

const router = createBrowserRouter(
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
    basename: '/TRAVEL',
  },
)

export default router
