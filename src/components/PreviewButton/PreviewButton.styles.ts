import { Button } from '@chakra-ui/react'
import { CardButtonCommonStyles } from 'common/styles'
import { PALLETE } from 'common/theme'
import styled, { css } from 'styled-components'

interface StyledButtonProps {
  luminance?: number
}

export const StyledButton = styled(Button)<StyledButtonProps>(
  ({ luminance = 0 }) => css`
    ${CardButtonCommonStyles(luminance)}

    &.chakra-button {
      padding: 10px;
      height: 50px;
      font-size: 28px;
      color: ${luminance > 0.5 ? PALLETE.BLACK : PALLETE.WHITE};
      transition: background-color 0.2s;
    }
  `
)
