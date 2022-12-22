import styled, { css } from 'styled-components'
import { hexAlpha } from 'utilities/color'
import { theme } from './theme'

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
  background: ${theme.pallete.white};
`

export const ButtonCommonStyles = css`
  position: relative;
  padding: 0 10px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  text-transform: uppercase;
  border: 0;
  border-radius: 10px;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;

  &:not(:disabled) {
    cursor: pointer;
  }
`

export const CardButtonCommonStyles = (luminance: number) => css`
  ${ButtonCommonStyles}

  background-color: transparent;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${luminance > 0.5
      ? hexAlpha(theme.pallete.black, 0.1)
      : hexAlpha(theme.pallete.white, 0.1)};
  }

  &:active {
    background-color: ${luminance > 0.5
      ? hexAlpha(theme.pallete.black, 0.15)
      : hexAlpha(theme.pallete.white, 0.15)};
  }
`
