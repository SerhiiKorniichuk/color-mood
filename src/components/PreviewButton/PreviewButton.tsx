import { ButtonHTMLAttributes, forwardRef } from 'react'
import * as S from './PreviewButton.styles'

interface PreviewButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  luminance?: number
}

export const PreviewButton = forwardRef<HTMLButtonElement, PreviewButtonProps>(
  (props, ref) => {
    return <S.PreviewButton {...props} ref={ref} />
  }
)

PreviewButton.defaultProps = {
  luminance: 0,
}
