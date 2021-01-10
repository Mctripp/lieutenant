import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Slider, Input, Typography, Container } from '@material-ui/core'
import CardImage from './CardImage/CardImage'
import LoadingImage from './../../../LTNTLoading.gif'

const useStyles = makeStyles({
  root: {
    width: 250
  },
  input: {
    width: 42
  },
  container: {
    maxWidth: '360px',
    alignItems: 'left',
    marginLeft: 0
  }
})

const CardSlider = ({ printsSearchUri, cardData }) => {
  const classes = useStyles()
  const [loaded, setLoaded] = useState(false)
  const [printUris, setPrintUris] = useState([])
  const [secondPrintUris, setSecondPrintUris] = useState([])
  const [printSets, setPrintSets] = useState([])
  const [printSetNames, setPrintSetNames] = useState([])
  const [selectedValue, setSelectedValue] = useState(1)
  const [isDouble, setIsDouble] = useState(false)

  axios.defaults.withCredentials = false

  const handleSliderChange = (event, newValue) => {
    setSelectedValue(newValue)
  }

  const handleInputChange = (event) => {
    setSelectedValue(event.target.value > printUris.length ? printUris.length - 1 : event.target.value < 1 ? 1 : Number(event.target.value))
  }

  const handleBlur = () => {
    if (selectedValue < 1) {
      setSelectedValue(0)
    } else if (selectedValue > printUris.length) {
      setSelectedValue(printUris.length - 1)
    }
  }

  useEffect(() => {
    axios.get(printsSearchUri)
      .then(res => {
        const layoutType = res.data.data[0].layout
        const cardData = res.data.data
        if (layoutType === 'transform' ||
        layoutType === 'modal_dfc' ||
      layoutType === 'art_series') {
          setIsDouble(true)
          setPrintUris(cardData.map(item => {
            return item.card_faces[0].image_uris.normal
          }))
          setSecondPrintUris(cardData.map(item => {
            return item.card_faces[1].image_uris.normal
          }))
        } else {
          setPrintUris(cardData.map(item => {
            return item.image_uris.normal
          }))
        }
        setPrintSets(cardData.map(item => {
          return item.set
        }))
        setPrintSetNames(cardData.map(item => {
          return item.set_name
        }))
      })
      .then(() => setLoaded(true))
      .catch(err => console.log(err))
  }, [])

  // Use MaterialUI Slider

  return (
    <React.Fragment>
      {loaded ? (
        <React.Fragment>
          {isDouble ? (
            <React.Fragment>
              <CardImage
                cardUri={printUris[selectedValue - 1]}
              />
              <CardImage
                cardUri={secondPrintUris[selectedValue - 1]}
              />
            </React.Fragment>
          )
            : (
              <CardImage
                cardUri={printUris[selectedValue - 1]}
              />
            )}
          <Container className={classes.container}>
            <Typography id="input-slider" gutterBottom>
              Set: {printSetNames[selectedValue - 1]} ({printSets[selectedValue - 1].toUpperCase()})
            </Typography>
            {(printUris.length !== 1) ? (
              <Grid container spacing={2} alignItems="stretch">
                <Grid item xs>
                  <Slider
                    defaultValue={1}
                    min={1}
                    max={printUris.length}
                    value={selectedValue}
                    onChange={handleSliderChange}
                    aria-labelledby="input-slider"
                    step={1}
                    marks={printUris.length <= 15 }
                  />
                </Grid>
                <Grid item>
                  <Input
                    className={classes.input}
                    value={selectedValue}
                    margin="dense"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                      min: 1,
                      max: printUris.length,
                      type: 'number',
                      'aria-labelledby': 'input-slider'
                    }}
                  />
                  / {printUris.length}
                </Grid>
              </Grid>
            )
              : <br/>
            }
          </Container>
        </React.Fragment>
      )
        : <img src={LoadingImage}/>
      }
    </React.Fragment>
  )
}

export default CardSlider
