#MTG Lieutenant

This app is planned for use with a [mobile data acquisition app](#). Users will gather Magic: The Gathering game data with the app, and will be able to view stats about cards, games, and players involved once that data is pushed to [a database](#).

Currently the app is in development, but there will be a quick look-up using [this dropdown component](https://react.semantic-ui.com/modules/dropdown/), specifically the Combo Box variant.

Since the Combo Box uses a predefined set of values, [Gatherer Extractor](https://www.mtgsalvation.com/forums/magic-fundamentals/other-magic-products/third-party-products/337224-mtg-gatherer-extractor-v6-6-database-pics) was used to pull EDH-legal card names to populate this list. The landing page will provide a search bar to provide global stats to an anonymous user, as well as user-specific stats for those that are signed in.
