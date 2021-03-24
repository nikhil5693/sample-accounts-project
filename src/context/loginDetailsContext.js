import { createContext } from 'react';

const loginContext = createContext({
    isLoggedIn: false,
    id: '',
    setLoggedIn: () => {}, 
})

export default loginContext;
