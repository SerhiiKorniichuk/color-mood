import { CardButtonActiveStyles, CardButtonCommonStyles } from 'common/styles'
import { theme } from 'common/theme'
import styled, { css } from 'styled-components'

interface PreviewButtonProps {
  luminance?: number
  active?: boolean
}

export const PreviewButton = styled.button<PreviewButtonProps>(
  ({ luminance = 0, active = false }) => css`
    ${CardButtonCommonStyles(luminance)}

    padding: 10px;
    height: 50px;
    min-width: 150px;
    font-size: 28px;
    color: ${luminance > 0.5 ? theme.pallete.black : theme.pallete.white};
    transition: background-color 0.2s;

    ${active && CardButtonActiveStyles(luminance)}

    &:hover {
      ${active && CardButtonActiveStyles(luminance)}
    }
  `
)
