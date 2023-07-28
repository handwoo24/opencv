export interface Scalar {
  red: number
  green: number
  blue: number
}

export interface Mat {
  rows: number
  cols: number
  data: Uint8Array
  delete: () => void
  roi: (rect: Rect) => Mat
  copyTo: (dst: Mat) => void
  fill: (value: number) => void
  setTo: (scalar: Scalar) => void
}

export interface MatVector {
  size: () => number
  get: (index: number) => Mat
  delete: () => void
  push_back: (mat: Mat) => void
}

export interface Size {
  width: number
  height: number
}

export interface Rect {
  x: number
  y: number
  width: number
  height: number
}

export interface Cv {
  Scalar: new (red: number, green: number, blue: number) => Scalar
  Mat: new (rows?: number, cols?: number, type?: number) => Mat
  MatVector: new () => MatVector
  Size: new (width: number, height: number) => Size
  Rect: new (x: number, y: number, width: number, height: number) => Rect
  CV_8UC3: 16
  COLOR_RGBA2GRAY: 11
  THRESH_BINARY_INV: 1
  RETR_EXTERNAL: 0
  CHAIN_APPROX_SIMPLE: 2
  MORPH_RECT: 0
  MORPH_DILATE: 1
  BORDER_CONSTANT: 0
  INTER_AREA: number
  cvtColor: (src: Mat, dst: Mat, type: number) => void
  threshold: (src: Mat, dst: Mat, thresh: number, maxval: number, type: number) => void
  findContours: (src: Mat, contours: MatVector, hierarchy: Mat, mode: number, method: number) => void
  imread: (image: HTMLImageElement) => Mat
  imshow: (canvas: HTMLCanvasElement, mat: Mat) => void
  boundingRect: (contour: Mat) => Rect
  vconcat: (src: MatVector, dst: Mat) => void
  getStructuringElement: (shape: number, size: Size) => Mat
  morphologyEx: (binary: Mat, mask: Mat, type: number, kernel: Mat) => void
  copyMakeBorder: (
    src: Mat,
    dst: Mat,
    top: number,
    bottom: number,
    left: number,
    right: number,
    borderType: number,
    borderColor: Scalar,
  ) => void
  resize: (src: Mat, dst: Mat, size: Size, xScale: number, yScale: number, type: number) => void
}
