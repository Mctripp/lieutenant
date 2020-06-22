import React, { useState } from 'react'
import CardDisplay from './CardDisplay/CardDisplay'
// const mtg = require('mtgsdk')
import { card } from 'mtgsdk'

const DevPage = () => {
  const [loaded, setLoaded] = useState(false)
  const [cardsImg, setCardsImg] = useState([])
  const [cardsName, setCardsName] = useState([])
  const [cardsId, setCardsId] = useState([])

  React.useEffect(() => {
    const cardImg = []
    const cardName = []
    const cardId = []
    card.where({ subtypes: 'Golem' })
      .then(cards => {
        for (let i = 0; i < cards.length; i++) {
          console.log(cards[i])
          cardImg.push(cards[i].imageUrl)
          cardName.push(cards[i].name)
          cardId.push(cards[i].id)
        }
      })
      .then(() => setCardsImg(cardImg))
      .then(() => setCardsName(cardName))
      .then(() => setCardsId(cardId))
      .then(() => setLoaded(true))
  }, [])

  if (!loaded) {
    return (
      <h1>Loading, this may take a minute...</h1>
    )
  } else {
    return (
      <React.Fragment>
        {cardsImg.map((cardImage, i) => {
          const cardName = cardsName[i]
          const cardId = cardsId[i]
          return (<CardDisplay
            key = {i}
            cardImage = {cardImage}
            cardName = {cardName}
            cardId = {cardId}
          />
          )
        })}
      </React.Fragment>
    )
  }
}

export default DevPage
