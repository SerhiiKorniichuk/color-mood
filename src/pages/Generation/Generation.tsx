import { CardGroup } from 'components/CardGroup/CardGroup'
import { Toolbar } from 'components/Toolbar/Toolbar'
import * as S from './Generation.styles'

function Generation() {
  return (
    <S.Wrapper>
      <S.Body>
        <CardGroup />
      </S.Body>
      <S.Footer>
        <Toolbar />
      </S.Footer>
    </S.Wrapper>
  )
}

export { Generation }
