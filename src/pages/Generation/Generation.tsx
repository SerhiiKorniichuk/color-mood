import { CardGroup } from 'components/CardGroup/CardGroup'
import { Header } from 'components/Header/Header'
import { Toolbar } from 'components/Toolbar/Toolbar'
import * as S from './Generation.styles'

export function Generation() {
  return (
    <S.Wrapper>
      <S.TopBar>
        <Header />
      </S.TopBar>
      <S.Body>
        <CardGroup />
      </S.Body>
      <S.BottomBar>
        <Toolbar />
      </S.BottomBar>
    </S.Wrapper>
  )
}
