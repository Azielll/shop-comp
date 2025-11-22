### Database Notes

These are the database functions and fields that need to exist for the use cases I implemented.  
They just need to exist in the DB layer so the Lambda functions can call them later.

All of this is required for Register Shopper, Login Shopper, Show Shopper Dashboard, Login Admin, Show Admin Dashboard, Create Store Chain, and Create Store.

### Shopper Functions

usernameExists(username)  
    Return true or false depending on whether the username is already taken.

createShopper(username, password)  
    Add a new shopper entry into the database.

getPassword(username)  
    Return the saved password for the username.

generateCredentials(username)  
    Create a login token, save it for that shopper, and return it.

validateCredentials(token)  
    Check if a token belongs to a shopper.  
    Return the username if valid, otherwise return null.

### Dashboard Data

getRecentPurchases(username)  
    Return the shopper's recent purchases in the format used by the API.

getFavoriteStores(username)  
    Return the saved favorite stores for the shopper.

### Admin Functions

getAdminPassword()  
    Return the stored admin password.

generateAdminCredentials()  
    Create and store an admin token, then return it.

validateAdminCredentials(token)  
    Return true or false depending on whether the admin token is valid.

### Store Chain Functions

storeChainExists(name)  
    Return true or false depending on whether the store chain name is already used.

createStoreChain(name, url)  
    Create a new store chain with an empty list of stores.

getStoreChain(name)  
    Return the store chain object or null.

storeExists(chainName, address)  
    Return true or false depending on whether a store with this address already exists inside the chain.

addStoreToChain(chainName, address)  
    Add a new store, with just the address field, to the chain's store list.

### Admin Dashboard Data

getNumberOfShoppers()  
    Return how many shoppers exist in total.

getTotalStores()  
    Return how many stores exist across all store chains.

getTotalSales()  
    Return the total of all purchase prices combined.

These are all the DB functions required for the use cases.  
As long as these exist and return the expected values, the Lambda layer can call them and everything will work when connected to AWS.
