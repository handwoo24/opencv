const initCv = (version = '4.8.0'): Promise<Event> => {
  const element = document.createElement('script')
  const promise = new Promise<Event>((resolve, reject) => {
    element.onload = (event): void => {
      setTimeout(() => {
        resolve(event)
      }, 300)
    }
    element.onerror = reject
    document.body.appendChild(element)
    element.src = `https://docs.opencv.org/${version}/opencv.js`
  })
  return promise
}

export default initCv
