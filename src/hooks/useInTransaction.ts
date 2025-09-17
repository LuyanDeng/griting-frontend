import { useState, useCallback } from 'react'

const useInTranscation = <
  T extends (params: any) => void | Promise<any> | null | undefined,
>(
  transcationFunc: T
) => {
  const [inTranscation, setInTranscation] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const execTranscation = useCallback(
    async (params: any) => {
      try {
        setInTranscation(true)
        const res = await transcationFunc(params)
        setInTranscation(false)
        return res
      } catch (err: any) {
        setInTranscation(false)
        setError(err?.message || 'Unknown error')
        throw err
      }
    },
    [transcationFunc]
  ) as T

  return { inTranscation, execTranscation, error }
}

export default useInTranscation
