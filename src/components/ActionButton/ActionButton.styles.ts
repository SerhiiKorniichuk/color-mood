import { IconButton } from '@chakra-ui/react'
import { CardButtonCommonStyles } from 'common/styles'
import { PALLETE } from 'common/theme'
import styled, { css } from 'styled-components'

interface StyledIconButtonProps {
  luminance?: number
}

export const StyledIconButton = styled(IconButton)<StyledIconButtonProps>(
  ({ luminance = 0 }) => css`
    ${CardButtonCommonStyles(luminance)}

    &.chakra-button {
      & svg {
        width: 21px;
        height: 21px;
        fill: transparent;
        stroke: ${luminance > 0.5 ? PALLETE.BLACK : PALLETE.WHITE};
      }
    }
  `
)
