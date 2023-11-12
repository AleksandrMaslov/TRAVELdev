import { useRouteError } from 'react-router-dom'

import { getErrorMessage } from 'src/utils'

export function ErrorRouteElement() {
  const error = useRouteError()

  return <p>Error: {getErrorMessage(error)}</p>
}
