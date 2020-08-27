import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import CardImage from './CardImage/CardImage'

const CardRadio = ({ printsSearchUri, cardData }) => {
  const [loaded, setLoaded] = useState(false)
  const [printUris, setPrintUris] = useState([])
  const [selectedValue, setSelectedValue] = React.useState('0')
  const handleChange = (event) => {
    setSelectedValue(event.target.value)
  }

  useEffect(() => {
    axios.get(printsSearchUri)
      .then(res => {
        setPrintUris(res.data.data.map(item => {
          return item.image_uris.normal
        }))
      })
      .then(() => setLoaded(true))
      .catch(err => console.log(err))
  }, [])

  // Use radio from https://material-ui.com/components/radio/
  // Maybe use a ButtonGroup instead? Can use ellipses to save space on certain numbers

  return (
    <React.Fragment>
      {loaded ? (
        <React.Fragment>
          <CardImage
            cardUri={printUris[selectedValue]}
          />
          <RadioGroup row>
            {printUris.map((item, idx) => {
              return <FormControlLabel onChange={handleChange} checked={selectedValue === idx + ''} key={idx} value={idx} labelPlacement='bottom' control={<Radio />} label={idx + 1} />
            })}
          </RadioGroup>
        </React.Fragment>
      )
        : '...'}
    </React.Fragment>
  )
}

export default CardRadio
