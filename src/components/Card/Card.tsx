import { ReactComponent as CloseIcon } from 'assets/icons/close.svg'
import { ReactComponent as CopyIcon } from 'assets/icons/copy.svg'
import { ReactComponent as LockIcon } from 'assets/icons/lock.svg'
import chroma from 'chroma-js'
import { ActionButton } from 'components/ActionButton/ActionButton'
import { PreviewButton } from 'components/PreviewButton/PreviewButton'
import { Color } from 'utilities/color'
import * as S from './Card.styles'

interface CardProps {
  color: Color
}

export function Card({ color }: CardProps) {
  const luminance = chroma(color.hex).luminance()
  return (
    <S.Wrapper style={{ backgroundColor: color.hex }}>
      <S.ActionBar>
        <ActionButton
          luminance={luminance}
          aria-label="Close"
          icon={<CloseIcon />}
        />
        <ActionButton
          luminance={luminance}
          aria-label="Copy"
          icon={<CopyIcon />}
        />
        <ActionButton
          luminance={luminance}
          aria-label="Lock"
          icon={<LockIcon />}
        />
      </S.ActionBar>
      <S.PreviewBox>
        <PreviewButton luminance={luminance}>{color.hex}</PreviewButton>
      </S.PreviewBox>
    </S.Wrapper>
  )
}
