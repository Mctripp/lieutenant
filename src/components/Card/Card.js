import React, { useEffect, useState } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import mtg from 'mtgsdk'

const Card = ({ id }) => {
  const [loaded, setLoaded] = useState(false)
  const [cardImg, setCardImg] = useState('')

  useEffect(() => {
    let card = {}
    mtg.card.find(id)
      .then(found => {
        console.log(found)
        card = found
      })
      .then(() => setCardImg(card.card.imageUrl))
      .then(() => setLoaded(true))
  }, [])
  return (
    <React.Fragment>
      <Button as={Link} to='/'>Back to card search</Button>
      {loaded ? (<React.Fragment><p>{name}</p><img src={cardImg}/></React.Fragment>) : 'Loading...'}
    </React.Fragment>
  )
}

export default Card
