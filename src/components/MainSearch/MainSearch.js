import React, { useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import cards from '../../MTGCards_IDs_Names_Sets'

const cardIds = Object.keys(cards)

const cardOptions = Object.values(cards).map((card, i) => {
  return {
    key: cardIds[i],
    value: card.name,
    text: card.name + ' (' + card.set + ')'
  }
})

const MainSearch = () => {
  const [query, setQuery] = useState('')

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  const dynamicSearch = () => {
    return cardOptions.filter(card => card.text.includes(query))
  }

  if (query.length > 2) {
    return (<Dropdown
      button
      className='icon'
      floating
      onSearchChange={handleChange}
      labeled
      options={dynamicSearch()}
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
      search
      text='Select Card'
    />
    )
  }
}

export default MainSearch
