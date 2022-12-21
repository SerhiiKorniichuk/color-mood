import { ReactComponent as DeleteIcon } from 'assets/icons/close.svg'
import { ReactComponent as CopyIcon } from 'assets/icons/copy.svg'
import { ReactComponent as LockIcon } from 'assets/icons/lock.svg'
import { ReactComponent as UnlockIcon } from 'assets/icons/unlock.svg'
import chroma from 'chroma-js'
import classNames from 'classnames'
import { ActionButton } from 'components/ActionButton/ActionButton'
import { PreviewButton } from 'components/PreviewButton/PreviewButton'
import { useAppDispatch } from 'store/hooks'
import { deleteColor, updateColor } from 'store/slices/generation/slice'
import { Color } from 'utilities/color'
import { copyToClipboard } from 'utilities/copyToClipboard'
import * as S from './Card.styles'

interface CardProps {
  color: Color
  disableDelete?: boolean
}

export function Card({ color, disableDelete }: CardProps) {
  const { id, hex, locked } = color

  const dispatch = useAppDispatch()

  const handleDelete = () => {
    dispatch(deleteColor(id))
  }

  const handleCopy = () => {
    copyToClipboard(hex)
  }

  const handleLock = () => {
    dispatch(updateColor({ ...color, locked: !locked }))
  }

  const luminance = chroma(hex).luminance()

  return (
    <S.Wrapper style={{ backgroundColor: hex }}>
      <S.ActionBar>
        <ActionButton
          luminance={luminance}
          aria-label="Delete"
          icon={<DeleteIcon />}
          className={classNames({ hidden: disableDelete })}
          onClick={handleDelete}
        />
        <ActionButton
          luminance={luminance}
          aria-label="Copy"
          icon={<CopyIcon />}
          onClick={handleCopy}
        />
        <ActionButton
          luminance={luminance}
          aria-label="Lock"
          icon={locked ? <LockIcon /> : <UnlockIcon />}
          className={classNames({ active: locked })}
          onClick={handleLock}
        />
      </S.ActionBar>
      <S.PreviewBox>
        <PreviewButton luminance={luminance}>{hex}</PreviewButton>
      </S.PreviewBox>
    </S.Wrapper>
  )
}

Card.defaultProps = {
  disableDelete: false,
}
