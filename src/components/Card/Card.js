import React, { useEffect, useState } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import mtg from '../../mtgApiConfig'
import axios from 'axios'

const Card = ({ id }) => {
  const [loaded, setLoaded] = useState(false)
  const [cardData, setCardData] = useState('')

  useEffect(() => {
    axios.get(mtg + id)
      .then(res => setCardData(res.data))
      .then(() => setLoaded(true))
      .catch(err => console.log(err))
  }, [])

  // This return statement will end up pulling from a formatting card display with pertinent information

  return (
    <React.Fragment>
      <Button as={Link} to='/'>Back to card search</Button>
      {loaded ? (<React.Fragment><p>{cardData.name}</p><img src={cardData.image_uris.normal}/></React.Fragment>) : 'Loading, this may take a couple seconds...'}
    </React.Fragment>
  )
}

export default Card
