import React, { useEffect, useState } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import mtg from 'mtgsdk'

const Card = ({ id }) => {
  const [loaded, setLoaded] = useState(false)
  const [cardImg, setCardImg] = useState('')

  useEffect(() => {
    let found = {}
    mtg.card.find(id)
      .then(card => {
        // Pick pertinent info out of here
        console.log(card)
        found = card
      })
      .then(() => setCardImg(found.card.imageUrl))
      .then(() => setLoaded(true))
  }, [])

  // This return statement will end up pulling from a formatting card display with pertinent information

  return (
    <React.Fragment>
      <Button as={Link} to='/'>Back to card search</Button>
      {loaded ? (<React.Fragment><p>{name}</p><img src={cardImg}/></React.Fragment>) : 'Loading, this may take a couple seconds...'}
    </React.Fragment>
  )
}

export default Card
