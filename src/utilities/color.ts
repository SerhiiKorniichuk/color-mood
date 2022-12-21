import chroma from 'chroma-js'
import { uid } from './uid'

export interface Color {
  id: string
  hex: string
  locked: boolean
}

export const generateHex = () => {
  return chroma.random().hex().toUpperCase()
}

export const generateColor = (): Color => {
  return {
    id: uid(),
    hex: generateHex(),
    locked: false,
  }
}

export const hexAlpha = (color: string, alpha: number): string => {
  return chroma(color).alpha(alpha).hex()
}
