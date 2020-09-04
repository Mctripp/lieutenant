const axios = require('axios')
const fs = require('fs')

console.log('begin axios call')

axios.get('https://mtgjson.com/api/v5/AllIdentifiers.json')
  .then(res => {
    const searchJSON = {
      data: []
    }
    let i = 0
    for (const [_key, value] of Object.entries(res.data.data)) {
      if (value[0].legalities.commander === 'Legal') {
        searchJSON.data.push({
          index: i++,
          name: value[0].name,
          scryfallId: value[0].identifiers.scryfallId
        })
      }
    }

    const data = JSON.stringify(searchJSON)

    fs.writeFile('./../src/test/SearchBarJSON.json', data, (err) => {
      if (err) {
        throw err
      }
      console.log('JSON data is saved.')
    })
  })
  .catch(err => console.log('Error: ' + err))
