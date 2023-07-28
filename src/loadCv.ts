const OPEN_CV_SOURCE = 'https://docs.opencv.org/4.8.0/opencv.js'

const loadCv = (): Promise<Event> => {
  const element = document.createElement('script')
  const promise = new Promise<Event>((resolve, reject) => {
    element.onload = (event): void => {
      setTimeout(() => {
        resolve(event)
      }, 300)
    }
    element.onerror = reject
    document.body.appendChild(element)
    element.src = OPEN_CV_SOURCE
  })
  return promise
}

export default loadCv
