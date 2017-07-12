# Crisp URL

Crisp URL shrinks gibberish long URLs to short and sweet nothings. It is implemented using node, express, react and mongodb to store hashed urls. Ideally, it can store upto Number.MAX_SAFE_INTEGER( 2^53 - 1) urls.

## How it works
1. Takes long URLs submitted by the user via the React front end
2. Check if the URL has already been shortened to avoid creating duplicates
3. Store it in the database using the model urls and updates the sequence
4. Encodes the id of the newly inserted object
5. If it has been shortened, return the base58 encoded ID right away
6. If it hasn't been shortened, we will create a new entry for it
7. Returns the shortened version of the URL to the user

Check out the live app at: [*crispURL-app*](https://crispurl.herokuapp.com/)
