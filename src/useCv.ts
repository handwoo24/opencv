import { useEffect, useRef, useState } from 'react'
import initCv from './initCv'
import { type Cv } from './interface'

declare let cv: Cv

const useCv = (version = '4.8.0'): Cv | undefined => {
  const [client, setClient] = useState<Cv>()
  const emptyRef = useRef<string>()

  useEffect(() => {
    if (emptyRef.current === version) return
    initCv(version).then(() => {
      setClient(cv)
    })
    emptyRef.current = version
  }, [version])

  return client
}

export default useCv
