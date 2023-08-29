const initCv = (version = '4.8.0'): Promise<Event> => {
  const src = `https://docs.opencv.org/${version}/opencv.js`
  const element = document.createElement('script')
  const promise = new Promise<Event>((resolve, reject) => {
    window.Module = { onRuntimeInitialized: (): void => resolve(new Event(src)) }
    element.onerror = reject
  })
  element.src = src
  window.document.body.appendChild(element)
  return promise
}

export default initCv
