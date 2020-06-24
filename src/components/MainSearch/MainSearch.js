import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'

const MainSearch = () => {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={[{ title: 'A card' },
        { title: 'Another card' }]}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Search for a card name" variant="outlined" />}
    />
  )
}

export default MainSearch
