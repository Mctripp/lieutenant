import React from 'react'

const CardImage = ({ cardUri }) => {
  return (
    <React.Fragment>
      <img src={cardUri}/>
    </React.Fragment>
  )
}

export default CardImage
