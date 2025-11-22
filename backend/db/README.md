 - Everything the database needs so the use cases I'm doing
 - they just need to exist in the DB layer
 - so the Lambda functions can call them later.

### For the Shopper Functions (for register, login, and dashboard)
We need these:

- **usernameExists(username)**  
  Just return true/false if the username is already taken.

- **createShopper(username, password)**  
  Add a new shopper into the database.

- **getPassword(username)**  
  Return the saved password for that username.

- **generateCredentials(username)**  
  Make some kind of login token, save it, and return it.

- **validateCredentials(token)**  
  Check if the token is valid and return the username it belongs to.
  If it’s not valid, return null/undefined.

### Dashboard Stuff (for showing the user’s info)

- **getRecentPurchases(username)**  
  Return the shopper’s recent purchases in the format we already use in the API.

- **getFavoriteStores(username)**  
  Return whatever stores they have saved or marked as favorites.

### Admin Login

- **getAdminPassword()**  
  Just return the admin password from wherever you’re storing it.

- **generateAdminCredentials()**  
  Create an admin token, save it, and return it.

These are literally the only DB functions my use-case code needs.  
As long as these exist and return the right info, everything will hook into AWS later
without any issues.
 