import * as CS from 'common/styles'
import { SHADOWS } from 'common/theme'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
`

export const TopBar = styled(CS.Pannel)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: ${SHADOWS.PANNEL_UPPERLINE};
`

export const Body = styled.div`
  display: flex;
`

export const BottomBar = styled(CS.Pannel)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  box-shadow: ${SHADOWS.PANNEL_UNDERLINE};
`
