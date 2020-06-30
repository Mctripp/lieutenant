import React, { useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import cards from '../../MTGCards_IDs_Names_Sets'

const cardIds = Object.keys(cards)

const cardOptions = Object.values(cards).map((card, i) => {
  return {
    key: cardIds[i],
    value: card.name,
    text: card.name
  }
})

// Removes duplicates
const filteredCardOptions = cardOptions.filter((item, index, self) =>
  index === self.findIndex((t) => (
    t.text === item.text
  ))
)

const style = {
  width: '50vh',
  fontSize: '2rem',
  border: '0.1rem solid grey'
}

const MainSearch = () => {
  const [query, setQuery] = useState('')

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  const handleBlur = () => {
    setQuery('')
  }

  const dynamicSearch = () => {
    return filteredCardOptions.filter(card => card.text.toLowerCase().includes(query.toLowerCase()))
  }

  if (query.length > 2) {
    return (<Dropdown
      style={style}
      button
      className='icon'
      floating
      onSearchChange={handleChange}
      labeled
      options={dynamicSearch()}
      onBlur={handleBlur}
      search
      text='Select Card'
    />
    )
  } else {
    return (<Dropdown
      style={style}
      button
      className='icon'
      floating
      onSearchChange={handleChange}
      labeled
      onBlur={handleBlur}
      search
      text='Select Card'
    />
    )
  }
}

export default MainSearch
