import React from 'react'
// import CardDisplay from './CardDisplay/CardDisplay'
import MainSearch from './MainSearch/MainSearch'
import { Container, Row, Col } from 'react-bootstrap'
// const mtg = require('mtgsdk')
// import { card } from 'mtgsdk'

// TODO move this styling to .scss -----------------------------<<<---<<<

const space = {
  height: '20vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const DevPage = () => {
  return (
    <Container fluid="lg" className="justify-content-md-center">
      <Col>
        <Row style={space}/>
        <Row className="justify-content-md-center">
          <h1><u>Lieutenant for Magic: The Gathering</u></h1>
          <h3>Ever wonder who in your EDH group is abusing <a href='#/card/f9baef6e-a086-41d4-a20e-486f01d72406'>Cyclonic Rift</a> the most, or mucking up everyone’s mana with <a href='#/card/0806adab-6a08-411b-b249-e1c58ade354b'>Vorinclex, Voice of Hunger</a>? Want to see how many times <a href='#/card/db149aaa-3da9-48c4-92cc-b3d804285290'>Avacyn, Angel of Hope</a> has been exiled by <a href='#/card/057d2410-30d3-4b7a-9dc3-f2512c1cf31c'>Swords to Plowshares</a>, or how many <a href='#/card/ed666385-a2e7-4e1f-ad2c-babbfc0c50b3'>5/5 Elementals</a> <a href='#/card/58f311e7-7ebf-4428-b5a3-154255eb3ba1'>Omnath, Locus of Rage</a> has produced, along with the amount of face damage that they’ve done?</h3>
          <br></br>
          <br></br>
          <h4>Lieutenant is a relational database meant to provide players with
          useful and informative stats about their cards. Currently, it is only functional as a card query on <a href='https://scryfall.com/'>Scryfall</a>&#39;s API for cards and tokens. I am currently working on filling out the database with sample data from games I play with my friends, as well as a mobile companion app for intuitive data collection. I plan on having multiple groups testing out the system once I get it up and running.
          </h4>
        </Row>
        <Row style={space}/>
        <Row className="justify-content-md-center">
          <Col>
            <Row className="justify-content-md-center">
              <MainSearch/>
            </Row>
          </Col>
        </Row>
        {// <Row className="justify-content-md-center">
        //   <h3>Find a player or game (WIP):</h3>
        // </Row>
        // <Row className="justify-content-md-center">
        //   <h4><a href='#/games'>My Games</a></h4>
        // </Row>
        // <Row className="justify-content-md-center">
        //   <h4><a href='#/players'>My players</a></h4>
        // </Row>
        }
      </Col>
    </Container>
  )
}
// }

export default DevPage
