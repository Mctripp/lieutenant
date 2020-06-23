import React from 'react'
import baseUrl from './../../urlConfig'

const CardDisplay = ({ cardImage, cardName, cardId, cardSet }) => {
  React.useEffect(() => {
    console.log(cardImage)
  }, [])

  const divStyle = {
    display: 'inline-block',
    padding: '5px',
    border: '2px solid black'
  }

  // should make this window dynamic
  const imgStyle = {
    width: '12.6em',
    height: '17.6em'
    // minWidth: '12.6em',
    // maxWidth: '15.75em',
    // minHeight: '17.6em',
    // maxHeight: '22em'
  }

  if ({ cardImage } !== undefined) {
    return (
      <React.Fragment>
        <div style={divStyle}>
          <a href={baseUrl + '/' + cardId}>
            <img style={imgStyle} src={cardImage}/>
            <h6>{cardName} ({cardSet})</h6>
          </a>
        </div>
      </React.Fragment>
    )
  } else {
    return (
      <h4>Loading...</h4>
    )
  }
}

export default CardDisplay
