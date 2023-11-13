import { createBrowserRouter } from 'react-router-dom'

import { ErrorRouteElement } from 'src/components/errors'
import { HomePage } from 'src/pages'

import { RoutesEnum, routes } from './routes'

const router = createBrowserRouter(
  [
    {
      path: RoutesEnum.HOME,
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
  ],
  {
    basename: '/TRAVEL',
  },
)

export default router
