/* Create Store Chain
 - Takes store chain name + url + admin credentials
 - Checks if chain already exists
 - Creates a new chain with an empty stores list
*/

export function addStoreChain(input, db) {
    const { name, url, adminCredentials } = input;

    if (!name || !url || !adminCredentials) {
        return { error: "missing fields" };
    }

    if (adminCredentials !== db.admin.credentials) {
        return { error: "invalid credentials" };
    }

    const exists = db.storeChains.find(c => c.name === name);
    if (exists) {
        return { error: "chain already exists" };
    }

    const chain = { name, url, stores: [] };
    db.storeChains.push(chain);

    return chain;
}
