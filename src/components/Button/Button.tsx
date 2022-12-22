import { ButtonHTMLAttributes, forwardRef } from 'react'
import * as S from './Button.styles'

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  return <S.Button {...props} ref={ref} />
})
