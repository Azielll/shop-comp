/* REGISTER SHOPPER USE CASE*/
/* This impliments:
- The db object represents our database.
- Already existing username
- missing fields error message
- adds new client accounts to our database and checks for duplicates 
*/
export function registerShopper(input, db) { 
const { username, password } = input;
 if (!username || !password) {
        return { error: "missing fields" };
    }
    const alreadyExists = db.usernameExists(username);
    if (alreadyExists) {
        return { error: "username already exists" };
    }
       db.createShopper(username, password);
        return {
        username: username
    }; //based on our api design we return the username when its passed through 
}
