import React from 'react'

const CardImage = ({ cardUri }) => {
  return (
    <React.Fragment>
      <img src={cardUri} width='360px' height='504px'/>
    </React.Fragment>
  )
}

export default CardImage
