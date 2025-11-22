/* Create Store
 - Takes chainName + address + admin credentials
 - Checks if the chain exists
 - Adds store address to the chain's list
*/

export function addStoreToChain(input, db) {
    const { chainName, address, adminCredentials } = input;

    if (!chainName || !address || !adminCredentials) {
        return { error: "missing fields" };
    }

    if (adminCredentials !== db.admin.credentials) {
        return { error: "invalid credentials" };
    }

    const chain = db.storeChains.find(c => c.name === chainName);
    if (!chain) {
        return { error: "chain does not exist" };
    }

    const exists = chain.stores.find(s => s.address === address);
    if (exists) {
        return { error: "store already exists in chain" };
    }

    chain.stores.push({ address });

    return { chain };
}
