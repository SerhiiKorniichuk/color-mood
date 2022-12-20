import { Card } from 'components/Card/Card'
import { Children, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import {
  createInitialColorList,
  selectColors,
} from 'store/slices/generation/slice'

export function CardGroup() {
  const dispatch = useAppDispatch()

  const colors = useAppSelector(selectColors)

  useEffect(() => {
    dispatch(createInitialColorList(5))
  }, [dispatch])

  return <>{Children.toArray(colors.map((color) => <Card data={color} />))}</>
}
