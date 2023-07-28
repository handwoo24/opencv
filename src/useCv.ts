import { useEffect, useState } from 'react'
import { type Cv } from './interface'
import initCv from './initCv'

const useCv = (version = '4.8.0'): Cv | undefined => {
  const [cv, setCv] = useState<Cv>()

  useEffect(() => {
    if (!cv) initCv(version).then(setCv)
  }, [cv, version])

  return cv
}

export default useCv
