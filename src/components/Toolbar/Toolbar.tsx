import { Button } from 'components/Button/Button'
import { useAppDispatch } from 'store/hooks'
import { updateColorsList } from 'store/slices/generation/slice'
import { Color } from 'utilities/color'

interface ToolbarProps {
  colors: Color[]
}

export function Toolbar({ colors }: ToolbarProps) {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(updateColorsList())
  }

  const disableGeneration = !colors.some((color) => !color.locked)

  return (
    <Button type="button" onClick={handleClick} disabled={disableGeneration}>
      Generate
    </Button>
  )
}
