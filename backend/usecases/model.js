
export class Model {
    constructor() {
        this.shoppers = [];          // list of all shoppers
        this.admin = {
            password: "verysecurepassword",
            credentials: null
        };
        this.purchases = [];         // all purchases
        this.favoriteStores = [];    // saved favorite stores
        this.storeChains = [];       // all store chains
    }

    // ---- Shopper data ----
    addShopper(shopper) {
        this.shoppers.push(shopper);
    }

    getShopper(username) {
        return this.shoppers.find(s => s.username === username);
    }

    updateShopper(updatedShopper) {
        const index = this.shoppers.findIndex(s => s.username === updatedShopper.username);
        if (index !== -1) {
            this.shoppers[index] = updatedShopper;
        }
    }

    // ---- Purchases ----
    addPurchase(purchase) {
        this.purchases.push(purchase);
    }

    getPurchasesFor(username) {
        return this.purchases.filter(p => p.username === username);
    }

    // ---- Favorite stores ----
    addFavoriteStore(store) {
        this.favoriteStores.push(store);
    }

    getFavoritesFor(username) {
        return this.favoriteStores.filter(s => s.username === username);
    }
    // ---- Credentials validation ----
    validateCredentials(credentials) {
    const shopper = this.shoppers.find(s => s.credentials === credentials);
    return shopper ? shopper.username : null;
}

}
