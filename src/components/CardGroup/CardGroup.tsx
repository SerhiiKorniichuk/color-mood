import { Card } from 'components/Card/Card'
import { Children } from 'react'

function CardGroup() {
  const data: string[] = []
  return (
    <>
      {Children.map(data, () => (
        <Card />
      ))}
    </>
  )
}

export { CardGroup }
