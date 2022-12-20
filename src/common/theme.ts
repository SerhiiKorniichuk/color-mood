import { hexAlpha } from 'utilities/color'

export const PALLETE = {
  WHITE: '#FFFFFF',
  BLACK: '#000000',
}

export const SHADOWS = {
  PANNEL_UPPERLINE: `${hexAlpha(PALLETE.BLACK, 0.08)} 0 1px`,
  PANNEL_UNDERLINE: `${hexAlpha(PALLETE.BLACK, 0.08)} 0 -1px`,
}
