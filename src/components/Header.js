import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function Header ({ isLoggedIn, setIsLoggedIn, setUserInformation, userInformation }) {
    function logout() {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setUserInformation({});
                setIsLoggedIn(false);
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    return (
        <header>
            <nav>
                <div className="siteName">
                    <p>Shlelp</p>
                </div>
                <div className="navBar">
                    {isLoggedIn && <Link to="/">
                        <p>Dashboard</p>
                    </Link>}
                    {isLoggedIn && <Link to="/user">
                        <p>Profile</p>
                    </Link>}
                    {!isLoggedIn && <Link to="/login">
                        <p>Login</p>
                    </Link>}
                    {!isLoggedIn &&<Link to="/create-user">
                        <p>Create User</p>
                    </Link>}
                    {isLoggedIn && <p className="logout" onClick={() => logout()}>Log Out</p>}
                </div>
            </nav>
        </header>
    );
}

export default Header;