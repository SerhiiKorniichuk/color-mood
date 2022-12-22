import * as CS from 'common/styles'
import { theme } from 'common/theme'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`

export const TopBar = styled(CS.Pannel)`
  z-index: 1000;
  position: relative;
  width: 100%;
  box-shadow: ${theme.shadows.upperline};
`

export const Body = styled.div`
  display: flex;
`

export const BottomBar = styled(CS.Pannel)`
  z-index: 1000;
  position: relative;
  width: 100%;
  box-shadow: ${theme.shadows.underline};
`
