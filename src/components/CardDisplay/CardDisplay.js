import React from 'react'
import baseUrl from './../urlConfig'

const CardDisplay = ({ cardImg, cardName, cardNumber }) => {
  // const [cardImg, setCardImg] = React.useState('')

  return (
    <React.Fragment>
      <a href={baseUrl + '/' + cardNumber}>
        <img src={cardImg}/>
        <h4>{cardName}</h4>
      </a>
    </React.Fragment>
  )
}

export default CardDisplay
