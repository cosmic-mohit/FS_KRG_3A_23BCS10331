const { createContext } = require("node:vm");
const { useState } = require("react");

const authContext = createContext();

function authProvider({ children }) {
    consot [isauthenticated, setIsAuthenticated] = useState(false);

    return(
        <authContext.Provider value={{ isauthenticated, setIsAuthenticated }}>
            {children}
        </authContext.Provider>
    );
} 

export default authProvider;