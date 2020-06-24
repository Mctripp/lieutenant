import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const cardOptions = [
  { text: 'Mirri, Cat Warrior' },
  { text: 'Etali, Primal Storm' },
  { text: 'Avacyn, Angel of Hope' }
]

const MainSearch = () => (
  <Dropdown
    button
    className='icon'
    floating
    labeled
    icon='card'
    options={cardOptions}
    search
    text='Select Card'
  />
)

export default MainSearch
