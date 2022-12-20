import styled, { css } from 'styled-components'
import { Color } from 'utilities/color'

interface WrapperProps {
  data: Color
}

export const Wrapper = styled('div')<WrapperProps>(
  () => css`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  `
)
