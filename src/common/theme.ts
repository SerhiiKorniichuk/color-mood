import { hexAlpha } from 'utilities/color'

const pallete = {
  white: '#FFFFFF',
  black: '#000000',
}

const shadows = {
  upperline: `${hexAlpha(pallete.black, 0.08)} 0 1px`,
  underline: `${hexAlpha(pallete.black, 0.08)} 0 -1px`,
}

export const theme = {
  pallete,
  shadows,
}
