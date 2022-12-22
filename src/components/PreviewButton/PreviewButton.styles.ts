import { CardButtonCommonStyles } from 'common/styles'
import { theme } from 'common/theme'
import styled, { css } from 'styled-components'

interface PreviewButtonProps {
  luminance?: number
}

export const PreviewButton = styled.button<PreviewButtonProps>(
  ({ luminance = 0 }) => css`
    ${CardButtonCommonStyles(luminance)}

    padding: 10px;
    height: 50px;
    font-size: 28px;
    color: ${luminance > 0.5 ? theme.pallete.black : theme.pallete.white};
    transition: background-color 0.2s;
  `
)
