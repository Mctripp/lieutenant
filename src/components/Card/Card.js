import React, { useEffect, useState } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import mtg from '../../mtgApiConfig'
import axios from 'axios'
// import CardRadio from './CardRadio/CardRadio'
import CardSlider from './CardSlider/CardSlider'
import LoadingImage from './../../LTNTLoading.gif'

axios.defaults.withCredentials = false

const Card = ({ id }) => {
  const [loaded, setLoaded] = useState(false)
  const [cardData, setCardData] = useState('')

  useEffect(() => {
    axios.get(mtg + id, {
      headers: { }
    })
      .then(res => setCardData(res.data))
      .then(() => setLoaded(true))
      .catch(err => console.log(err))
  }, [])

  // Use pagination from https://material-ui.com/components/pagination/

  return (
    <React.Fragment>
      <Button as={Link} to='/'>Back to card search</Button>
      <br/>
      {loaded ? (
        <React.Fragment>
          <CardSlider
            cardData={cardData}
            printsSearchUri={cardData.prints_search_uri}
          />
        </React.Fragment>
      )
        : <img src={LoadingImage}/>}
    </React.Fragment>
  )
}

export default Card
