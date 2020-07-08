# MTG Lieutenant

This app is planned for use with a [mobile data acquisition app](#). Users will gather Magic: The Gathering game data with the app, and will be able to view stats about cards, games, and players involved once that data is pushed to [a Heroku database](#).

Currently the app is in development, but there will be a quick look-up using [this dropdown component](https://react.semantic-ui.com/modules/dropdown/).

Since the dropdown uses a predefined set of values, [Gatherer Extractor](https://www.mtgsalvation.com/forums/magic-fundamentals/other-magic-products/third-party-products/337224-mtg-gatherer-extractor-v6-6-database-pics) was used to pull EDH-legal card names to populate this list. The extractor itself does not provide much filtering, so I downloaded the commander-legal card data as an .xml file and used a regexp find-and-replace to effectively filter out data. I originally planned on using a .csv file to load the data, and converted the filtered .xml to a .csv. After uploading the file to Google Sheets for an easy transfer to my laptop, [csvjson.com](https://csvjson.com/csv2json) was used to convert the CSV data into JSON hashes, since that seemed to make more sense. The landing page will provide a search bar to provide global stats to an anonymous user, as well as user-specific stats for those that are signed in.
