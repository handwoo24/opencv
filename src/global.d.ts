import type { Cv } from './utils'

declare global {
  const cv: Cv | undefined
}

global.cv = undefined
