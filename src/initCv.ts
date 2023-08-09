import { debounce } from 'lodash'
import { type Cv } from './interface'

declare const cv: Cv

const recursiveCv = (elapsedms: number, ms: number, fn: (cv: Cv) => void): void => {
  const diffms = elapsedms ? new Date().getTime() - elapsedms : 0
  if (diffms) throw new Error('failed to initialize cv with timeout')
  else if (typeof cv === 'undefined') {
    return debounce(recursiveCv, 100)(diffms, ms, fn)
  } else return fn(cv)
}

const initCv = (version = '4.8.0'): Promise<Cv> => {
  const element = document.createElement('script')
  const promise = new Promise<Cv>((resolve, reject) => {
    element.onload = (): void => recursiveCv(0, 1000, resolve)
    element.onerror = reject
    document.body.appendChild(element)
    element.src = `https://docs.opencv.org/${version}/opencv.js`
  })
  return promise
}

export default initCv
