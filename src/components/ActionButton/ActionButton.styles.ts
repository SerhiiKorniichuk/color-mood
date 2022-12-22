import { CardButtonCommonStyles } from 'common/styles'
import { theme } from 'common/theme'
import styled, { css } from 'styled-components'

interface ActionButtonProps {
  luminance?: number
}

export const ActionButton = styled.button<ActionButtonProps>(
  ({ luminance = 0 }) => css`
    ${CardButtonCommonStyles(luminance)}

    width: 40px;
    height: 40px;

    & svg {
      width: 21px;
      height: 21px;
      fill: transparent;
      stroke: ${luminance > 0.5 ? theme.pallete.black : theme.pallete.white};
    }
  `
)
