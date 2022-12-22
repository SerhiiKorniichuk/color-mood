import { ReactComponent as DeleteIcon } from 'assets/icons/close.svg'
import { ReactComponent as CopyIcon } from 'assets/icons/copy.svg'
import { ReactComponent as LockIcon } from 'assets/icons/lock.svg'
import { ReactComponent as UnlockIcon } from 'assets/icons/unlock.svg'
import chroma from 'chroma-js'
import classNames from 'classnames'
import { ActionButton } from 'components/ActionButton/ActionButton'
import { ColorPicker } from 'components/ColorPicker/ColorPicker'
import { PreviewButton } from 'components/PreviewButton/PreviewButton'
import { Tooltip } from 'components/Tooltip/Tooltip'
import { FC, memo } from 'react'
import { useAppDispatch } from 'store/hooks'
import { deleteColor, updateColor } from 'store/slices/generation/slice'
import { Color } from 'utilities/color'
import { copyToClipboard } from 'utilities/copyToClipboard'
import * as S from './Card.styles'

interface CardProps {
  color: Color
  disableDelete?: boolean
}

export const Card: FC<CardProps> = memo(({ color, disableDelete = false }) => {
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

  const handleChange = (newColor: string) => {
    dispatch(updateColor({ ...color, hex: newColor }))
  }

  const luminance = chroma(hex).luminance()

  return (
    <S.Wrapper style={{ backgroundColor: hex }}>
      <S.ActionBar>
        <Tooltip
          trigger={
            <ActionButton
              luminance={luminance}
              icon={<DeleteIcon />}
              className={classNames({ hidden: disableDelete })}
              onClick={handleDelete}
            />
          }
        >
          Delete
        </Tooltip>

        <Tooltip
          trigger={
            <ActionButton
              luminance={luminance}
              icon={<CopyIcon />}
              onClick={handleCopy}
            />
          }
        >
          Copy HEX
        </Tooltip>

        <Tooltip
          trigger={
            <ActionButton
              luminance={luminance}
              icon={locked ? <LockIcon /> : <UnlockIcon />}
              className={classNames({ active: locked })}
              onClick={handleLock}
            />
          }
        >
          Handle lock
        </Tooltip>
      </S.ActionBar>
      <S.PreviewBox>
        <Tooltip
          trigger={(open) => (
            <PreviewButton luminance={luminance} active={open}>
              {hex}
            </PreviewButton>
          )}
          on={['click']}
          closeOnDocumentClick
          closeOnEscape
        >
          <ColorPicker color={hex} onChange={handleChange} />
        </Tooltip>
      </S.PreviewBox>
    </S.Wrapper>
  )
})
