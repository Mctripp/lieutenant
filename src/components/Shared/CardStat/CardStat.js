import React from 'react'
import { Card } from 'react-bootstrap'

const CardStat = ({ bodyText }) => {
  return (
    <Card>
      <Card.Body>{bodyText}</Card.Body>
    </Card>
  )
}

export default CardStat
