/*Next user case is Login Shopper.
- Checks if the username exists in the database
- Checks if the password matches what is stored
- If everything is correct, creates and returns a shopper credential token (from use case)
-If something is wrong, returns the correct 400 error message*/
export function loginShopper(input, db) {
     const { username, password } = input;
     if (!username || !password) {
        return { error: "missing fields" };
     }
     const userExists = db.usernameExists(username);

    if (!userExists) {
         return { error: "username does not exist" };
    }
         const storedPassword = db.getPassword(username);
      if (storedPassword !== password) {
        return { error: "wrong password" };
    }
    /* We generate a new "credential" token for the shopper.From the API design I read over
    This token is what lets them access dashboard/history/etc.
    The actual token generation is handled by the db object. This would be implimented in AWS*/
    const shopperCredentials = db.generateCredentials(username);
        return {
        username: username,
        shopperCredentials: shopperCredentials
    };
}