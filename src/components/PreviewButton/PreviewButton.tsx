import { ButtonHTMLAttributes, forwardRef } from 'react'
import * as S from './PreviewButton.styles'

interface PreviewButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  luminance?: number
  active?: boolean
}

export const PreviewButton = forwardRef<HTMLButtonElement, PreviewButtonProps>(
  ({ luminance, active, ...props }, ref) => {
    return (
      <S.PreviewButton
        {...props}
        ref={ref}
        luminance={luminance}
        active={active}
      />
    )
  }
)

PreviewButton.defaultProps = {
  luminance: 0,
  active: false,
}
