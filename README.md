# MTG Lieutenant

This app is planned for use with a [mobile data acquisition app](#). Users will gather Magic: The Gathering game data with the app, and will be able to view stats about cards, games, and players involved once that data is pushed to [a Heroku database](#).

Currently the app is in development, but there will be a quick look-up using [this dropdown component](https://react.semantic-ui.com/modules/dropdown/) (7/17/20 - This has been working for a few weeks now, and the card image is displayed for any card searched. Tokens are still broken though).

Since the dropdown uses a predefined set of values, [Gatherer Extractor](https://www.mtgsalvation.com/forums/magic-fundamentals/other-magic-products/third-party-products/337224-mtg-gatherer-extractor-v6-6-database-pics) was used to pull EDH-legal card names to populate this list. The extractor itself does not provide much filtering (7/17/20 - false, I'm just blind), so I downloaded the commander-legal card data as an .xml file and used a regexp find-and-replace to effectively filter out data. I originally planned on using a .csv file to load the data, and converted the filtered .xml to a .csv. After uploading the file to Google Sheets for an easy transfer to my laptop, [csvjson.com](https://csvjson.com/csv2json) was used to convert the CSV data into JSON hashes, since that seemed to make more sense. The landing page will provide a search bar to provide global stats to an anonymous user, as well as user-specific stats for those that are signed in.

7/17/2020 - I have decided to go with Neo4j for the database, since a graph DB makes more sense than making a jankier version within mongoDB. The following ERD describes the initial relationships the DB will have:

## ERD

![Lieutenant ERD](/public/LTNT_ERD.png)

7/30/2020 - I am likely changing the database used from gatherer to [Scryfall](https://scryfall.com/). Gatherer is nice, but does not provide images/data for almost any of the tokens, which I would like to provide data for. I will therefore be implementing use of [MTGJSON](https://mtgjson.com/), since that can provide me with an up-to-date search engine for Lieutenant, as well as the required QL to retrieve images from Scryfall. I will also figure out a way to keep the search engine updated, since I would like a pre-populated list in order to keep load times low. Ideally this will be done automatically, but it is not necessary at the moment and may be done manually until I figure it out.
