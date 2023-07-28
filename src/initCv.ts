import { type Cv } from './interface'

const initCv = (version = '4.8.0'): Promise<Cv> => {
  const element = document.createElement('script')
  const promise = new Promise<Cv>((resolve, reject) => {
    element.onload = (): void => {
      setTimeout(() => {
        resolve(cv)
      }, 300)
    }
    element.onerror = reject
    document.body.appendChild(element)
    element.src = `https://docs.opencv.org/${version}/opencv.js`
  })
  return promise
}

export default initCv
