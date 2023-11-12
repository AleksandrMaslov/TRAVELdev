import { useState } from 'react'
import { useErrorBoundary } from 'react-error-boundary'

import { IObject } from 'src/models'
import { getErrorMessage } from 'src/utils'

type UseRequestType = (
  callback: (params?: IObject) => Promise<void>,
  defaultLoading?: boolean,
) => [(params?: IObject) => Promise<void>, boolean, string]

const useRequest: UseRequestType = (callback, defaultLoading = true) => {
  const { showBoundary } = useErrorBoundary()

  const [isLoading, setLoading] = useState<boolean>(defaultLoading)
  const [error, setError] = useState<string>('')

  const request = async (params?: IObject) => {
    try {
      setLoading(true)
      setError('')
      await callback(params)
    } catch (error) {
      const message = getErrorMessage(error)
      setError(getErrorMessage(error))
      console.error(message)
      showBoundary(error)
    } finally {
      setLoading(false)
    }
  }

  return [request, isLoading, error]
}

export default useRequest
