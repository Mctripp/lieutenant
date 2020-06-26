import React from 'react'
// import CardDisplay from './CardDisplay/CardDisplay'
import MainSearch from './MainSearch/MainSearch'
// const mtg = require('mtgsdk')
// import { card } from 'mtgsdk'

const DevPage = () => {
  // const [loaded, setLoaded] = useState(false)
  // const [cardsImg, setCardsImg] = useState([])
  // const [cardsName, setCardsName] = useState([])
  // const [cardsId, setCardsId] = useState([])
  // const [cardsSet, setCardsSet] = useState([])

  // React.useEffect(() => {
  //   const cardImg = []
  //   const cardName = []
  //   const cardId = []
  //   const cardSet = []
  //   card.where({ name: 'Etali, Primal Storm' })
  //     .then(cards => {
  //       for (let i = 0; i < cards.length; i++) {
  //         console.log(cards[i])
  //         if (cards[i].imageUrl) {
  //           cardImg.push(cards[i].imageUrl)
  //           cardName.push(cards[i].name)
  //           cardId.push(cards[i].id)
  //           cardSet.push(cards[i].set)
  //         }
  //       }
  //     })
  //     .then(() => setCardsImg(cardImg))
  //     .then(() => setCardsName(cardName))
  //     .then(() => setCardsId(cardId))
  //     .then(() => setCardsSet(cardSet))
  //     .then(() => setLoaded(true))
  // }, [])

  // After above axios, should store in a SearchResults page for navigation

  // if (!loaded) {
  //   return (
  //     <h1>Loading, this may take a minute...</h1>
  //   )
  // } else {

  // {cardsImg.map((cardImage, i) => {
  //   const cardName = cardsName[i]
  //   const cardId = cardsId[i]
  //   const cardSet = cardsSet[i]
  //   return (<CardDisplay
  //     key = {i}
  //     cardImage = {cardImage}
  //     cardName = {cardName}
  //     cardId = {cardId}
  //     cardSet = {cardSet}
  //   />
  //   )
  // })}
  return (
    <React.Fragment>
      <MainSearch/>
    </React.Fragment>
  )
}
// }

export default DevPage
