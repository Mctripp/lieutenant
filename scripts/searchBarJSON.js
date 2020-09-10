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
      if (value.legalities && value.legalities.commander === 'Legal') {
        searchJSON.data.push({
          index: i++,
          token: false,
          name: value.name,
          scryfallId: value.identifiers.scryfallId
        })
      } else if (value.layout === 'token') {
        searchJSON.data.push({
          index: i++,
          token: true,
          name: value.types.includes('Creature') ? value.name + ' Token (' + value.colors.join('/') + ', ' + value.power + '/' + value.toughness + ')' : value.name,
          scryfallId: value.identifiers.scryfallId
        })
      }
    }

    // Removes duplicates
    const filteredCards = searchJSON.data.filter((item, index, self) =>
      index === self.findIndex((t) => (
        t.name === item.name
      ))
    )

    const data = JSON.stringify(filteredCards)

    fs.writeFile('./../src/SearchBarJSON.json', data, (err) => {
      if (err) {
        throw err
      }
      console.log('JSON data is saved.')
    })
  })
  .catch(err => console.log('Error: ' + err))
