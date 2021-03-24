## Notes:
1. Use `npm install` for installing the dependencies.
2. Use `npm start` to start the server (http://localhost:3000/login).
3. Please use any of the login credentials provided in the file `src/mock/login.js`.
    a. Ex: harry123/Password1
4. Please use the provided Bread crumb for navigation.
5. Use the `Add Account` button in the top nav bar for creating a new account (I am not saving it to db or firebase. It will vanish on page reload.). 
6. Please check the `src/mock/` for sample data.
7. Added alpha numeric validation for Username in Login page and for first name and last name fields in new account page.
8. Added the validations to check if all the details are entered before adding the new account.

## Concepts used:
1. Context api
2. Redux
3. React hooks
4. Custom hooks (For setting the login details to session storage)
5. Routing
6. Lazy and Suspense
7. Rematch (Middleware)
8. Material UI
9. Higher order components
10. Miraje.js for mock server
