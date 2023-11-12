import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import { ErrorRouteElement } from 'src/components/errors'

import { routes } from './routes'

const router = createBrowserRouter(
  createRoutesFromElements(
    routes
      .filter(({ routing }) => routing)
      .map(({ path, ...props }) => (
        <Route
          key={path}
          path={path}
          {...props}
          errorElement={<ErrorRouteElement />}
        />
      )),
  ),
  {
    basename: '/TRAVEL',
  },
)

export default router
