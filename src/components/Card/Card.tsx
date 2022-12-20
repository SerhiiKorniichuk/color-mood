import { Color } from 'utilities/color'
import * as S from './Card.styles'

interface CardProps {
  data: Color
}

export function Card({ data }: CardProps) {
  return (
    <S.Wrapper data={data} style={{ backgroundColor: data.hex }}>
      {data.hex}
    </S.Wrapper>
  )
}
