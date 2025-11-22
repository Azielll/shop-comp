/* Show Admin Dashboard
 - Takes admin credentials
 - Checks if credentials match
 - Returns a summary of shoppers, stores, and sales
*/

export function adminDashboard(input, db) {
    const { adminCredentials } = input;

    if (!adminCredentials) {
        return { error: "missing credentials" };
    }

    if (adminCredentials !== db.admin.credentials) {
        return { error: "invalid credentials" };
    }

    const numberShoppers = db.shoppers.length;
    const numberTotalStores = db.storeChains.flatMap(c => c.stores).length;
    const totalSales = db.purchases.reduce((sum, p) => sum + p.price, 0);

    return {
        summary: {
            numberShoppers,
            numberTotalStores,
            totalSales
        }
    };
}
