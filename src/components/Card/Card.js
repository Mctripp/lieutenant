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
  // Each card has a 'prints_search_uri' which can be requested to obtain different prints.
  // prints_search_uri will contain 'total_cards' (int) and 'has_more' (bool)
  // Each item in 'data' on this page will have full card information and different prints
  // So iterate through #'total_cards' times and grab each 'image_uris' === 'normal'
  // Display different prints as small nodes below the currently displayed image,
  // With arrows on each end for navigation.
  // Might have to consider using 'iilustration_id' for unique arts rather than all reprint arts
  // ---
  // Use pagination from https://material-ui.com/components/pagination/

  return (
    <React.Fragment>
      <Button as={Link} to='/'>Back to card search</Button>
      {loaded ? (<React.Fragment><br></br><img src={cardData.image_uris.normal}/></React.Fragment>) : 'Loading, this may take a couple seconds...'}
    </React.Fragment>
  )
}

export default Card
