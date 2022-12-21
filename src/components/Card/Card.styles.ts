import { StyledIconButton } from 'components/ActionButton/ActionButton.styles'
import styled from 'styled-components'

export const ActionBar = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`

export const PreviewBox = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled('div')`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  ${ActionBar} {
    position: absolute;
    left: 50%;
    bottom: 23%;
    transform: translateX(-50%);
  }

  ${StyledIconButton} {
    &:not(.active) {
      opacity: 0;
      visibility: hidden;
    }
  }

  ${PreviewBox} {
    position: absolute;
    left: 50%;
    bottom: 13%;
    transform: translate(-50%, 50%);
  }

  &:hover {
    ${StyledIconButton} {
      &:not(.hidden) {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`
