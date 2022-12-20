import chroma from 'chroma-js'

export interface Color {
  hex: string
  locked: boolean
}

export const generateHex = () => {
  return chroma.random().hex().toUpperCase()
}

export const generateColor = (): Color => {
  return {
    hex: generateHex(),
    locked: false,
  }
}

export const hexAlpha = (color: string, alpha: number): string => {
  return chroma(color).alpha(alpha).hex()
}
