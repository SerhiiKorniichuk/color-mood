import { Button } from '@chakra-ui/react'
import { useAppDispatch } from 'store/hooks'
import { updateColorsList } from 'store/slices/generation/slice'

export function Toolbar() {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(updateColorsList())
  }

  return (
    <Button type="button" variant="solid" onClick={handleClick}>
      Generate
    </Button>
  )
}
