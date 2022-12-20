import { IconButtonProps } from '@chakra-ui/react'
import * as S from './ActionButton.styles'

interface ActionButton extends IconButtonProps {
  luminance?: number
}

export function ActionButton({ luminance, ...props }: ActionButton) {
  return <S.StyledIconButton luminance={luminance} {...props} />
}

ActionButton.defaultProps = {
  luminance: 1,
}
