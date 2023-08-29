import { useEffect, useRef, useState } from 'react'
import initCv from './initCv'
import { type Cv } from './interface'

const useCv = (version = '4.8.0'): [Cv | undefined, boolean, Error | undefined] => {
  const [client, setClient] = useState<Cv>()

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState<Error>()

  const emptyRef = useRef<string>()

  useEffect(() => {
    if (emptyRef.current === version) return
    setLoading(true)
    initCv(version)
      .then(() => setClient(window.cv))
      .catch(setError)
      .finally(() => setLoading(false))
    emptyRef.current = version
  }, [version])

  return [client, loading, error]
}

export default useCv
