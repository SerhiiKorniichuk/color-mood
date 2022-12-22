import { ButtonCommonStyles } from 'common/styles'
import { theme } from 'common/theme'
import styled from 'styled-components'
import { hexAlpha } from 'utilities/color'

export const Button = styled.button`
  ${ButtonCommonStyles}

  background-color: ${hexAlpha(theme.pallete.black, 0.05)};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${hexAlpha(theme.pallete.black, 0.1)};
  }

  &:active {
    background-color: ${hexAlpha(theme.pallete.black, 0.15)};
  }
`
