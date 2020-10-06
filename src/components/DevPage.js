import React from 'react'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import CardStat from './Shared/CardStat/CardStat'
import Image from '../GrnRareLtnt.jpeg'

const DevPage = () => {
  return (
    // Here, should be:
    // - CardDisplay container, containing:
    //  - CardImageDisplay
    //  - CardStatsDisplay, containing:
    //   - CardStat containers
    <Jumbotron>
      <Container fluid className="cardDisplay">
        <Row>
          <Col>
            <img src={Image} width='360px' height='504px'/>
          </Col>
          <Col>
            <Row>
              <CardStat
                bodyText='Destroyed 23 times'
              />
              <CardStat
                bodyText='Destroyed 19 permanents'
              />
              <CardStat
                bodyText='Exiled 34 times'
              />
              <CardStat
                bodyText='Exiled 0 permanents'
              />
              <CardStat
                bodyText='Drawn 14 times'
              />
              <CardStat
                bodyText='Discarded 3 times'
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}
// }

export default DevPage
