import { HexColorPicker } from 'react-colorful'
import * as S from './ColorPicker.styles'

interface ColorPickerProps {
  color: string
  onChange: (newColor: string) => void
}

export function ColorPicker({ color, onChange }: ColorPickerProps) {
  return (
    <S.Wrapper>
      <HexColorPicker color={color} onChange={onChange} />
    </S.Wrapper>
  )
}
