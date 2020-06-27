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

const MainSearch = () => {
  const [query, setQuery] = useState('')

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  const handleBlur = () => {
    setQuery('')
  }

  const dynamicSearch = () => {
    return cardOptions.filter(card => card.text.toLowerCase().includes(query.toLowerCase()))
  }

  if (query.length > 2) {
    return (<Dropdown
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
