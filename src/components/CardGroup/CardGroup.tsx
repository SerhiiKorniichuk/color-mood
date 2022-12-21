import { Card } from 'components/Card/Card'
import { Children } from 'react'
import { Color } from 'utilities/color'

interface CardGroupProps {
  colors: Color[]
}

export function CardGroup({ colors }: CardGroupProps) {
  return (
    <>
      {Children.toArray(
        colors.map((color) => (
          <Card color={color} disableDelete={colors.length < 2} />
        ))
      )}
    </>
  )
}
