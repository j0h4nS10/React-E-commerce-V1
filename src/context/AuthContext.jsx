import { createContext } from "react";

import React, {useState} from "react";

export const AuthContext = createContext();

const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState('');
    const setMyToken = (token) => {setToken(token)};
    const clearToken = () => setToken('');

    return (<Provider value={{ token, setMyToken, clearToken }}>{children}</Provider>)
}

export default AuthProvider
