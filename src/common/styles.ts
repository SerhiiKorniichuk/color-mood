import styled, { css } from 'styled-components'
import { hexAlpha } from 'utilities/color'
import { PALLETE } from './theme'

export const Logo = styled.span`
  padding: 7px 0;
  display: inline-block;
  font-weight: bold;
  text-transform: uppercase;
`

export const Pannel = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  background: ${PALLETE.WHITE};
`

export const CardButtonCommonStyles = (luminance: number) => css`
  &.chakra-button {
    border-radius: 10px;
    background-color: transparent;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${luminance > 0.5
        ? hexAlpha(PALLETE.BLACK, 0.1)
        : hexAlpha(PALLETE.WHITE, 0.1)};
    }

    &:active {
      background-color: ${luminance > 0.5
        ? hexAlpha(PALLETE.BLACK, 0.15)
        : hexAlpha(PALLETE.WHITE, 0.15)};
    }
  }
`
