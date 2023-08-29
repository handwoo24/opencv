export declare global {
  interface Window {
    Module: { onRuntimeInitialized: () => void }
    cv: Cv
  }
}
