import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import * as S from './ActionButton.styles'

interface ActionButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  icon?: ReactNode
  luminance?: number
}

export const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({ icon, luminance, ...props }, ref) => {
    return (
      <S.ActionButton {...props} ref={ref} luminance={luminance}>
        {icon}
      </S.ActionButton>
    )
  }
)

ActionButton.defaultProps = {
  icon: undefined,
  luminance: 0,
}
