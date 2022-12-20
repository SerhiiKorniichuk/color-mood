import { ButtonProps } from '@chakra-ui/react'
import * as S from './PreviewButton.styles'

interface PreviewButtonProps extends ButtonProps {
  luminance?: number
}

export function PreviewButton(props: PreviewButtonProps) {
  return <S.StyledButton {...props} />
}

PreviewButton.defaultProps = {
  luminance: 0,
}
