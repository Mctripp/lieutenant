import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Button } from 'semantic-ui-react'
import cards from '../../MTGCards_IDs_Names_Sets'

const cardIds = Object.keys(cards)

const cardOptions = Object.values(cards).map((card, i) => {
  return {
    key: cardIds[i],
    value: card.name,
    text: card.name,
    id: cardIds[i],
    as: Link,
    to: `/card/${cardIds[i]}`
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
  const [value, setValue] = useState('Search for a card...')

  const handleSearchChange = (event) => {
    setQuery(event.target.value)
  }

  const handleChange = (event) => {
    setValue(event.target.innerText)
  }

  const handleBlur = () => {
    setQuery('')
    setValue('Search for a card...')
  }

  const dynamicSearch = () => {
    return filteredCardOptions.filter(card => card.text.toLowerCase().includes(query.toLowerCase()))
  }

  // <Link key={index} to={'card/' + item.text}>{item.text}</Link>

  return (
    <React.Fragment>
      <Dropdown
        style={style}
        value={value}
        clearable={true}
        className='icon'
        floating
        onSearchChange={handleSearchChange}
        onChange={handleChange}
        options={(query.length > 2) ? dynamicSearch() : []}
        onBlur={handleBlur}
        search
        selection
        text={value}
      />
      <Button
        icon='right arrow'
      />
    </React.Fragment>
  )
}

export default MainSearch
