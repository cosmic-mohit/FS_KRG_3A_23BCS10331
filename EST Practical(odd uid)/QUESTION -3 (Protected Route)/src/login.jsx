function login(){
    const [isAuthenticated, setIsAuthenticated] = useContext(AuthContext);
    
    return (
        <div>
            <h2>LOGIN PAGE</h2>            
            <P>Status : {isAuthenticated ? "logged in succesfully" : "logged out"};</P>
            <br />
            <Link to = "/dashboard">Go to Dashboard</Link>
        </div>
    );
}