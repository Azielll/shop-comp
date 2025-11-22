/*Next user case is Login Administrator
- Takes in the admin password from the incoming JSON
- Checks if the password is correct
- If the password is correct, creates an admin credential token
-If something is wrong, returns the correct 400 error message*/

export function loginAdministrator(input, db) {
    const { password } = input;
      if (!password) {
        return { error: "missing password" };
    }
    const correctAdminPassword = db.getAdminPassword();
    if (password !== correctAdminPassword) {
        return { error: "wrong password" };
    }
    //db.generateAdminCredentials() will produce a unique token
    //that the admin uses for the rest of the admin-only actions.
     const adminCredentials = db.generateAdminCredentials();
     return {
        adminCredentials: adminCredentials
    };
}