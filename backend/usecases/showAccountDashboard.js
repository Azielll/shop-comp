/* User case: Show Account Dashboard
- Takes in the shopper's credential token - from api design 
- Confirms the token is valid (meaning the shopper is logged in)
- Retrieves the shopper's recent purchases
- Retrieves the shopper's favorite stores
- Returns all this information in the format defined by the API
*/
export function showAccountDashboard(input, db){
  const { shopperCredentials } = input; // Pull out the credential token from the input JSON
   if (!shopperCredentials) {
        return { error: "missing credentials" };
    }
     const username = db.validateCredentials(shopperCredentials);
      if (!username) {
        return { error: "invalid credentials" };
      }
      const recentPurchases = db.getRecentPurchases(username);
      const favoriteStores = db.getFavoriteStores(username);
      return {
        username: username,
        recentPurchases: recentPurchases,
        favoriteStores: favoriteStores
    };
}