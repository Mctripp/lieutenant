import React from 'react'
// const mtg = require('mtgsdk')
import { card } from 'mtgsdk'

const DevPage = () => {
  const [cardImg, setCardImg] = React.useState('')

  React.useEffect(() => {
    card.where({ subtypes: 'Golem' })
      .then(cards => {
        for (let i = 0; i < cards.length; i++) {
          console.log(cards[i].name)
        }
        setCardImg(cards[23].imageUrl)
      })
  }, [])

  return (
    <React.Fragment>
      <p>
      This is the dev page.
      </p>
      <img src={cardImg}/>
    </React.Fragment>
  )
}

export default DevPage
