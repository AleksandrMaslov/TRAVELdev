import { useRouteError } from 'react-router-dom'

import { getErrorMessage } from 'src/utils'

import classes from './ErrorRouteElement.module.css'

export function ErrorRouteElement() {
  const { errorRouteElement } = classes
  const error = useRouteError()
  return (
    <div className={errorRouteElement}>
      <p>Error: {getErrorMessage(error)}</p>
    </div>
  )
}
