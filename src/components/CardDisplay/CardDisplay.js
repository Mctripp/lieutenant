import React from 'react'
import baseUrl from './../../urlConfig'

const CardDisplay = ({ cardImage, cardName, cardId }) => {
  // const [cardImg, setCardImg] = React.useState('')
  React.useEffect(() => {
    console.log(cardImage)
  }, [])

  return (
    <React.Fragment>
      <a href={baseUrl + '/' + cardId}>
        <img src={cardImage}/>
        <h4>{cardName}</h4>
      </a>
    </React.Fragment>
  )
}

export default CardDisplay
