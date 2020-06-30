import React from 'react'
// import CardDisplay from './CardDisplay/CardDisplay'
import MainSearch from './MainSearch/MainSearch'
import { Container, Row, Col } from 'react-bootstrap'
// const mtg = require('mtgsdk')
// import { card } from 'mtgsdk'

const space = {
  height: '30vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
const search = {
  background: 'grey',
  borderRadius: '10px'
}

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
    <Container fluid="lg" className="justify-content-md-center">
      <Col>
        <Row style={space}/>
        <Row className="justify-content-md-center">
          <Col style={search}>
            <Row className="justify-content-md-center">
              <h2>Search for a specific card:</h2>
            </Row>
            <Row className="justify-content-md-center">
              <MainSearch/>
            </Row>
          </Col>
        </Row>
        <Row style={space}/>
        <Row className="justify-content-md-center">
          <h3>Find a player or game:</h3>
        </Row>
        <Row className="justify-content-md-center">
          <h4><a href='#/games'>My Games</a></h4>
        </Row>
        <Row className="justify-content-md-center">
          <h4><a href='#/players'>My players</a></h4>
        </Row>
      </Col>
    </Container>
  )
}
// }

export default DevPage
