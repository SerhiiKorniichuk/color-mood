import { CardGroup } from 'components/CardGroup/CardGroup'
import { Header } from 'components/Header/Header'
import { Toolbar } from 'components/Toolbar/Toolbar'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import {
  createInitialColorList,
  selectColors,
} from 'store/slices/generation/slice'
import * as S from './Generation.styles'

export function Generation() {
  const dispatch = useAppDispatch()

  const colors = useAppSelector(selectColors)

  useEffect(() => {
    dispatch(createInitialColorList(5))
  }, [dispatch])

  return (
    <S.Wrapper>
      <S.TopBar>
        <Header />
      </S.TopBar>
      <S.Body>
        <CardGroup colors={colors} />
      </S.Body>
      <S.BottomBar>
        <Toolbar colors={colors} />
      </S.BottomBar>
    </S.Wrapper>
  )
}
